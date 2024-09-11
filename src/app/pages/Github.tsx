import React from "react";
import { github } from "../../../info.json";

export default function Github() {
  return (
    <section className="bg-[#3d3e42] min-h-screen " id="github">
      <div className="bg-[#3d3e42]  h-full flex flex-col justify-around max-w-[1700px] mx-auto max-sm:px-2 px-24">
        <h2 className="text-5xl font-semibold font-libre_serif text-active py-10 text-center  max-sm:text-3xl">
          Github Stats
        </h2>
        <div className="w-full  flex justify-center  pb-10">
          <div className="flex w-fit flex-col items-center gap-12">
            <div className="w-full flex ">
              <img
                src={`https://ssr-contributions-svg.vercel.app/_/${github}?format=svg&weeks=50&theme=native&widget_size=medium`}
                alt="github stats"
                className="w-full"
              />
            </div>
            <div className="flex w-fit gap-5  justify-between max-sm:flex-col items-center">
              <div className="drop-shadow-[0px_0px_5px_#2bd576] w-full">
                <img
                  className="object-cover full"
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${github}&theme=dark&theme=default_repocard&title_color=%27#ffff'`}
                  alt=""
                />
              </div>
              <div className="drop-shadow-[0px_0px_5px_#2bd576] w-full">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs?username=${github}&show_icons=true&locale=en&layout=compact`}
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <div className="drop-shadow-[0px_0px_5px_#2bd576] w-full">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&default_repocard`}
                  alt=""
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
