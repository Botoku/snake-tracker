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
    if (!user?.id) return;

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

  if (loading) return <div>Loading...</div>;
  console.log(snakes);
  return (
    <div className="bg-primary-900 text-primary-100">
      {snakes?.map((snake) => (
        <Link href={`/snake/${snake.id}`} key={snake.id}>
          <p>{snake.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default SnakeList;
