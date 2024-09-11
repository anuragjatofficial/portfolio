import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header({
  isSidebarVisible,
  setIsSidebarVisible,
}: {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (visible: boolean) => void;
}) {
  return (
    <header
      className="bg-[#ffffff33] backdrop-blur-3xl flex justify-between py-5 items-center px-5 max-sm:px-2 z-20 sticky w-full top-0"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="text-active font-medium text-2xl max-sm:text-xl">
        {"<"}Anurag{"/>"}
      </div>
      <div className="text-gray-400 max-lg:hidden">
        <ul className="flex gap-7">
          <li className="hover:text-gray-50 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-50 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-50 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-gray-50 cursor-pointer">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:text-gray-50 cursor-pointer">
            <a href="#github">Github</a>
          </li>
          <li className="hover:text-gray-50 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="bg-[#3d3e42] flex justify-between items-center px-3 py-2 rounded-md text-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-[#3d3e42]"
          />
          <i className="pi pi-search"></i>
        </div>
        <div className="hidden items-center max-lg:flex">
          <button
            className="bg-[#31333b] hover:bg-[#31333b5c] focus:outline-none focus:bg-[#31333b5c] transition-colors duration-1000 w-fit h-fit flex rounded-full p-3"
            onClick={() => setIsSidebarVisible(true)}
          >
            <span className="pi text-gray-400 pi-bars text-center text-lg"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
