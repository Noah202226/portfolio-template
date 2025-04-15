"use client";
import React from "react";

export const Education = () => {
  return (
    <div id="education" className="hero">
      <div className="hero-content flex flex-col my-10 py-10">
        <div className="w-full  justify-between items-center">
          <h1 className="font-extrabold text-5xl text-center md:text-left">
            EDUCATION
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="/education/3.png"
                alt="Shoes"
                className="rounded-xl h-36 md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">St. Paul College</h2>
              <p>Bocaue</p>
              <div className="divider " />
              <p>High School, 2000 - 2014</p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="/education/LCCM_Seal.png"
                alt="Shoes"
                className="rounded-xl h-36 md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">La Consolacion College</h2>
              <p>Manila</p>
              <div className="divider " />
              <p>BSBA Major in Banking and Finance, 2005</p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="/education/SMCM.png"
                alt="Shoes"
                className="rounded-xl h-36 md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">St. Marys College</h2>
              <p>Meycauayan, City</p>
              <div className="divider " />
              <p>Professional Caregiving, June 2008</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
