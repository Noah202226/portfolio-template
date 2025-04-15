"use client";
import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
export default function ProjectOne() {
  return (
    <div className="hero min-h-max py-2 sm:py-48 bg-base-100">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div
          className="stack cursor-pointer hover:shadow-lg hover:shadow-green-600"
          onClick={() => document.getElementById("my_modal_6").showModal()}
        >
          <img
            src="/projectOne/image1.PNG"
            className="max-w-2xs sm:max-w-lg rounded-lg shadow-2xl rounded-box"
          />
          <img
            src="/projectOne/image1.PNG"
            className="max-w-2xs sm:max-w-lg rounded-lg shadow-2xl rounded-box"
          />
          <img
            src="/projectOne/image1.PNG"
            className="max-w-2xs sm:max-w-lg rounded-lg shadow-2xl"
          />
          <img
            src="/projectOne/image1.PNG"
            className="max-w-2xs sm:max-w-lg rounded-lg shadow-2xl"
          />
        </div>

        {/* Images modal */}
        <dialog id="my_modal_6" className="modal">
          <div className="modal-box w-[90vw] max-w-6xl h-[80vh]">
            <h3 className="font-bold text-xl text-green-600">
              Project 1 - Images
            </h3>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="/projectOne/image2.PNG"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="/projectOne/image1.PNG"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="/projectOne/hubspot1.PNG"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="/projectOne/hubspot2.PNG"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <div className="max-w-full flex-1/2">
          <div className="flex items-center text-green-600 gap-3 ">
            <HiOutlineArrowNarrowLeft color="#FF69B4" />{" "}
            <p style={{ color: "#FF69B4" }}>Project I</p>
          </div>

          <h1 className="text-4xl font-extrabold font-oswald">
            Customer Support and Data Entries ( The Headcount )
          </h1>

          <p className="py-6 w-full prose font-mono">
            The Headcount Platform offers a comprehensive range of turnkey
            services encompassing labor compliance, contract compliance, and
            access control.
          </p>

          {/* Modal */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-[#FEE502] text-[#181600] border-[#f1d800] my-5"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            READ MORE
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle mx-2"
          >
            <div className="modal-box">
              <h3 className="font-bold text-xl text-green-600">
                Customer Support and Data Entries ( The Headcount )
              </h3>
              <p className="py-2">
                As a key member of the headcount team, I ensured the accurate
                and timely processing of contractor payroll. My responsibilities
                included meticulous data entry of contractor hours and rates,
                guaranteeing precise payroll calculations. I streamlined
                processes to maximize efficiency, resulting in [quantifiable
                result, e.g., a 10% reduction in payroll processing time]. In
                addition, I provided responsive email support to contractors and
                internal stakeholders via Hubspot, resolving inquiries
                efficiently and maintaining excellent communication.
              </p>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}
