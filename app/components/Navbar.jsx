"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default jump behavior
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "end", // Aligns to the top of the section
    });
  };

  return (
    <div className="bg-base-100 sticky top-0 z-50">
      <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <div className="flex justify-between w-fit gap-x-48">
          {/* Logo */}
          <div className="text-2xl font-bold">LM</div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-6 text-xl">
            <a
              href="#"
              onClick={(e) => smoothScroll(e, "hero")}
              className="text-gray-400 hover:text-white hover:underline"
            >
              Home
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, "contact")}
              className="text-gray-400 hover:text-white hover:underline"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Desktop Contact Button */}
        <div className="flex gap-2">
          <button
            onClick={(e) => smoothScroll(e, "contact")}
            className="hidden sm:block btn bg-[#FEE502] text-[#181600] border-[#f1d800]"
          >
            Contact Me
          </button>

          <a href="/lira-resume.pdf" target="_blank" download={true}>
            <button className="hidden sm:block btn bg-[#FEE502] text-[#181600] border-[#f1d800]">
              <div className="flex items-center justify-around gap-3">
                <p>Download CV</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </div>
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={`sm:hidden fixed inset-0 bg-base-100 flex flex-col items-center justify-center space-y-6 text-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Mobile Menu */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-3xl"
        >
          <FiX />
        </button>

        <a
          href="#"
          onClick={(e) => {
            smoothScroll(e, "hero");
            setIsOpen(false);
          }}
          className="text-gray-400 hover:text-white hover:underline"
        >
          Home
        </a>
        <a
          href="#"
          onClick={(e) => {
            smoothScroll(e, "contact");
            setIsOpen(false);
          }}
          className="text-gray-400 hover:text-white hover:underline"
        >
          Contact
        </a>

        {/* Mobile Contact Button */}
        <button className="btn bg-[#FEE502] text-[#181600] border-[#f1d800]">
          Contact Me
        </button>
      </nav>
    </div>
  );
};
