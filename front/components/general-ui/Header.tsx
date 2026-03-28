'use client'
import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import Link from "next/link";
import { ThemeChanger } from "./ThemeChanger";

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
