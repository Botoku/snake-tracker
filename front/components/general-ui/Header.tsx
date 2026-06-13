"use client";
import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import Link from "next/link";
import dynamic from "next/dynamic";
const ThemeChanger = dynamic(() => import("./ThemeChanger"), { ssr: false });
const Header = () => {
  return (
    <div className="flex justify-around items-center bg-primary-900 text-primary-100 border-b border-primary-800">
      <Link href={"/"}>Snake Parent</Link>
      <nav>
        <UserInfoHeader />
        <ThemeChanger />
      </nav>
    </div>
  );
};

export default Header;
