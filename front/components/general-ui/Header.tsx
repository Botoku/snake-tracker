"use client";
import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import Link from "next/link";
import dynamic from "next/dynamic";
const ThemeChanger = dynamic(() => import("./ThemeChanger"), { ssr: false });
const Header = () => {
  return (
    <div className="flex justify-around bg-primary-900 text-primary-100">
      <Link href={"/"}>RED TAIL TRACKER</Link>
      <nav>
        <UserInfoHeader />
        <ThemeChanger />
      </nav>
    </div>
  );
};

export default Header;
