import React from "react";

export default function Experience() {
  return (
    <section className="bg-[#31333b] flex-col min-h-screen flex justify-around" id="experience">
      <h2 className="text-5xl font-semibold font-libre_serif text-active py-10 text-center  max-sm:text-3xl">
          Experience
        </h2>
      <div className="bg-[#31333b] w-full  max-w-[1700px] mx-auto px-24">
        <div className="2xl:px-10 pb-10">
          <div className="flex relative">
            <div className="flex flex-col items-center justify-between px-10">
              <div className="w-6 h-6 bg-active rounded-full drop-shadow-[0px_0px_10px_#26a269] my-3"></div>
              <div className="w-1 h-[80%] bg-gray-50"></div>
            </div>
            <div>
              <h2 className="text-4xl text-gray-50">
                Associate Software Engineer
              </h2>
              <h3 className="text-2xl text-gray-50">
                BPK Technologies, Lucknow
              </h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quibusdam, reprehenderit id porro eum sunt quia consectetur
                modi, aliquam, perferendis tempora. Expedita a vero optio, dicta
                pariatur in! Dicta deserunt, cumque quas labore eius, ut iste
                architecto, nisi officiis illo voluptatem quod in doloremque?
                Incidunt fugit ex voluptatum cum accusantium ipsa doloribus sint
                rerum eos reiciendis libero aspernatur, quibusdam, amet odio
                expedita laudantium nesciunt eligendi, dolorum deleniti! Ut
                cupiditate, commodi delectus officia, nobis neque temporibus
                reprehenderit sequi, alias eos aut cum voluptate vero rerum
                similique ratione! Excepturi, adipisci. Ut qui quam voluptatibus
                neque. Atque modi quod exercitationem natus voluptates incidunt
                ab, reiciendis fugit sapiente! Quasi iure voluptas dolore
                consequuntur odit maiores animi. Voluptate at sint ipsa
                repudiandae quam ut nobis molestiae facere eius libero obcaecati
                impedit maxime numquam sapiente harum labore eligendi magnam
                aliquam architecto odio, repellendus veniam quos sequi! Officia,
                exercitationem. Illo autem aspernatur nisi minima commodi
                doloremque veritatis vitae praesentium magni. Necessitatibus
                dolorum, rem voluptatibus optio ad enim sint dolore, officia
                corporis rerum nobis, is accusantium velit accusamus dolorum
                quia amet nobis!
              </p>
            </div>
            <div className="absolute inline-flex w-fit -left-[70px]">
                <div className="bg-gray-900 text-gray-50 px-3 py-1.5 text-2xl -left-16">2024
                </div>
                <span className="bg-transparent border-l-[22px] border-l-gray-900 border-[22px] border-r-transparent border-t-transparent border-b-transparent h-full w-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
