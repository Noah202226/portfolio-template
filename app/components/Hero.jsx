"use client";
import React from "react";
import { motion } from "motion/react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
export default function Hero() {
  const smoothScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default jump behavior
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns to the top of the section
    });
  };
  return (
    <div id="hero" className="hero min-h-max bg-base-100">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* <img
          src="/profile-sample.png"
          className="max-w-2xs sm:max-w-md rounded-lg shadow-2xl"
        /> */}
        <motion.img
          src="/profile-sample.png"
          alt="example"
          className="rounded-lg max-w-xs md:max-w-md" // Optional Tailwind styling
          initial={{ border: "4px solid transparent" }}
          whileHover={{
            border: "4px solid #3b82f6", // Tailwind's blue-500
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          style={{
            borderRadius: "12px",
            cursor: "pointer",
          }}
        />
        <div className="max-w-full flex-1/2">
          <div className="flex items-center text-green-600 gap-3 ">
            <HiOutlineArrowNarrowLeft color="#FEE502" />{" "}
            <p style={{ color: "#FEE502" }}>Introduction</p>
          </div>
          <h1 className="text-4xl font-bold font-rubik">
            HELLO{" "}
            <motion.span
              role="img"
              aria-label="waving hand"
              style={{ display: "inline-block", fontSize: "3rem" }}
              animate={{ rotate: [0, 20, -10, 20, -5, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </h1>
          <h1 className="text-7xl font-extrabold font-rubik">
            I'm Noa Ligpitan
          </h1>
          <h1 className="text-4xl font-medium font-rubik">
            Software Developer
          </h1>
          <p className="py-6 w-full prose font-rubik">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            nostrum laudantium, vitae dolorem voluptas quaerat facere ex
            accusantium ratione omnis?
          </p>
          <button
            onClick={(e) => smoothScroll(e, "contact")}
            className="btn bg-[#FEE502] text-[#181600] border-[#f1d800]"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
