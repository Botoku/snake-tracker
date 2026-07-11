"use client";
import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import Link from "next/link";
import dynamic from "next/dynamic";
const ThemeChanger = dynamic(() => import("./ThemeChanger"), { ssr: false });
const Header = () => {
  return (
    <div className="flex justify-around items-center bg-transparent fixed top-2 w-full  border-primary-800">
      <Link className="text-black font-bold" href={"/"}>Snake Parent</Link>
      <nav>
        <UserInfoHeader />
        {/* <ThemeChanger /> */}
      </nav>
    </div>
  );
};

export default Header;
