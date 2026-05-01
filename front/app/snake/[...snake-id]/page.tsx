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
    <div>
      <p>Recent Activity for {snakeInfo?.name}</p>
      <FeedingForm />
      <div>
        <p className="my-3">Recent Logs</p>
        {feedingData &&
          feedingData.map((feed, i) => (
            <div className={`my-3 flex gap-4 ${i % 2 ===0 ? 'bg-primary-100' : 'bg-white'}`}  key={feed.id}>
              <div>
                {feed.acceptance === "accepted" && FoodSVG}
                {feed.acceptance === "refused" && RejectedSVG}
                {feed.acceptance === "regurgitated" && RegurgitationSVG}
              </div>
              <p>{new Date(feed.feeding_date).toDateString()}</p>
              <p>{feed.prey_type}</p>
              <p>{feed.prey_size}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SnakePage;
