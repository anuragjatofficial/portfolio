import React, { useEffect, useRef } from "react";

interface SidebarProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar(sidebarProps: SidebarProps) {
  const menuItems = [
    { href: "#home", label: "Home", icon: "pi-home" },
    { href: "#about", label: "About", icon: "pi-info-circle" },
    { href: "#projects", label: "Projects", icon: "pi-code" },
    { href: "#experience", label: "Experience", icon: "pi-briefcase" },
    { href: "#github", label: "Github", icon: "pi-github" },
    { href: "#contact", label: "Contact", icon: "pi-user" }
  ];

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to close the sidebar if click is outside
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        sidebarProps.setIsVisible(false);
      }
    };

    // Attach the event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarProps]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        sidebarProps.setIsVisible(false); // Close the sidebar when Escape is pressed
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sidebarProps]);

  return (
    <aside
      ref={sidebarRef} // Attach ref to the sidebar
      className={`w-[300px] px-6 h-screen bg-[#1c1b23] fixed top-0 right-0 rounded-tl-lg rounded-bl-lg ${
        sidebarProps.isVisible ? "translate-x-0" : " translate-x-[100%] duration-500"
      } transition-transform duration-500 z-30`}
    >
      <div className="flex gap-2 pl-3 my-5 items-center">
        <div className="rounded-full h-4 w-4 bg-[#2bd576]"></div>
        <div className="rounded-full h-4 w-4 bg-[#2bd576]"></div>
        <div
          className="rounded-full cursor-pointer hover:bg-[#2bd57597] focus:bg-[#2bd57597] focus:outline-none transition-colors duration-1000 flex w-fit h-fit p-2 ml-auto bg-[#2bd576]"
          onClick={() => sidebarProps.setIsVisible(false)}
        >
          <span className="pi text-[#1c1b23] font-semibold pi-times text-center text-2xs"></span>
        </div>
      </div>
      <div className="bg-[#1c1b23] rounded-md h-5/6">
        <ul className="text-[#737086] text-sm p-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="p-4 cursor-pointer transition-transform duration-300 flex gap-3"
              >
                <i className={`pi ${item.icon} text-xl`}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
