'use client'
import { signOutUser } from "@/lib/sign-up";
import React from "react";

const SignOut = () => {
  return (
    <div>
      <button onClick={signOutUser}>Sign Out</button>
    </div>
  );
};

export default SignOut;
