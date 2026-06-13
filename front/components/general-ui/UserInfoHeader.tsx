"use client";
import { useAuth } from "@/lib/hooks/useAuth";
import { useUserInfoStore } from "@/lib/Store";
import Link from "next/link";

const UserInfoHeader = () => {
  const user = useUserInfoStore((state) => state.user);
  const { signOutUser } = useAuth();
  if (!user)
    return (
      <div>
        <Link href={"/auth/signin"}>Sign In</Link>
        <Link href={"/auth/signup"}>Sign Up</Link>
      </div>
    );
  return (
    <div className="flex">
      <p className="mr-3">Hello {user.name}</p>

      <button className="cursor-pointer" onClick={signOutUser}>
        Sign Out
      </button>
    </div>
  );
};

export default UserInfoHeader;
