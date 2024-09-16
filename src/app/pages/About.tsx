import Image from "next/image";
import React from "react";
import { techStacks, about } from "../../../info.json";

interface TechStack {
  name: string;
  imagePath: string;
}
export default function About({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  return (
    <section
      className={`${
        theme === "dark" ? "bg-secondary" : "bg-secondary-bright"
      } min-h-screen" id="about`}
    >
      <div
        className={`${
          theme === "dark" ? "bg-secondary" : "bg-secondary-bright"
        }  min-h-full h-fit max-w-[1700px] mx-auto px-24`}
      >
        <div className="pt-[80px]">
          <h2 className="text-5xl font-semibold font-libre_serif text-gray-50 pt-10 max-sm:text-3xl ">
            About
          </h2>
          <div className="flex gap-3 my-10">
            <div className="h-1 mt-2  w-[150px]  rounded-full bg-active  cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></div>

            <p className="text-gray-50 text-xl max-sm:text-base ">{about}</p>
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-semibold font-libre_serif text-gray-50  pt-10 text-center  max-sm:text-3xl">
            My Skills
          </h2>
          <div className="sm:grid md:grid lg:grid xl:grid pt-10 gap-8 max-w-[926px] mx-auto sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-2 2xs:flex 2xs:flex-col 2xs:items-center text-center">
            {techStacks.map((stack: TechStack, index: number) => (
              <div
                key={index}
                className={`flex flex-col items-center group justify-between rounded-xl shadow-md ${
                  theme === "dark" ? "bg-primary" : "bg-primary-bright"
                } w-fit px-[28px] py-4 hover:-translate-x-1 hover:-translate-y-1 transition-all transform delay-500 duration-300 ease-in-out cursor-pointer `}
              >
                {/* <img src={stack.imagePath} alt={stack.name} /> */}

                <div className="w-36 h-36">
                  <Image
                    src={stack.imagePath}
                    width={200}
                    height={200}
                    alt={stack.name}
                    className="w-36 object-cover"
                  />
                </div>
                <p className="text-xl text-gray-50 max-sm:text-base ">
                  {stack.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="gap-10 flex-col flex ml-auto py-10 max-sm:gap-8 ">
          <div className="flex gap-10 items-center justify-end max-sm:gap-8">
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
          </div>
          <div className="flex gap-10 items-center justify-end max-sm:gap-8">
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
          </div>
          <div className="flex gap-10 items-center justify-end max-sm:gap-8">
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
          </div>
          <div className="flex gap-10 items-center justify-end max-sm:gap-8">
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
            <div className="rounded-full w-3 h-3 bg-active max-sm:w-1 max-sm:h-1"></div>
            <div className="rounded-full w-4 h-4 bg-active max-sm:w-2 max-sm:h-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
