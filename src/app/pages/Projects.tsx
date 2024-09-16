import React from "react";
import { projects } from "../../../info.json";
import { ProjectCard } from "../components/ProjectCard";

export default function Projects({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  const getRandomColor = (): string => {
    const randomColor = Math.floor(Math.random() * 16777216).toString(16);
    return `#${randomColor.padStart(6, "0")}`;
  };

  return (
    <section
      className={`${
        theme === "dark" ? "bg-primary" : "bg-primary-bright"
      } min-h-screen flex`}
      id="projects"
    >
      <div
        className={`${
          theme === "dark" ? "bg-primary" : "bg-primary-bright"
        }  min-h-full pt-[80px] h-fit max-w-[1700px] mx-auto px-24 max-sm:px-0`}
      >
        <h2 className="text-5xl font-semibold font-libre_serif text-gray-50 pt-10 text-center  max-sm:text-3xl">
          Projects
        </h2>
        <div className="flex flex-wrap gap-10 justify-center py-10">
          {projects.map((project, i: number) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
