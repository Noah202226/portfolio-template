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
                <h2 className="card-title text-center">
                  Email Handling (Customer Support)
                </h2>
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
                <h2 className="card-title">E-commerce</h2>
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
          <button className="btn bg-[#FEE502] text-[#181600] border-[#f1d800]">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
