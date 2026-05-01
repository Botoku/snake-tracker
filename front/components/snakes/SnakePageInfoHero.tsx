import { age, dateFormatter } from "@/lib/dateFormatter";
import { Snake } from "@/lib/types";
import React from "react";

const SnakePageInfoHero = ({ info }: { info: Snake | null }) => {
  console.log(info);
  return (
    <div>
      {/* TODO: Add profile picture for snake here */}
      <p className="text-3xl">{info?.name}</p>

      <div className="flex justify-between gap-3 my-5">
        <div className="bg-primary-100 p-2 rounded-lg w-1/4">
          <p className="text-xs uppercase">Species</p>
          <p>{info?.species}</p>
        </div>
        <div className="bg-primary-100 p-2 rounded-lg w-1/4">
          <p className="text-xs uppercase">Morph</p>
          <p>{info?.morph}</p>
        </div>
        <div className="bg-primary-100 p-2 rounded-lg w-1/4">
          <p className="text-xs uppercase">Sex</p>
          <p className="capitalize">{info?.sex}</p>
        </div>
        <div className="bg-primary-100 p-2 rounded-lg w-1/4">
          <p className="text-xs uppercase">Born</p>
          <p>{info && dateFormatter.format(new Date(info.date_of_birth))} age:{info && age(info.date_of_birth)}</p>
        </div>
      </div>
    </div>
  );
};

export default SnakePageInfoHero;
