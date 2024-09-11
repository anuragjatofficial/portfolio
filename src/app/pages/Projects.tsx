import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { projects } from "../../../info.json";

export default function Projects() {
  const getRandomColor = (): string => {
    // Generate a random integer between 0 and 0xFFFFFF (16777215 in decimal)
    const randomColor = Math.floor(Math.random() * 16777216).toString(16);
    // Pad the string with leading zeros if necessary to ensure it's always 6 characters long
    return `#${randomColor.padStart(6, "0")}`;
  };

  return (
    <section className="bg-[#3d3e42] min-h-screen flex" id="projects">
      <div className="bg-[#3d3e42] min-h-full pt-[80px] h-fit max-w-[1700px] mx-auto px-24 max-sm:px-0">
        <h2 className="text-5xl font-semibold font-libre_serif text-gray-50 pt-10 text-center  max-sm:text-3xl">
          Projects
        </h2>
        <div className="flex flex-wrap gap-10 justify-center py-10">
          {projects.map((e, i) => (
            <div key={i}>
              <div className="w-[400px] max-sm:w-[auto]  h-[300px] mx-auto flex relative group focus:border-blue-400 focus:border-8">
                <Image
                  width={800}
                  height={800}
                  src={e.image}
                  alt={e.name}
                  className="w-full h-full object-cover"
                ></Image>
                <div className="w-[full]  flex flex-col gap-2 justify-between p-3 group-hover:opacity-100 group-focus:opacity-100 opacity-0 absolute h-full bg-[#333333c9] transition-opacity duration-300 delay-100 ease-in-out">
                  <h2 className="text-ellipsis text-xl w-full text-center text-gray-50">
                    {e.name}
                  </h2>
                  <p className="text-gray-50 text-center">{e.desc}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 ">
                    {e.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`inline-block rounded-md ring-1 py-0.5  px-2 bg-[#ffffff62] text-gray-900 text-xs`}
                        // style={{ boxShadow: `0 0 0 1px ${getRandomColor()}` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-full flex justify-between">
                    <a
                      href={e.github}
                      target="_blank"
                      className="bg-active text-gray-50 px-2 py-1 flex gap-2 items-center justify-between rounded-md hover:opacity-80"
                    >
                      Source code
                      <i className=" pi pi-github"></i>
                    </a>
                    <a
                      href={e.deployed}
                      target="_blank"
                      className="bg-active text-gray-50 px-2 py-1 flex gap-2 items-center justify-between rounded-md hover:opacity-80"
                    >
                      View Live
                      <i className="pi pi-external-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}
