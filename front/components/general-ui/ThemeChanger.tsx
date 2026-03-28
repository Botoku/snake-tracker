"use client";
import { useTheme } from "next-themes";
import { useState } from "react";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setIsActive((prev) => !prev)}>Change Theme</button>
      <div className={`${isActive ? "block" : "hidden"}`}>
        <button onClick={() => setTheme("colombian")}>colombian</button>
        <button onClick={() => setTheme("argentine")}>argentine</button>
        <button onClick={() => setTheme("albino")}>albino</button>
        <button onClick={() => setTheme("sonoran")}>sonoran</button>
        <button onClick={() => setTheme("anery")}>anery</button>
        <button onClick={() => setTheme("moonglow")}>moonglow</button>
        <button onClick={() => setTheme("salmon")}>salmon</button>
      </div>
    </div>
  );
};
