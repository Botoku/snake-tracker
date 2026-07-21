"use client";
import React from "react";
import SnakeListHome from "../components/snakes/SnakeListHome";
import { useUserInfoStore } from "@/lib/Store";
import HomeSalesPage from "@/components/general-ui/HomeSalesPage";

const Page = () => {
  const user = useUserInfoStore((state) => state.user);
  if (!user) return <HomeSalesPage />;
  return (
    <div className="min-h-screen bg-primary-900 pt-10">
      <SnakeListHome />
    </div>
  );
};

export default Page;
