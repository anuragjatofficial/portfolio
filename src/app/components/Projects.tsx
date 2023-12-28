import Image from 'next/image';
import React from 'react'

import "primeicons/primeicons.css";
import Link from 'next/link';
        

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
    <section className="w-full">
      <div className="w-[95%] mx-auto">
        <h1 className="text-white font-semibold">Projects</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 box-border rounded-md gap-5 w-[95%] mx-auto py-8 sm:grid-cols-1">
        {projects.map((e, i) => (
          <div
            className="rounded-md border-b-4  overflow-hidden border-[#2bd576] flex flex-col transition-transform transform-gpu text-zinc-800"
            key={i}
          >
            <div className="h-1/2 border-b-3 border-b-lime-600 overflow-hidden flex relative">
              <Image
                className="rounded-t-md object-cover"
                src={e.image}
                alt={e.desc}
                width={80}
                height={80}
                layout="responsive"
              />
              <Link href={e.deployed} target="_blank">
                <button
                  className="absolute  bottom-5  left-5"
                  style={{ borderRadius: "50%" }}
                >
                  <i
                    className="pi pi-link bg-white rounded-full p-1"
                    style={{
                      fontSize: "2rem",
                      color: "black",
                      boxShadow: "0 0 8px 0 #2bd576;",
                      borderColor: "#2bd576",
                      // border: "0.1px solid #2bd576",
                    }}
                  ></i>
                </button>
              </Link>
              <Link href={e.github} target="_blank">
                <button
                  className="absolute  bottom-5 right-5"
                  style={{ borderRadius: "50%" }}
                >
                  <i
                    className="pi pi-github bg-white rounded-full p-1 "
                    style={{
                      fontSize: "2rem",
                      color: "black",
                      boxShadow: "0 0 8px 0 #2bd576;",
                      borderColor: "#2bd576",
                      // border: "2px solid #2bd576",
                    }}
                  ></i>
                </button>
              </Link>
            </div>

            <div className="bg-[#ffffff] rounded-b-md  p-5 flex-1 h-1/2">
              <h2 className="text-base font-bold py-3">{e.name}</h2>
              <div className="flex flex-wrap  gap-x-2  gap-y-2 pb-3">
                {/* {e.tech.map((item, index) => (
                  <div className="text-xs bg-[#0202022f]   px-3 py-1 rounded-md text-zinc-900  backdrop-blur border-dashed border-2">
                    {item}
                  </div>
                ))} */}
              </div>
              <p className="text-sm md:text-xs text-pretty ">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
