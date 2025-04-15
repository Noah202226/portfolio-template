import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdFireplace, MdMarkEmailRead } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { BiSolidStore } from "react-icons/bi";

export const HeroWithCards = () => {
  return (
    <div id="skills" className="hero min-h-max mx-auto bg-base-200 ">
      <div className="hero-content flex flex-col-reverse sm:flex-row w-full">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 flex-10/12">
          {/* cards */}

          <div className="card bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <MdFireplace
                  size={48}
                  style={{ justifySelf: "center", color: "#FEE502" }}
                />
                <h2 className="card-title">Product design</h2>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <MdMarkEmailRead
                  size={48}
                  style={{ justifySelf: "center", color: "#FEE502" }}
                />
                <h2 className="card-title text-center">Email Marketing</h2>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <FaShopify
                  size={48}
                  style={{ justifySelf: "center", color: "#FEE502" }}
                />
                <h2 className="card-title">Shopify Management</h2>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <div className="flex flex-col justify-center items-center">
                <BiSolidStore
                  size={48}
                  style={{ justifySelf: "center", color: "#FEE502" }}
                />
                <h2 className="card-title text-center">
                  Customer Relation Management
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1/2 justify-center items-center self-center">
          <div className="flex items-center text-green-600 gap-3 ">
            <HiOutlineArrowNarrowLeft color="#FEE502" />{" "}
            <p style={{ color: "#FEE502" }}>PERSONAL SKILLS</p>
          </div>
          <h1 className="text-4xl font-bold">
            Why Hire Me For The Next Project?
          </h1>
          <p className="py-6">
            My diverse skill set makes me a valuable asset to any team. I'm
            proficient in Shopify management, e-commerce strategies, accurate
            data entry, and providing excellent email support. My experience as
            a virtual assistant has honed my adaptability and ability to quickly
            learn new systems and processes. I'm confident in my ability to
            seamlessly integrate into your team and contribute immediately to
            your business goals.
          </p>

          <a href="/sample-resume.pdf" target="_blank" download={true}>
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
      </div>
    </div>
  );
};
