"use client";
import { snakeSpeciesEN } from "@/lib/animalInfo/species";
// import { sessionInfo } from "@/lib/sign-up";
import { useUserInfoStore } from "@/lib/Store";
import React, { useState } from "react";

type AnimalFormData = {
  name: string;
  species: string;
  morph: string;
  sex: string;
  date_of_birth: string;
  acquisition_date: string;
  notes: string;
  owner_ids: string[];
};

const RegisterSnakeForm = () => {
  const user = useUserInfoStore((state) => state.user);
  const sexOptions = ["male", "female", "unknown"];

  const initialState: AnimalFormData = {
    name: "",
    species: "",
    morph: "",
    sex: "",
    date_of_birth: "",
    acquisition_date: "",
    notes: "",
    owner_ids: user?.id ? [user.id] : [],
  };
  const [formData, setFormData] = useState(initialState);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setFormData({ ...formData, owner_ids: [user?.id] });
    console.log(formData);

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
        <div className="bg-primary-400 md:w-3/4 mx-auto py-6 px-2 rounded-sm mb-10">
          {/* <p className="text-2xl text-center uppercase">Basic Info</p> */}
          <div className="md:flex my-5">
            <div>
              <label className="cursor-pointer mr-4 font-bold" htmlFor="name">Name of Snake</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Noodle"
                className="bg-white text-black p-1 rounded block md:inline"
              />
            </div>
            <div className="">
              <label className="md:ml-5 font-bold cursor-pointer " htmlFor="species">Species</label>
              <select
                name="species"
                id="species"
                value={formData.species}
                onChange={handleChange}
                className="bg-white text-primary-800 md:ml-5 p-1 rounded cursor-pointer block md:inline"
              >
                <option value="">Select species</option>
                {snakeSpeciesEN.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:flex mb-5">
            <div>
              <label className="font-bold cursor-pointer block md:inline" htmlFor="date_of_birth">Date of Birth</label>
              <input
                id="date_of_birth"
                name="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="p-1 rounded bg-white text-primary-800 md:ml-5 cursor-pointer"
              />
            </div>
            <div>
              <label className="font-bold ml-5 cursor-pointer" htmlFor="acquisition_date">Acquisition Date</label>
              <input
                id="acquisition_date"
                name="acquisition_date"
                type="date"
                value={formData.acquisition_date}
                onChange={handleChange}
                className="p-1 rounded bg-white text-primary-800 md:ml-5 cursor-pointe block md:inline"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="font-bold cursor-pointer" htmlFor="sex">Sex</label>
            <select
              onChange={handleChange}
              value={formData.sex}
              name="sex"
              id="sex"
              className="p-1 rounded bg-white text-primary-800 ml-5 cursor-pointer"

            >
              <option  value="">Select Sex</option>
              {sexOptions.map((opt) => (
                <option value={opt} key={opt}>
                  {opt[0].toUpperCase() + opt.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="bg-primary-400 md:w-3/4 mx-auto py-6 px-2 rounded-sm mb-10">
          <div className="mb-5">
            <label className="cursor-pointer font-bold" htmlFor="morph">Morph</label>
            <input
              type="text"
              id="morph"
              name="morph"
              placeholder="Albino Khal"
              className="p-1 rounded bg-white text-primary-800 ml-5 "
              onChange={handleChange}
              value={formData.morph}
            />
          </div>

          <div className="flex items-center">
            <label className="font-bold" htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              id="notes"
              placeholder="Health Notes, lineage,feeding schedule"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              cols={50}
              className="p-1 rounded bg-white text-primary-800 ml-5 "
            />
          </div>
        </div>

        <div>
          <button
            className="bg-primary-600 mr-4 text-black px-2 py-1 cursor-pointer"
            type="submit"
          >
            Save New Snake
          </button>
          <button
            className="bg-primary-200 mr-4 text-black px-2 py-1 cursor-pointer"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      {/* <p className="mt-15 underline">TEMP FORM INFO</p> */}
      {/* <div style={{ padding: "0 2.5rem 2.5rem" }}>
        <div className="debug-panel">
          {Object.entries(formData).map(([k, v]) => (
            <div key={k}>
              <span>{k}:</span> {v || "—"}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default RegisterSnakeForm;
