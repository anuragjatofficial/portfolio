import React from "react";
import { intrests } from "../../../info.json";

export default function Contact() {
  return (
    <section className="bg-[#31333b] min-h-screen flex" id="contact">
      <div className="bg-[#31333b]  h-full  w-full my-auto max-w-[1700px] mx-auto px-24 py-10 flex justify-between">
        <div className="w-fit">
          <h2 className="text-5xl font-semibold  text-gray-50 py-5   max-sm:text-3xl">
            Let's discuss <br />
            on something <span className="text-blue-400">cool</span> together
          </h2>
          <p className="text-lg py-5 text-gray-50">I am interested in ...</p>
          <div className="flex flex-wrap gap-3">
            {intrests.map((e, index) => (
              <div
                className="px-2 py-1 rounded-md text-gray-50 bg-[#3d3e42]"
                key={index}
              >
                {e}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[50%] flex justify-end">
          <form className="w-[70%] ">
            <div className="mb-5">
              <input
                type="text"
                className="w-full focus:outline-none py-1.5 px-3 rounded-md ring-gray-500 focus:ring-1 ring-inset text-gray-50 bg-[#3d3e42] "
                placeholder="Your name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="w-full focus:outline-none py-1.5 px-3 rounded-md bg-[#3d3e42] text-gray-50 ring-gray-500 focus:ring-1 ring-inset"
                placeholder="Your email"
              />
            </div>
            <div>
              <textarea
                rows={5}
                className="resize-none w-full mb-5 py-1.5 px-3 rounded-md focus:outline-none bg-[#3d3e42] text-gray-50 ring-gray-500 focus:ring-1 ring-inset"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-active text-gray-50 gap-3 flex justify-center items-center py-1.5 px-3 rounded-md w-full outline-none hover:opacity-60 focus:opacity-60  "
            >
              Submit
              <i className="pi pi-send"></i>
            </button>
            <div>
              <ul className="flex  w-full justify-center gap-5 py-5 text-gray-400">
                <li>
                  <i className="pi pi-linkedin text-4xl cursor-pointer hover:text-blue-600 focus:text-blue-600 transition-colors ease-in-out duration-1000"></i>
                </li>
                <li>
                  <i className="pi pi-twitter text-4xl cursor-pointer hover:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-1000"></i>
                </li>
                <li>
                  <i className="pi pi-github text-4xl cursor-pointer hover:text-black focus:text-black transition-colors ease-in-out duration-1000"></i>
                </li>
                <li>
                  <i className="pi pi-whatsapp  text-4xl cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></i>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
