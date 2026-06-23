import SignUp from "@/components/auth/SignUp";
import React from "react";

const page = () => {
  return (
    <div className="py-5">
      <p className="text-2xl">Welcome to snake parent</p>
      <p>Sign up below and start managing your snakes</p>
      <SignUp />
    </div>
  );
};

export default page;
