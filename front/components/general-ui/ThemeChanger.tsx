"use client";
import { useUserInfoStore } from "@/lib/Store";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  // const [mounted, setMounted] = useState(false);
  const user = useUserInfoStore((state) => state.user);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  if (!theme) {
    return null;
  }

  if (!user) return;

  const handleThemeChange = (theme: string) =>{
    setTheme(theme)
    setIsActive(false)
  }

  return (
    <div>
      <div className="flex items-center">
        <p>
          Theme: <span className="capitalize font-bold">{theme}</span>{" "}
        </p>
        <button
          className="bg-primary-200 cursor-pointer  hover:bg-primary-100 ml-3 text-black px-4 py-1 rounded"
          onClick={() => setIsActive((prev) => !prev)}
        >
          {isActive ? "Close" : "Change Theme"}
        </button>
      </div>
      <div className={`${isActive ? "flex" : "hidden"} gap-2 `}>
        <button
          className="cursor-pointer hover:text-primary-800"
          onClick={() => handleThemeChange("colombian")}
        >
          colombian
        </button>
        <button
          className="cursor-pointer hover:text-primary-800"
          onClick={() => handleThemeChange("albino")}
        >
          albino
        </button>
        <button
          className="cursor-pointer hover:text-primary-800"
          onClick={() => handleThemeChange("anery")}
        >
          anery
        </button>
        <button
          className="cursor-pointer hover:text-primary-800"
          onClick={() => handleThemeChange("argentine")}
        >
          argentine
        </button>
        <button
          className="cursor-pointer hover:text-primary-800"
          onClick={() => handleThemeChange("sonoran")}
        >
          sonoran
        </button>
        <button
          className="cursor-pointer hover:text-primary-800"
          onClick={() => handleThemeChange("salmon")}
        >
          salmon
        </button>
      </div>
    </div>
  );
};

export default ThemeChanger;
