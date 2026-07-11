import SignUp from "@/components/auth/SignUp";
import React from "react";

const page = () => {
  return (
    <div className="md:flex min-h-screen bg-white text-black">
      <div className="pt-16 mb-10 md:mb-0 md:pt-0 md:w-1/2 flex flex-col items-center justify-center">
        <div>
          <p className="text-2xl mb-6 font-bold capitalize">Welcome to snake parent</p>
          <p className="text-sm mb-6">Sign up below and start managing your snakes</p>
          <SignUp />
        </div>
      </div>
    <div
        className="bg-[url('/signUpBG.png')] bg-cover bg-center bg-no-repeat w-full md:w-1/2 min-h-75 md:min-h-full"
      />
    </div>
  );
};

export default page;
