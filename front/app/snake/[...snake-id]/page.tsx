"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FeedingForm from "@/components/snakes/FeedingForm";

const SnakePage = () => {
  const params = useParams<{ "snake-id": string[] }>();
  const snakeId = params["snake-id"];
  const [feedingData, setFeedingData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if(!snakeId) return
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/snakes/feedings/${snakeId}`,
      );
      const data = await res.json();
      setFeedingData(data)
      console.log(data);
    };

    fetchData();
  }, [snakeId]);

  return (
    <div>
      SnakePage
      <p>Recent Activity</p>
       <FeedingForm />
      <div>
        {feedingData && feedingData.map(feed => <div className="my-3 flex gap-4" key={feed.id}>
          <p>{new Date((feed.feeding_date)).toDateString()}</p>
          <p>{feed.prey_type}</p>
          <p>{feed.prey_size}</p>
        </div>)}
      </div>
    </div>
  );
};

export default SnakePage;
