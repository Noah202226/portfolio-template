// components/Slideshow.tsx
"use client"; // For Next.js App Router (if needed)

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Transcriptionist",
    role: "Vibrant and encouraging enthusiasm",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Good worker. Lira followed the instructionsgiven and completed the task in a timely manner, and to the best of her ability",
  },
  {
    name: "Data entry",
    role: "A truly inspiring Data Entry",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Submitted on time with precision. Lira was really responsive got started quickly and completed the task quickly and to a high standard. I was impressed and I would definitely work with her again! Great work!",
  },
  {
    name: "Virtual Assistant",
    role: "Add a one-liner testimonial",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "Great work, thank you.",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-40 bg-base-200 py-48 m:py-48">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white py-5">
          What My Clients Say
        </h2>
        <p className="text-gray-300 mt-2 text-xl md:text-3xl">Real feedback</p>
      </div>

      <div className="hero max-w-xl mx-auto overflow-hidden">
        <div className="hero-content ">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white shadow-lg rounded-lg p-6 max-w-xs sm:max-w-lg text-center w-5xl scroll-item ${
                current === index
                  ? "opacity-100"
                  : "opacity-0 absolute top-[-5100] left-[-500]"
              }`}
            >
              {/* <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full border-2 border-gray-300"
            /> */}
              <h3 className="text-lg font-semibold mt-4 text-gray-700">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-3 text-gray-700">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                current === index ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
