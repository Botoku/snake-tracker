"use client";
import { preyItemDetails } from "@/lib/animalInfo/snakeDetails";
import React, { useState } from "react";

const FeedingForm = () => {
  const initialState = {
    snake_id: "",
    feeding_date: "",
    prey_type: "",
    prey_size: "",
    prey_weight: "",
    prey_frozen: "",
    quantity: 1,
    acceptance: true,
    notes: "",
  };
  const [activeForm, setActiveForm] = useState(false);
  const [feedingInfo, setFeedingInfo] = useState(initialState);

  console.log(feedingInfo)

  return (
    <div>
      <button
        className="bg-primary-600 px-3 py-1 rounded-md cursor-pointer"
        onClick={() => setActiveForm((prev) => !prev)}
      >
        {activeForm ? "Cancel" : "+ Log New Feeding"}
      </button>
      {activeForm && (
        <form className="bg-primary-400 p-4 rounded-lg" action="">
          <div className="md:flex">
            <div className="md:w-2/3">
              <div className="bg-primary-100 p-3 rounded-lg my-2">
                <label className="text-sm" htmlFor="date">
                  Date Of Feeding
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={(e) =>
                    setFeedingInfo((prev) => ({
                      ...prev,
                      feeding_date: e.target.value,
                    }))
                  }
                  value={feedingInfo.feeding_date}
                />
              </div>

              <div className="bg-primary-100 p-3 rounded-lg my-2">
                <div>
                  <label htmlFor="prey">Prey Item Details</label>
                  <select name="prey" id="prey">
                    {preyItemDetails.map((prey, i) => (
                        <option onClick={() => setFeedingInfo(prev => ({...prev, prey_type: prey}))} key={i} value={prey}>
                        {prey}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="preyWeight">Weight</label>
                  <input type="text" name="preyWeight" id="preyWeight" value={feedingInfo.prey_weight} />
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-primary-200 p-3 rounded-lg my-2">
                <label htmlFor="">Prey Status</label>
                <ul>
                  <li onClick={()=> setFeedingInfo(prev=>({...prev, prey_frozen: 'frozen_thawed' }))}>Frozen/Thawed</li>
                  <li onClick={()=> setFeedingInfo(prev=>({...prev, prey_frozen: 'live' }))}>Live</li>
                  <li onClick={()=> setFeedingInfo(prev=>({...prev, prey_frozen: 'freshly_killed' }))}>Fresh Killed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-100 p-3 rounded-lg my-2">
            <label htmlFor="">Feeding Response</label>
            <div>
              <p>Accepted</p>
              <p>Refused</p>
              <p>Regurgitated</p>
            </div>
          </div>
          <div className="bg-primary-100 p-3 rounded-lg my-2">
            <label htmlFor="notes">Feeding Notes</label>
            <input type="text" />
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedingForm;
