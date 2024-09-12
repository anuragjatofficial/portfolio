import Image from "next/image";
import React, { useState } from "react";
import { projects } from "../../../info.json";

interface Project {
  name: string;
  desc: string;
  tech: string[];
  image: string;
  github: string;
  deployed: string;
}

export default function Projects() {
  const getRandomColor = (): string => {
    const randomColor = Math.floor(Math.random() * 16777216).toString(16);
    return `#${randomColor.padStart(6, "0")}`;
  };

  return (
    <section className="bg-[#3d3e42] min-h-screen flex" id="projects">
      <div className="bg-[#3d3e42] min-h-full pt-[80px] h-fit max-w-[1700px] mx-auto px-24 max-sm:px-0">
        <h2 className="text-5xl font-semibold font-libre_serif text-gray-50 pt-10 text-center  max-sm:text-3xl">
          Projects
        </h2>
        <div className="flex flex-wrap gap-10 justify-center py-10">
          {projects.map((project: Project, i: number) => (
            <Card key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  // Handles when the card or any of its children receives focus
  const handleFocus = () => {
    setHasFocus(true);
  };

  // Handles when the card and its children lose focus
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setHasFocus(false);
    }
  };

  // Separate handlers for anchor elements
  const handleAnchorFocus = () => {
    setHasFocus(true);
  };

  const handleAnchorBlur = (event: React.FocusEvent<HTMLAnchorElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setHasFocus(false);
    }
  };

  return (
    <div
      className="w-[400px] max-sm:w-[auto] h-[300px] mx-auto flex relative group"
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      // Adjust opacity based on focus state
    >
      <Image
        width={800}
        height={800}
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div
        className="w-full flex flex-col gap-2 justify-between p-3 group-hover:opacity-100 group-focus:opacity-100 opacity-0 absolute h-full bg-[#333333c9] transition-opacity duration-500 ease-in-out"
        style={{ opacity: hasFocus ? 1 : 0 }}
      >
        <h2 className="text-ellipsis text-xl w-full text-center text-gray-50">
          {project.name}
        </h2>
        <p className="text-gray-50 text-center">{project.desc}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="inline-block rounded-md ring-1 py-0.5 px-2 bg-[#ffffff62] text-gray-900 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="w-full flex justify-between">
          <a
            href={project.github}
            target="_blank"
            className="bg-active text-gray-50 px-2 py-1 flex gap-2 items-center justify-between rounded-md hover:opacity-80"
            onFocus={handleAnchorFocus}
            onBlur={handleAnchorBlur}
          >
            Source code
            <i className="pi pi-github"></i>
          </a>
          <a
            href={project.deployed}
            target="_blank"
            className="bg-active text-gray-50 px-2 py-1 flex gap-2 items-center justify-between rounded-md hover:opacity-80"
            onFocus={handleAnchorFocus}
            onBlur={handleAnchorBlur}
          >
            View Live
            <i className="pi pi-external-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
