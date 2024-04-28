import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Covisafe+ : Your Trusted COVID Vaccine Companion",
      desc: "Covisafe+ offers real-time information, risk assessment, vaccination booking, and community support to combat the pandemic effectively.",
      image: "/covisafe-plus.png",
      tech: [
        "Java",
        "Spring Boot",
        "Maven",
        "PostgreSQL",
        "React js",
        "Tailwind CSS",
      ],
      deployed: "https://covisafe-plus.vercel.app/",
      github: "https://github.com/anuragjatofficial/covisafe-plus",
    },
    {
      name: "CodePulse : Amplifying Your Coding Potential",
      desc: "An AI interview platform to practice with AI-driven simulations tailored to your skills and industry. Get instant feedback and performance insights to refine your approach.",
      image: "/codepulse.png",
      tech: [
        "Java",
        "Spring Boot",
        "Sprnig Data JPA",
        "Maven",
        "PostgreSQL",
        "OpenAI API",
        "React",
        "TypeScript",
        "CSS",
      ],
      deployed: "https://code-pulse-ai.vercel.app/",
      github: "https://github.com/anuragjatofficial/code-pulse",
    },
    {
      name: "Lenskart clone",
      desc: "Lenskart is the leading e-commerce portal for eyewear in India.",
      image: "/lensmart-1.png",
      tech: ["HTML", "CSS", "JavaScript", "JSON-Server"],
      deployed: "https://anuragjatofficial.github.io/lensmart",
      github: "https://github.com/anuragjatofficial/lensmart",
    },
    {
      name: "Amazon clone",
      desc: "Amazon is the world's leading e-commerce platform for convenient and affordable shopping",
      image: "/amazekart-1.png",
      tech: ["HTML", "CSS", "JavaScript"],
      deployed: "https://anuragjatofficial.github.io/amazekart/",
      github: "https://github.com/anuragjatofficial/amazekart",
    },
    {
      name: "Suraksha Mitra : The Crime ManageMent System",
      desc: "The main objective of this system is to maintain and manage detailed information on the crime that happened in an area under a particular police station.",
      image: "/crime_mgmt-1.png",
      tech: ["Java"],
      deployed:
        "https://drive.google.com/file/d/1soD3yssxbYjdNQ60an8ctpvfo3qMdvWR/view",
      github: "https://github.com/anuragjatofficial/suraksha-mitra",
    },
    {
      name: "eXcelerate: Accelerating Learning through Online Platforms",
      desc: "eXcelerate is a robust software solution that empowers remote education and training. This platform is specifically designed to equip educators with powerful tools for creating and delivering online courses",
      image: "/excelerate1.png",
      tech: ["Java", "MySQL", "Hibernate"],
      deployed:
        "https://drive.google.com/file/d/10npOdmOa27-mL__n7wuaFJflw5aW3nGy/view",
      github: "https://github.com/anuragjatofficial/excelerate",
    },
  ];

  const getRandomColor = (): string => {
    // Generate a random integer between 0 and 0xFFFFFF (16777215 in decimal)
    const randomColor = Math.floor(Math.random() * 16777216).toString(16);
    // Pad the string with leading zeros if necessary to ensure it's always 6 characters long
    return `#${randomColor.padStart(6, "0")}`;
  };

  return (
    <section className="bg-[#3d3e42] min-h-screen flex" id="projects">
      <div className="bg-[#3d3e42] min-h-full pt-[80px] h-fit max-w-[1700px] mx-auto px-24">
        <h2 className="text-5xl font-semibold font-libre_serif text-gray-50 pt-10 text-center  max-sm:text-3xl">
          Projects
        </h2>
        <div className="flex flex-wrap gap-10 justify-center py-10">
          {projects.map((e, i) => (
            <div key={i}>
              <div className="w-[400px] h-[300px] mx-auto flex relative group">
                <Image
                  width={800}
                  height={800}
                  src={e.image}
                  alt={e.name}
                  className="w-full h-full object-cover"
                ></Image>
                <div className="w-[full]  flex flex-col gap-2 justify-between p-3 group-hover:opacity-100 opacity-0 absolute h-full bg-[#333333c9] transition-opacity duration-300 delay-100 ease-in-out">
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
