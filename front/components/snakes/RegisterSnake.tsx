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
    <div className="mb-8 pt-8">
      <button
        className="bg-primary-200 px-4 py-1 rounded  text-black cursor-pointer hover:bg-primary-100"
        onClick={() => setActiveForm((prev) => !prev)}
      >
        {activeForm ? "Close Form" : "Register Snake"}
      </button>
      {activeForm && (
        <>
          <div>
            <h3 className="text-3xl text-center mb-4">SPECIMEN REGISTRATION</h3>
          </div>
          <RegisterSnakeForm />
        </>
      )}
    </div>
  );
};

export default RegisterSnake;
