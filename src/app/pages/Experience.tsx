import React from "react";
import { experience } from "../../../info.json";

export default function Experience() {
  const getDate = (dateString: string): number => {
    const date = new Date(dateString);
    return date.getFullYear();
  };
  return (
    <section
      className="bg-[#31333b] flex-col min-h-screen flex justify-around"
      id="experience"
    >
      <h2 className="text-5xl font-semibold font-libre_serif text-active py-10 text-center  max-sm:text-3xl">
        Experience
      </h2>
      {experience.map((e, index) => (
        <div
          className="bg-[#31333b] w-full  max-w-[1700px] mx-auto px-24"
          key={index}
        >
          <div className="2xl:px-10 pb-10">
            <div className="flex relative">
              <div className="flex flex-col items-center justify-between px-10">
                <div className="w-6 h-6 bg-active rounded-full drop-shadow-[0px_0px_10px_#26a269] my-3 py-3"></div>
                <div className="w-1 h-[100%] bg-gray-50"></div>
              </div>
              <div>
                <h2 className="max-sm:text-xl text-4xl text-gray-50">
                  {e.designation}
                </h2>
                <h3 className="max-sm:text-base text-2xl text-gray-50">
                  {e.companyName}, {e.city}
                </h3>
                <p className="max-sm:text-xs text-gray-400">{e.description}</p>
              </div>
              <div className="absolute inline-flex w-fit -left-[70px]">
                <div className="bg-gray-900 text-gray-50 px-3 py-1.5 text-2xl -left-16">
                  {getDate(e.joinedDate)}
                </div>
                <span className="bg-transparent border-l-[22px] border-l-gray-900 border-[22px] border-r-transparent border-t-transparent border-b-transparent h-full w-full"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
