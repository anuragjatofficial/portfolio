import React from "react";

export default function Sidebar() {
  const menuItems = ["Home", "About", "Skills", "Projects"];

  return (
    <aside className="w-1/6 pl-6">
      <div className="flex gap-2 pb-5 pl-3 pt-5">
        <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
        <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
      </div>
      <div className=" bg-[#1c1b23] rounded-md h-5/6">
        <ul className="text-[#737086] text-sm p-2">
          <li className="p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex gap-3">
            <i className="pi pi-home text-xl"></i>
            <span>Home</span>
          </li>
          <li className="p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex gap-3">
            <i className="pi  pi-info-circle text-xl"></i>
            <span>About</span>
          </li>
          <li className="p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex gap-3">
            <i className="pi pi-cog  text-xl"></i>
            <span>Skills</span>
          </li>
          <li className="p-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex gap-3">
            <i className="pi pi-code  text-xl"></i>
            <span>Projets</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
