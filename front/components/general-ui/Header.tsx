import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-around border-red-300 border-b">
      <Link href={"/"}>RED TAIL TRACKER</Link>
      <nav>
        <UserInfoHeader />
      </nav>
    </div>
  );
};

export default Header;
