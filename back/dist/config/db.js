import dotenv from "dotenv";
dotenv.config();
import { Pool } from "pg";
import AWS from "aws-sdk";
AWS.config.update({ region: "us-east-2" });
const isProduction = process.env.NODE_ENV === "production";
const poolConfig = {
    host: process.env.DB_HOST ||
        "snake-tracker.ctk8gi0s6adr.us-east-2.rds.amazonaws.com",
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_NAME || "snake_dbb",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD,
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
};
// Add SSL for RDS
if (isProduction || process.env.DB_HOST?.includes("rds.amazonaws.com")) {
    poolConfig.ssl = {
        rejectUnauthorized: false,
    };
}
export const pool = new Pool(poolConfig);
// Event handlers
pool.on("connect", () => {
    console.log("Database connection established");
});
pool.on("error", (err) => {
    console.error("Unexpected database error:", err);
    process.exit(-1);
});
export async function query(sql, params) {
    try {
        const result = await pool.query(sql, params);
        return result.rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
export async function testConnection() {
    try {
        const result = await pool.query("SELECT version()");
        console.log("Database connected:", result.rows[0].version);
    }
    catch (error) {
        console.error("❌ Database connection failed:", error);
        throw error;
    }
}
// Graceful shutdown
process.on("SIGINT", async () => {
    console.log("Closing database pool...");
    await pool.end();
    process.exit(0);
});
process.on("SIGTERM", async () => {
    console.log("Closing database pool...");
    await pool.end();
    process.exit(0);
});
//# sourceMappingURL=db.js.map