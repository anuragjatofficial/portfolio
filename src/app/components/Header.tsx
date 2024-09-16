import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header({
  isSidebarVisible,
  setIsSidebarVisible,
  theme,
  setTheme,
}: {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (visible: boolean) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const PRIMARY_TEXT = `${
    theme === "dark" ? "text-gray-400" : "text-gray-500"
  }`;

  const HOVER_TEXT = `${
    theme === "dark" ? "hover:text-gray-50" : "hover:text-gray-950"
  }`;
  const FOCUS_TEXT = `${
    theme === "dark" ? "focus:text-gray-50" : "focus:text-gray-950"
  }`;

  return (
    <header
      className={`${
        theme === "dark" ? "bg-primary" : "bg-primary-bright"
      } flex justify-between py-5 items-center px-5 max-sm:px-2 z-20 sticky w-full top-0 shadow-md`}
    >
      <div className="text-active font-medium text-2xl max-sm:text-xl">
        {"<"}Anurag{"/>"}
      </div>
      <div className={`${PRIMARY_TEXT} max-lg:hidden`}>
        <ul className="flex gap-7">
          <li>
            <a
              className={`${HOVER_TEXT} ${FOCUS_TEXT} focus:outline-none cursor-pointer`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`${HOVER_TEXT}  ${FOCUS_TEXT} focus:outline-none cursor-pointer`}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`${HOVER_TEXT} ${FOCUS_TEXT} focus:outline-none cursor-pointer`}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`${HOVER_TEXT} ${FOCUS_TEXT} focus:outline-none cursor-pointer`}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={`${HOVER_TEXT} ${FOCUS_TEXT} focus:outline-none cursor-pointer`}
              href="#github"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className={`${HOVER_TEXT} ${FOCUS_TEXT} focus:outline-none cursor-pointer`}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <div
          className={`${
            theme === "dark" ? "bg-secondary" : "bg-secondary-bright"
          } flex justify-between items-center px-3 py-2 rounded-md ${PRIMARY_TEXT}`}
        >
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-inherit"
          />
          <i className="pi pi-search"></i>
        </div>
        <div className="hidden items-center max-lg:flex">
          <button
            className={`${
              theme === "dark" ? "bg-secondary" : "bg-secondary-bright"
            } hover:bg-[#31333b5c] focus:outline-none focus:bg-[#31333b5c] transition-colors duration-1000 w-fit h-fit flex rounded-full p-3`}
            onClick={() => setIsSidebarVisible(true)}
          >
            <span
              className={`pi ${PRIMARY_TEXT} pi-bars text-center text-lg`}
            ></span>
          </button>
        </div>
        <div className="items-center max-lg:flex">
          <button
            className={`${
              theme === "dark" ? "bg-secondary" : "bg-secondary-bright"
            } hover:bg-[#31333b5c]  hover:rotate-[360deg] focus:rotate-[360deg] focus:outline-none focus:bg-[#31333b5c] transition-all duration-1000 w-fit h-fit flex rounded-full p-3`}
            onClick={changeTheme}
          >
            <span
              className={`pi ${PRIMARY_TEXT} pi-${
                theme === "dark" ? "sun" : "moon"
              } text-center text-lg`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}
