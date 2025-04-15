"use client";
import React from "react";
import { FaKeyboard, FaClipboardList } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { MdPhoneCallback } from "react-icons/md";

export const Projects = () => {
  return (
    <div className="hero min-h-max mx-auto bg-base-200 ">
      <div className="hero-content flex flex-col-reverse sm:flex-row w-full">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 flex-10/12">
          {/* cards */}

          <div
            onClick={() =>
              document.getElementById("my_modal_data-entry").showModal()
            }
            className="card bg-base-100 card-xl shadow-sm cursor-pointer hover:shadow-2xs hover:bg-base-300"
          >
            <div className="card-body">
              <div className="flex h-full flex-col justify-between  items-center ">
                <FaKeyboard
                  size={96}
                  style={{ justifySelf: "center", color: "#FEE502" }}
                />
                <h2 className="card-title">Data Entries</h2>
              </div>
            </div>
          </div>

          <dialog id="my_modal_data-entry" className="modal">
            <div className="modal-box w-fit sm:w-[90vw] max-w-6xl h-fit sm:h-[95vh]">
              <div id="slide1.2" className="carousel-item relative w-full">
                <img
                  src="/data-entry/data-entry1.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <br />
              <div id="slide2.2" className="carousel-item relative w-full">
                <img
                  src="/data-entry/data-entry2.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <br />
              <div id="slide3.2" className="carousel-item relative w-full">
                <img
                  src="/data-entry/data-entry3.png"
                  className="w-fit h-fit"
                />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <div
            onClick={() =>
              document.getElementById("my_modal_product-listing").showModal()
            }
            className="card bg-base-100 card-xl shadow-sm cursor-pointer hover:shadow-2xs hover:bg-base-300"
          >
            <div className="card-body">
              <div className="flex h-full flex-col justify-between items-center ">
                <FaClipboardList
                  size={96}
                  style={{ justifySelf: "center", color: "#FEE502" }}
                />
                <h2 className="card-title">Product Listing</h2>
              </div>
            </div>
          </div>

          <dialog id="my_modal_product-listing" className="modal">
            <div className="modal-box w-max sm:w-[90vw] max-w-6xl h-fit sm:h-[90vh]">
              <div id="slide1.3" className="carousel-item relative w-full">
                <img
                  src="/product-listing/listing1.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide2.3" className="carousel-item relative w-full">
                <img
                  src="/product-listing/listing2.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <div id="slide3.3" className="carousel-item relative w-full">
                <img
                  src="/product-listing/listing3.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide4.3" className="carousel-item relative w-full">
                <img
                  src="/product-listing/listing4.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <div id="slide5.3" className="carousel-item relative w-full">
                <img
                  src="/product-listing/listing5.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <div
            onClick={() =>
              document.getElementById("my_modal_customer-support").showModal()
            }
            className="card bg-base-100 card-xl shadow-sm cursor-pointer hover:shadow-2xs hover:bg-base-300"
          >
            <div className="card-body">
              <div className="flex h-full flex-col justify-between items-center ">
                <div>
                  <RiCustomerService2Fill
                    size={96}
                    style={{ justifySelf: "center", color: "#FEE502" }}
                  />
                </div>
                <h2 className="card-title">Customer support</h2>
              </div>
            </div>
          </div>

          <dialog id="my_modal_customer-support" className="modal">
            <div className="modal-box w-fit sm:w-[90vw] max-w-6xl h-fit sm:h-[95vh]">
              <div id="slide1.4" className="carousel-item relative w-full">
                <img
                  src="/customer-support/cs1.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide2.4" className="carousel-item relative w-full">
                <img
                  src="/customer-support/cs2.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide3.4" className="carousel-item relative w-full">
                <img
                  src="/customer-support/cs3.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide4.4" className="carousel-item relative w-full">
                <img
                  src="/customer-support/cs4.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* Shopify management */}
          <div
            onClick={() =>
              document.getElementById("my_modal_shopify-management").showModal()
            }
            className="card bg-base-100 card-xl shadow-sm cursor-pointer hover:shadow-2xs hover:bg-base-300"
          >
            <div className="card-body">
              <div className="flex h-full flex-col justify-between items-center ">
                <div>
                  <FaShopify
                    size={96}
                    style={{ justifySelf: "center", color: "#FEE502" }}
                  />
                </div>
                <h2 className="card-title text-center">Shopify management</h2>
              </div>
            </div>
          </div>

          <dialog id="my_modal_shopify-management" className="modal">
            <div className="modal-box w-fit sm:w-[90vw] max-w-6xl h-fit sm:h-[95vh]">
              <div id="slide1.5" className="carousel-item relative w-full">
                <img
                  src="/shopify-management/Heroic.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide2.5" className="carousel-item relative w-full">
                <img
                  src="/shopify-management/Spread-fatherhood.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide3.5" className="carousel-item relative w-full">
                <img
                  src="/shopify-management/Superfresh.png"
                  className="w-fit h-fit"
                />
              </div>

              <br />

              <div id="slide4.5" className="carousel-item relative w-full">
                <img
                  src="/shopify-management/theme-management.png"
                  className="w-fit h-fit"
                />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* Social Media Management */}
          <div
            onClick={() =>
              document
                .getElementById("my_modal_social-media-management")
                .showModal()
            }
            className="card bg-base-100 card-xl shadow-sm cursor-pointer hover:shadow-2xs hover:bg-base-300"
          >
            <div className="card-body">
              <div className="flex h-full flex-col justify-between items-center ">
                <div>
                  <TiSocialInstagram
                    size={96}
                    style={{ justifySelf: "center", color: "#FEE502" }}
                  />
                </div>
                <h2 className="card-title text-center">
                  Social Media Management
                </h2>
              </div>
            </div>
          </div>

          <dialog id="my_modal_social-media-management" className="modal">
            <div className="modal-box w-fit sm:w-[90vw] max-w-6xl h-fit sm:h-[95vh]">
              <div id="slide1.6" className="carousel-item relative w-full">
                <img
                  src="/social-management/soc3.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide2.6" className="carousel-item relative w-full">
                <img
                  src="/social-management/soc2.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide3.6" className="carousel-item relative w-full">
                <img
                  src="/social-management/soc1.png"
                  className="w-fit h-fit"
                />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* Communication */}
          <div
            onClick={() =>
              document.getElementById("my_modal_communication").showModal()
            }
            className="card bg-base-100 card-xl shadow-sm cursor-pointer hover:shadow-2xs hover:bg-base-300"
          >
            <div className="card-body">
              <div className="flex h-full flex-col justify-between items-center ">
                <div>
                  <MdPhoneCallback
                    size={96}
                    style={{ justifySelf: "center", color: "#FEE502" }}
                  />
                </div>
                <h2 className="card-title text-center">Communication</h2>
              </div>
            </div>
          </div>

          <dialog id="my_modal_communication" className="modal">
            <div className="modal-box w-fit sm:w-[90vw] max-w-6xl h-fit sm:h-[95vh]">
              <div id="slide1.7" className="carousel-item relative w-full">
                <img
                  src="/communication/slacks.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide2.7" className="carousel-item relative w-full">
                <img
                  src="/communication/q.png"
                  className="w-full h-full object-contain"
                />
              </div>

              <br />

              <div id="slide3.7" className="carousel-item relative w-full">
                <img src="/communication/w.png" className="w-fit h-fit" />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};
