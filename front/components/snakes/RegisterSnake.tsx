"use client";
import React, { useState } from "react";
import RegisterSnakeForm from "./RegisterSnakeForm";

//  name,
//       species,
//       morph,
//       sex,
//       date_of_birth,
//       acquisition_date,
//       notes,

const RegisterSnake = () => {
  const [activeForm, setActiveForm] = useState(false);
  return (
    <div>
      <button
        className="bg-red-200 text-black cursor-pointer"
        onClick={() => setActiveForm((prev) => !prev)}
      >
        Register Snake
      </button>
      {activeForm && (
        <>
          <div>
            <p>Animal Registry</p>
            <p>Add New Animal</p>
          </div>
          <RegisterSnakeForm />
        </>
      )}
    </div>
  );
};

export default RegisterSnake;
