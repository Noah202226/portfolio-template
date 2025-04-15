import React from "react";

const InfiniteScroll = ({ speed = 40 }) => {
  const logos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="py-6 bg-white overflow-hidden group">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold text-black p-6">
          Companies I've worked for
        </h2>
      </div>

      <div className="scroll-wrapper">
        <div
          className="scroll-content"
          style={{ animationDuration: `${speed}s` }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {logos.map((num) => (
                <div
                  key={`${i}-${num}`}
                  className="w-48 h-48 flex justify-center items-center flex-shrink-0"
                >
                  <img
                    src={`/company-logos/${num}.jpg`}
                    alt={`Company ${num}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
