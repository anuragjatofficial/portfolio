import React from "react";
import info from "../../../info.json";

const experience = info.experience;

export default function Experience({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  const getDate = (dateString: string): number => {
    const date = new Date(dateString);
    return date.getFullYear();
  };
  const PRIMARY_TEXT = `${
    theme === "dark" ? "text-gray-400" : "text-gray-500"
  }`;
  const SECONDARY_TEXT = `${
    theme === "dark" ? "text-gray-50" : "text-gray-950"
  }`;
  return (
    <section
      className={`${
        theme === "dark" ? "bg-secondary" : "bg-secondary-bright"
      } flex-col  flex justify-around `}
      id="experience"
    >
      <h2 className="text-5xl font-semibold font-libre_serif text-active py-10 text-center  max-sm:text-3xl">
        Experience
      </h2>
      {experience.map((e, index) => (
        <div
          className="w-full  max-w-[1700px] mx-auto md:px-24 px-2"
          key={index}
        >
          <div className="2xl:px-10 pb-10">
            <div className="flex relative md:pl-0 pl-[50px]">
              <div className="flex flex-col items-center justify-between px-5 md:px-10">
                <div className="w-3 h-3 md:w-6 md:h-6 bg-active rounded-full drop-shadow-[0px_0px_10px_#26a269] my-1.5 py-1.5  md:my-3 md:py-3"></div>
                <div
                  className={`w-0.5 md:w-1 h-[100%] ${
                    theme === "dark" ? "bg-gray-50" : "bg-gray-950"
                  }`}
                ></div>
              </div>
              <div>
                <h2 className={`max-sm:text-xl text-4xl ${SECONDARY_TEXT}`}>
                  {e.designation}
                </h2>
                <h3 className={`max-sm:text-base text-2xl ${SECONDARY_TEXT}`}>
                  {e.companyName}, {e.city}
                </h3>
                <p className={`max-sm:text-xs ${PRIMARY_TEXT}`}>
                  {e.description}
                </p>
              </div>
              <div className="absolute inline-flex w-fit md:-left-12 -left-1">
                <div
                  className={`${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-300"
                  } ${SECONDARY_TEXT} px-3 py-1.5 text-xs md:text-2xl -left-16`}
                >
                  {getDate(e.joinedDate)}
                </div>
                <span
                  className={`bg-transparent border-l-[22px] ${
                    theme === "dark" ? "border-l-gray-900" : "border-l-gray-300"
                  }  border-[14px] md:border-[22px] border-r-transparent border-t-transparent border-b-transparent h-full w-full`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
