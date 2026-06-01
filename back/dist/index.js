import dotenv from "dotenv";
import { pool, testConnection } from "./config/db.js";
import app from "./app.js";
dotenv.config();
const PORT = process.env.PORT || 4000;
async function startServer() {
    try {
        await testConnection();
        const server = app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
            console.log(`Environment ${process.env.NODE_ENV}`);
        });
        // Graceful shutdown
        const shutdown = async (signal) => {
            console.log(`\n${signal} received: closing HTTP server`);
            server.close(async () => {
                await pool.end();
                console.log("✅ HTTP server closed");
                process.exit(0);
            });
        };
        process.on("SIGTERM", () => shutdown("SIGTERM"));
        process.on("SIGINT", () => shutdown("SIGINT"));
    }
    catch (error) {
        console.log("Failed to start the server", error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=index.js.map