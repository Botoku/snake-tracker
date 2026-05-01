"use client";
import { preyItemDetails } from "@/lib/animalInfo/snakeDetails";
import { useParams } from "next/navigation";
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
    acceptance: "",
    notes: "",
  };
  const [activeForm, setActiveForm] = useState(false);
  const [feedingInfo, setFeedingInfo] = useState(initialState);

  const params = useParams<{ "snake-id": string[] }>();
  const snakeId = params["snake-id"].toLocaleString();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedingInfo((prev) => ({ ...prev, snake_id: snakeId }));
    console.log(feedingInfo);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL!}/snakes/feedings/${snakeId}`,
        {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(feedingInfo)
        }
      );

      const data = await response.json();
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div>
      <button
        className="bg-primary-600 px-3 py-1 rounded-md cursor-pointer"
        onClick={() => setActiveForm((prev) => !prev)}
      >
        {activeForm ? "Cancel" : "+ Log New Feeding"}
      </button>
      {activeForm && (
        <form
          className="bg-primary-400 p-4 rounded-lg"
          action=""
          onSubmit={handleSubmit}
        >
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
                  <select
                    onChange={(e) =>
                      setFeedingInfo((prev) => ({
                        ...prev,
                        prey_type: e.target.value,
                      }))
                    }
                    value={feedingInfo.prey_type}
                    name="prey"
                    id="prey"
                  >
                    {preyItemDetails.map((prey) => (
                      <option value={prey} key={prey}>
                        {prey}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="preyWeight">Weight</label>
                  <input
                    type="text"
                    name="preyWeight"
                    id="preyWeight"
                    onChange={(e) =>
                      setFeedingInfo((prev) => ({
                        ...prev,
                        prey_weight: e.target.value,
                      }))
                    }
                    value={feedingInfo.prey_weight}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-primary-200 p-3 rounded-lg my-2">
                <label htmlFor="">Prey Status</label>
                <ul>
                  <li
                    onClick={() =>
                      setFeedingInfo((prev) => ({
                        ...prev,
                        prey_frozen: "frozen_thawed",
                      }))
                    }
                  >
                    Frozen/Thawed
                  </li>
                  <li
                    onClick={() =>
                      setFeedingInfo((prev) => ({
                        ...prev,
                        prey_frozen: "live",
                      }))
                    }
                  >
                    Live
                  </li>
                  <li
                    onClick={() =>
                      setFeedingInfo((prev) => ({
                        ...prev,
                        prey_frozen: "freshly_killed",
                      }))
                    }
                  >
                    Fresh Killed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-100 p-3 rounded-lg my-2">
            <label htmlFor="">Feeding Response</label>
            <div>
              <p
                onClick={() =>
                  setFeedingInfo((prev) => ({
                    ...prev,
                    acceptance: "accepted",
                  }))
                }
              >
                Accepted
              </p>
              <p
                onClick={() =>
                  setFeedingInfo((prev) => ({ ...prev, acceptance: "refused" }))
                }
              >
                Refused
              </p>
              <p
                onClick={() =>
                  setFeedingInfo((prev) => ({
                    ...prev,
                    acceptance: "regurgitated",
                  }))
                }
              >
                Regurgitated
              </p>
            </div>
          </div>
          <div className="bg-primary-100 p-3 rounded-lg my-2">
            <label htmlFor="notes">Feeding Notes</label>
            <input
              type="text"
              value={feedingInfo.notes}
              onChange={(e) =>
                setFeedingInfo((prev) => ({ ...prev, notes: e.target.value }))
              }
            />
          </div>
          <button type="submit">Save Feeding Info</button>
        </form>
      )}
    </div>
  );
};

export default FeedingForm;
