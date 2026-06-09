import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:  process.env.NEXT_PUBLIC_BACKEND_URL_AUTH ||  "http://localhost:4000/api/auth",
  // baseURL: "http://localhost:4000",
});
