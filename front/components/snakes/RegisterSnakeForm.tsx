"use client";
import { snakeSpeciesEN } from "@/lib/animalInfo/species";
import { sessionInfo } from "@/lib/sign-up";
import { useUserInfoStore } from "@/lib/Store";
import React, { useEffect, useState } from "react";

type AnimalFormData = {
  name: string;
  species: string;
  morph: string;
  sex: string;
  date_of_birth: string;
  acquisition_date: string;
  notes: string;
  owner_ids: (string | undefined)[];
};

const initialState: AnimalFormData = {
  name: "",
  species: "",
  morph: "",
  sex: "",
  date_of_birth: "",
  acquisition_date: "",
  notes: "",
  owner_ids: [],
};
const RegisterSnakeForm = () => {
  const [formData, setFormData] = useState(initialState);
  const sexOptions = ["male", "female", "unknown"];

  const user = useUserInfoStore((state) => state.user);
  console.log(user)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ ...formData, owner_ids: [user?.id] });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL!}/snakes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Noodle"
            // className="bg-white"
          />
        </div>
        <div>
          <label htmlFor="species">Species</label>
          <select name="species" id="species" onChange={handleChange}>
            <option value="">Select species</option>
            {snakeSpeciesEN.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sex">Sex</label>
          <select onChange={handleChange} name="sex" id="sex">
            <option value="">Select Sex</option>
            {sexOptions.map((opt) => (
              <option value={opt} key={opt}>
                {opt[0].toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="morph">Morph</label>
          <input
            type="text"
            name="morph"
            placeholder="Albino Khal"
            onChange={handleChange}
            value={formData.morph}
          />
        </div>

        <div>
          <div>
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input
              id="date_of_birth"
              name="date_of_birth"
              type="date"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="acquisition_date">Acquisition Date</label>
            <input
              id="acquisition_date"
              name="acquisition_date"
              type="date"
              value={formData.acquisition_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            placeholder="Health Notes, lineage,feeding schedule"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Register Animal</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>

      <div style={{ padding: "0 2.5rem 2.5rem" }}>
        <div className="debug-panel">
          {Object.entries(formData).map(([k, v]) => (
            <div key={k}>
              <span>{k}:</span> {v || "—"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterSnakeForm;
