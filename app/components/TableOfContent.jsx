"use client";
import React from "react";

const TableOfContent = () => {
  const smoothScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default jump behavior
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns to the top of the section
    });
  };
  return (
    <div id="hero" className="hero min-h-max py-2 md:py-48 bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-around w-full">
        <div className="w-full">
          <p className="text-3xl md:text-9xl font-oswald font-extrabold text-center md:text-center">
            TABLE OF CONTENTS
          </p>
        </div>

        <div className="max-w-full grid grid-cols-1 md:grid-cols-1 w-full gap-8 self-center ml-25 md:ml-70">
          <button
            className="btn btn-wide rounded-4xl btn-warning p-6"
            onClick={(e) => smoothScroll(e, "about")}
          >
            ABOUT ME
          </button>

          <button
            className="btn btn-wide btn-outline rounded-4xl p-6"
            onClick={(e) => smoothScroll(e, "education")}
          >
            EDUCATION
          </button>

          <button
            className="btn btn-wide rounded-4xl btn-warning p-6"
            onClick={(e) => smoothScroll(e, "skills")}
          >
            PERSONAL SKILLS
          </button>

          <button
            className="btn btn-wide btn-outline rounded-4xl p-6"
            onClick={(e) => smoothScroll(e, "experience")}
          >
            EXPERIENCE
          </button>

          <button
            className="btn btn-wide rounded-4xl btn-warning p-6"
            onClick={(e) => smoothScroll(e, "contact")}
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
