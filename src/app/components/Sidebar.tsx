import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-1/6 pl-6">
      <div className="flex gap-2 pb-5 pl-3 pt-5">
        <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
        <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
      </div>
      <div className=" bg-[#1c1b23] rounded-md h-5/6">
        <ul className="text-[#737086] text-sm">
          <li className="py-3 pl-5 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
            <i className="pi pi-home text-xl"></i> Home
          </li>
          <li className="py-3 pl-5 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
            About
          </li>
          <li className="py-3 pl-5 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
            <i className="pi pi-fire  text-xl"></i> Skills
          </li>
          <li className="py-3 pl-5 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
            <i className="pi pi-code  text-xl"></i> Projets
          </li>
        </ul>
      </div>
    </aside>
  );
}
