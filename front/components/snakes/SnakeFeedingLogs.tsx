import React from "react";
import { FoodSVG, RegurgitationSVG, RejectedSVG } from "../general-ui/SVG";
import { Feeding } from "@/lib/types";

const SnakeFeedingLogs = ({
  feedingData,
}: {
  feedingData: Feeding[] | null;
}) => {
  return (
    <div>
      <p className="my-3 text-2xl">Recent Activity</p>
      {feedingData &&
        feedingData.map((feed, i) => (
          <div
            className={`px-4 my-3 flex items-center justify-around py-3 rounded-lg gap-4 ${i % 2 === 0 ? "bg-primary-100" : "bg-white"}`}
            key={feed.id}
          >
            <div>
              {feed.acceptance === "accepted" && FoodSVG}
              {feed.acceptance === "refused" && RejectedSVG}
              {feed.acceptance === "regurgitated" && RegurgitationSVG}
            </div>
            <p className="w-1/6">{new Date(feed.feeding_date).toDateString()}</p>
            <p className="w-1/6">{feed.prey_type}</p>
            <p className="w-1/6">{feed.prey_frozen}{feed.prey_size}</p>
            <p className={`w-1/6 ${feed.acceptance === 'accepted' && 'text-green-600'} ${feed.acceptance === 'refused' && 'text-red-600'}`} >{feed.acceptance}</p>
            <p className="w-1/6">{feed.notes}</p>
          </div>
        ))}
    </div>
  );
};

export default SnakeFeedingLogs;
