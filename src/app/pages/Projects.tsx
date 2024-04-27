import Image from "next/image";
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
  return (
    <section className="bg-[#31333b] " id="about">
      <div className="bg-[#31333b]  max-w-[1700px] mx-auto px-24">
        <div className="grid grid-cols-3">
            {projects.map((e,i)=>(
                <div key={i}>
                    <div className="w-[400px] h-[400px]">
                        <Image width={200} height={200} src={e.image} alt={e.name} className="w-full h-full object-cover"></Image>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
