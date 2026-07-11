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
      <p className="text-sm mb-3">Sign in to snake parent</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-600 rounded-lg w-full px-4 py-1 text-sm"
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={(e) => handleUserChange("email", e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-sm" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter Your Password"
            className="border border-gray-600 rounded-lg w-full px-4 py-1 text-sm"
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleUserChange("password", e.target.value)}
          />
        </div>
        <button
          className="bg-[#526E7F] px-2 py-1 rounded-lg cursor-pointer w-full font-bold mt-3"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
