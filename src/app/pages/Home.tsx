import Image from "next/image";
import { linkedIn, twitter, whatsApp, github } from "../../../info.json";

export default function Home() {
  return (
    <section className="h-screen bg-[#3d3e42]" id="home">
      <div className="font-sans flex justify-between xl:flex-row sm:flex-col-reverse md:flex-col-reverse xs:flex-col-reverse 2xs:flex-col-reverse items-center h-[calc(100vh)]   max-w-[1700px] mx-auto">
        <div className="xl:ml-auto xs:ml-0 flex flex-col">
          <div>
            <h1 className="text-4xl font-normal text-gray-50 py-3 max-sm:text-2xl">
              I'M
              <span className="text-5xl font-semibold font-libre_serif text-active max-sm:text-3xl">
                {" "}
                Anurag Choudhary
              </span>
            </h1>
            <h2 className="text-2xl text-gray-50 max-sm:text-lg">
              Full Stack Web Developer & Devops <br /> Engineer
            </h2>
          </div>
          <button className="px-5 w-fit  rounded-md py-2  ring-offset transition-colors duration-1000 focus:text-white focus:bg-transparent ring-active ring-[3px] my-8 bg-active text-white hover:bg-transparent hover:text-active">
            Contact me
          </button>
        </div>
        <div className="h-full xl:w-[50%] md:w-[50%] flex justify-center items-center sm:w-[80%] w-full max-h-[100vh] max-w-[100vw]">
          <Image
            src="/images/image.png"
            alt=""
            width={1940}
            height={1080}
            style={{
              objectFit: "cover",
              height: "auto",
              width: "100%",
              maskImage:
                "linear-gradient(180deg,rgb(255, 255, 255), rgb(0, 0, 0,0.30), transparent)",
            }}
            className="md:pt-32 sm:pt-16 lg:pt-44 xl:pt-0 2xl:pt-0  grayscale mix-blend-overlay drop-shadow-active_shadow md:w-[500px] sm:w-[400px] xs:w-[400px] 2xs:w-[400px] lg:w-[800px] xl:w[800px] 2xl:[800px]"
          />
        </div>
      </div>
      <div className="absolute   right-10 bottom-36 flex flex-col-reverse items-center gap-7 sm:right-5 sm:bottom-5 lg:right-[100px] lg:bottom-[100px]">
        <ul className="flex flex-col gap-5 text-gray-400">
          <li>
            <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank">
              <i className="pi pi-linkedin text-4xl cursor-pointer hover:text-blue-600 focus:text-blue-600 transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
          <li>
            <a href={`https://x.com/${twitter}`} target="_blank">
              <i className="pi pi-twitter text-4xl cursor-pointer hover:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
          <li>
            <a href={`https://github.com/${github}`} target="_blank">
              <i className="pi pi-github text-4xl cursor-pointer hover:text-black focus:text-black transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
          <li>
            <a href={`https://wa.me/${whatsApp}`} target="_blank">
              <i className="pi pi-whatsapp  text-4xl cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
        </ul>
        <div className="w-1 h-[150px]  rounded-full bg-active  cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></div>
      </div>
    </section>
  );
}
