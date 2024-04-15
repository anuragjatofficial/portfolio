import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-[#31333b] h-screen max-w-[1700px] mx-auto px-[100px]">
      <div>
        <h2 className="text-5xl font-semibold font-libre_serif text-active">
          About
        </h2>
        <div className="flex gap-3 pt-10">
          <div className="h-1 mt-2  w-[150px]  rounded-full bg-active  cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></div>

          <p className="text-gray-50 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam sint odio ex! Error earum maxime temporibus expedita voluptas fugiat nesciunt ipsum iure, alias assumenda suscipit architecto officia veniam dolorum a voluptate! Facere molestias esse tempore ullam accusantium maxime?</p>
        </div>
      </div>
      <div></div>
    </section>
  );
}
