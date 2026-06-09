"use client";
import { useUserInfoStore } from "@/lib/Store";
import { Snake } from "@/lib/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SnakeList = () => {
  const user = useUserInfoStore((state) => state.user);
  const [snakes, setSnakes] = useState<Snake[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) {
      setLoading(false);
      return;
    }
    // if (!user?.id) return;

    const fetchSnakes = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/snakes/${user.id}`,
        );
        const data = await res.json();
        setSnakes(data);
      } catch (error) {
        console.error("Failed to fetch snakes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSnakes();
  }, [user?.id]);

  console.log(snakes);
  return (
    <div className="bg-primary-900  grid grid-cols-1 md:grid-cols-3">
      {snakes &&
        snakes?.map((snake) => (
          <Link
            className="bg-white p-3"
            href={`/snake/snake-id?snakeId=${snake.id}`}
            key={snake.id}
          >
            <p className="text-primary-800 text-xs">{snake.species}</p>
            <p className="text-black font-bold text-xl">{snake.name}</p>

            <div className="bg-gray-300 text-black w-1/3 p-3 rounded-md">
              <p className="text-xs">Morph</p>
              <p className="font-bold">{snake.morph}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SnakeList;
