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
        <div>
          <input type="text" name="name" id="name" onChange={(e)=> handleUserChange("name", e.target.value)} />
          <label htmlFor="name">Username</label>
        </div>
        <div>
          <input type="text" name="email" id="email" onChange={(e)=> handleUserChange("email", e.target.value)}/>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input type="password" name="password" id="password" onChange={(e)=> handleUserChange("password", e.target.value)}/>
          <label htmlFor="password">Password</label>
        </div>
        <button className="bg-primary-100 px-2 py-1 rounded-lg cursor-pointer" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
