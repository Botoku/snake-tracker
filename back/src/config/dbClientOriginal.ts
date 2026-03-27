import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";
import AWS from "aws-sdk";
import fs from "fs";
AWS.config.update({ region: "us-east-2" });

export async function getDbClient() {
  let password: string = process.env.DB_PASSWORD!;

  if (!password) {
    throw new Error("DB_PASSWORD environment variable is not set");
  }

  const client = new Client({
    host: "snake-tracker.ctk8gi0s6adr.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "snake_dbb",
    user: "postgres",
    password,
    // ssl: { rejectUnauthorized: false, ca: fs.readFileSync('/certs/global-bundle.pem').toString() }
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  return client;
}
export async function query(sql: string, params?: any[]) {
  const client = await getDbClient();
  try {
    const result = await client.query(sql, params);
    return result.rows;
  } catch(error){
    console.log(error)
  } 
  finally {
    await client.end();
  }
}
export async function main(): Promise<void> {
  const client = await getDbClient();
  try {
    const res = await client.query("SELECT version()");
    console.log(res.rows[0].version);
  } finally {
    await client.end();
  }
}

// Run main only if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}