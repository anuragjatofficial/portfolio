import Image from "next/image";
import React from "react";

interface techStack {
  name: string;
  imagePath: string;
}
export default function About() {

  const techStacks: techStack[] = [
    {name:'Java',imagePath:'/'}
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
        <div className="grid">
          {techStacks.map((stack) => (
            <div>
              <img src={stack.imagePath} alt={stack.name} />
              <Image src={stack.imagePath} width={200} height={200}></Image>
              <p>{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
