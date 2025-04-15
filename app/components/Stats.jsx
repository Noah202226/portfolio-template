import React from "react";

export const Stats = () => {
  return (
    <div className="hero bg-base-200 min-h-max py-2 sm:py-48">
      <div className="hero-content bg-base-100 stats flex flex-col sm:flex-row gap-2 h-full stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title text-2xl text-center">HAPPY CLIENTS</div>
          <div className="stat-value text-6xl text-center">10+</div>
        </div>

        <div className="stat">
          <div className="stat-title text-2xl text-center">PROJECTS DONE</div>
          <div className="stat-value text-6xl text-center">20+</div>
        </div>

        <div className="stat">
          <div className="stat-title text-2xl text-center">
            YEARS EXPERIENCE
          </div>
          <div className="stat-value text-6xl text-center">4+</div>
        </div>
      </div>
    </div>
  );
};
