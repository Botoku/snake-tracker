"use client";
import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import Link from "next/link";
import dynamic from "next/dynamic";
const ThemeChanger = dynamic(() => import("./ThemeChanger"), { ssr: false });
const Header = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md flex justify-between px-10 items-center fixed top-0 z-10 py-3 w-full  border-primary-800">
      <Link className="text-black font-bold" href={"/"}>Snake Parent</Link>
      <nav className="flex items-center gap-4">
        <UserInfoHeader />
        <ThemeChanger />
      </nav>
    </div>
  );
};

export default Header;
