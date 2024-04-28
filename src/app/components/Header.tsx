import React from "react";

export default function Header() {
  return (
    <header className="bg-[#ffffff33] backdrop-blur-3xl flex justify-between py-5 items-center px-5 z-20 sticky w-full top-0 ">
      <div className="text-active font-medium text-2xl">
        {"<"}Anurag{"/>"}
      </div>
      <div className="text-gray-400">
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
          <li className="hover:text-gray-50 cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="">
        <div className="bg-[#3d3e42] flex justify-between items-center px-3 py-2 rounded-md text-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-[#3d3e42]"
          />
          <i className="pi pi-search"></i>
        </div>
      </div>
    </header>
  );
}
