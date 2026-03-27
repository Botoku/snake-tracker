"use client";
import { signUserIn } from "@/lib/sign-up";
import React, { useState } from "react";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUserIn(userData);
  };
  console.log(process.env.BACKEND_URL);

  const handleUserChange = (stateKey: keyof typeof userData, value: string) => {
    setUserData({ ...userData, [stateKey]: value });
  };
  return (
    <div>
        <p>hi</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => handleUserChange("email", e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleUserChange("password", e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
