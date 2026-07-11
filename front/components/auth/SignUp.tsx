'use client'
import { signUserUp } from "@/lib/sign-up";
import React, { useState } from "react";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(userData)
    signUserUp(userData);
  };
  console.log(process.env.BACKEND_URL)

  const handleUserChange = (stateKey: keyof typeof userData, value: string)=> {
    setUserData({...userData, [stateKey]: value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold text-sm" htmlFor="name">Username</label>
          <input className="border border-gray-600 rounded-lg w-full px-4 py-1 text-sm" placeholder="Enter Your Name" type="text" name="name" id="name" onChange={(e)=> handleUserChange("name", e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-sm" htmlFor="email">Email</label>
          <input className="border border-gray-600 rounded-lg w-full px-4 py-1 text-sm" placeholder="Enter Your Email"  type="text" name="email" id="email" onChange={(e)=> handleUserChange("email", e.target.value)}/>
        </div>
        <div className="mb-4">
          <label className="block font-bold text-sm" htmlFor="password">Password</label>
          <input className="border border-gray-600 rounded-lg w-full px-4 py-1 text-sm" placeholder="Enter Your Password"  type="password" name="password" id="password" onChange={(e)=> handleUserChange("password", e.target.value)}/>
        </div>
        <button className="bg-[#F09F86] px-2 py-1 rounded-lg cursor-pointer w-full font-bold mt-3" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
