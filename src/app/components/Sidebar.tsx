import React, { useState } from "react";

interface SidebarProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar(sidebarProps: SidebarProps) {
  const menuItems = ["Home", "About", "Skills", "Projects"];

  return (
    <aside
      className={`w-[300px] px-6 h-screen bg-[#1c1b23]  absolute top-0 right-0 rounded-tl-lg rounded-bl-lg ${
        sidebarProps.isVisible ? "block translate-x-[0]" : "hidden translate-x-[100%]" 
      } transition-transform delay-1000 z-20`}
    >
      <div className="flex gap-2 pl-3 my-5 items-center">
        <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
        <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
        <div
          className="rounded-full cursor-pointer hover:bg-[#2bd57597] focus:bg-[#2bd57597] focus:outline-none transition-colors duration-1000 flex w-fit h-fit p-2 ml-auto bg-[#2bd576]"
          onClick={() => sidebarProps.setIsVisible(false)}
        >
          <span className="pi text-[#1c1b23] font-semibold  pi-times text-center text-2xs"></span>
        </div>
      </div>
      <div className=" bg-[#1c1b23] rounded-md h-5/6">
        <ul className="text-[#737086] text-sm p-2">
          <li className="p-4 cursor-pointer transition-transform duration-300 flex gap-3">
            <i className="pi pi-home text-xl"></i>
            <span>Home</span>
          </li>
          <li className="p-4 cursor-pointer transition-transform duration-300 flex gap-3">
            <i className="pi  pi-info-circle text-xl"></i>
            <span>About</span>
          </li>
          <li className="p-4 cursor-pointer transition-transform duration-300 flex gap-3">
            <i className="pi pi-cog  text-xl"></i>
            <span>Skills</span>
          </li>
          <li className="p-4 cursor-pointer transition-transform duration-300 flex gap-3">
            <i className="pi pi-code  text-xl"></i>
            <span>Projets</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
