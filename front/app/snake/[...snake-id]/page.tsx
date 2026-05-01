"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FeedingForm from "@/components/snakes/FeedingForm";
import { Feeding, Snake } from "@/lib/types";
import {
  FoodSVG,
  RegurgitationSVG,
  RejectedSVG,
} from "@/components/general-ui/SVG";
import SnakePageInfoHero from "@/components/snakes/SnakePageInfoHero";
import SnakeFeedingLogs from "@/components/snakes/SnakeFeedingLogs";

const SnakePage = () => {
  const params = useParams<{ "snake-id": string[] }>();
  const snakeId = params["snake-id"]?.[0];
  const [feedingData, setFeedingData] = useState<Feeding[] | null>(null);
  const [snakeInfo, setSnakeInfo] = useState<Snake | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!snakeId) return;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/snakes/feedings/${snakeId}`,
      );
      const data = await res.json();
      setFeedingData(data);
      console.log(data);
    };

    fetchData();
  }, [snakeId]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL!}/snakes/snake/${snakeId}`,
        );

        if (!res.ok) throw new Error("Error getting snake info");
        const data = await res.json();
        setSnakeInfo(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getInfo();
  }, [snakeId]);

  return (
    <div className="w-[90%] mx-auto pt-4">
      {/* TODO: ADD functionality for uploading and displaying images */}
      <SnakePageInfoHero info={snakeInfo || null} />
      <FeedingForm />
      <SnakeFeedingLogs feedingData={feedingData} />
    </div>
  );
};

export default SnakePage;
