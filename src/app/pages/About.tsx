import Image from "next/image";
import React from "react";

interface TechStack {
  name: string;
  imagePath: string;
}
export default function About() {
  const techStacks: TechStack[] = [
    { name: "Java", imagePath: "/images/java.svg" },
    { name: "Spring Boot", imagePath: "/images/springBoot.svg" },
    { name: "Hibernate", imagePath: "/images/Hibernate.svg" },
    { name: "Rest API's", imagePath: "/images/resApi.svg" },
    { name: "HTML 5", imagePath: "/images/Html.svg" },
    { name: "CSS 3", imagePath: "/images/css.svg" },
    { name: "JavaScript", imagePath: "/images/js.svg" },
    { name: "MySQL", imagePath: "/images/MySql.svg" },
    { name: "Github", imagePath: "/images/MySql.svg" },
    { name: "JSON", imagePath: "https://img.icons8.com/glyph-neue/64/json.png" },
    { name: "Git", imagePath: "/images/git.svg" },
    { name: "Postman", imagePath: "/images/postman.svg" },
  ];

  return (
    <section
      id="about"
      className="bg-[#31333b] h-screen max-w-[1700px] mx-auto px-24"
    >
      <div>
        <h2 className="text-5xl font-semibold font-libre_serif text-active pt-10">
          About
        </h2>
        <div className="flex gap-3 my-10">
          <div className="h-1 mt-2  w-[150px]  rounded-full bg-active  cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></div>

          <p className="text-gray-50 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            magnam sint odio ex! Error earum maxime temporibus expedita voluptas
            fugiat nesciunt ipsum iure, alias assumenda suscipit architecto
            officia veniam dolorum a voluptate! Facere molestias esse tempore
            ullam accusantium maxime?
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-semibold font-libre_serif text-active pt-10 text-center  ">
          My Skills
        </h2>
        <div className="grid grid-cols-4 pt-10 gap-8">
          {techStacks.map((stack: TechStack, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between rounded-xl shadow-md bg-[#3d3e42] w-fit px-[28px] py-4 hover:-translate-x-1 hover:-translate-y-1 transition-all transform delay-500 duration-300 ease-in-out cursor-pointer hover:bg-active "
            >
              {/* <img src={stack.imagePath} alt={stack.name} /> */}

              <Image
                src={stack.imagePath}
                width={200}
                height={200}
                alt={stack.name}
                className="w-36"
              />
              <p className="text-xl text-gray-50">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
