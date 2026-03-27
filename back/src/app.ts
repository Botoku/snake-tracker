import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.ts";
import routes from "./routes/index.ts";
import { createSnakeTable } from "./models/snakeQueries.ts";


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))

// Better auth 
app.all("/api/auth/{*any}", toNodeHandler(auth))


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello from the snake tracker");
});

app.use('/api', routes)




// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// const client = await getDbClient()

// console.log(client)
createSnakeTable()
// app.listen(port, () => {
//   console.log("Hello from snake app");
// });

export default app
