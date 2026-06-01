import { pool } from "../config/db.js";
import { betterAuth } from "better-auth";
import { Pool } from "pg";
// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=require`;

const connectionString = `postgresql://${process.env.DB_USER || 'postgres'}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT || '5432'}/${process.env.DB_NAME}?sslmode=no-verify`;

export const auth = betterAuth({
  database: new Pool({
    connectionString,
      ssl: {
    rejectUnauthorized: false,
  },
  }) 
  // {
  //   provider: "postgres",
  //   // url: connectionString
  //   connection: pool,
  // },
  ,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: process.env.NODE_ENV === "production",
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 * 60,
    },
  },
  trustedOrigins: [process.env.FRONTEND_URL || "http://localhost:3000"],
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:4000",
});
   