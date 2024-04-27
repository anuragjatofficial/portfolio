import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen bg-[#3d3e42]" id="home">
      <div className="font-sans flex justify-between xl:flex-row sm:flex-col-reverse md:flex-col-reverse xs:flex-col-reverse 2xs:flex-col-reverse items-center h-[calc(100vh-80px)]   max-w-[1700px] mx-auto">
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
        <div className="h-full xl:w-[50%] md:w-[50%] ">
          <Image
            src="/image.png"
            alt=""
            width={1940}
            height={1080}
            style={{
              objectFit: "cover",
              height: "100%",
              widows: "auto",
              maskImage:
                "linear-gradient(180deg,rgb(255, 255, 255), rgb(0, 0, 0,0.30), transparent)",
            }}
            className="md:pt-32 sm:pt-16 lg:pt-44 xl:pt-0 2xl:pt-0  mix-blend-overlay drop-shadow-[0_0_1.5rem_#2bd576] md:w-[500px] sm:w-[400px] xs:w-[400px] 2xs:w-[400px] lg:w-[800px] xl:w-[800px] 2xl:[800px]"
          />
        </div>
        
      </div>
      <div className="absolute  right-10 bottom-10 flex flex-col-reverse items-center gap-7 sm:right-5 sm:bottom-5 lg:right-[100px] lg:bottom-[100px]">
          <ul className="flex flex-col gap-5 text-gray-400">
            <li>
              <i className="pi pi-linkedin text-4xl cursor-pointer hover:text-blue-600 focus:text-blue-600 transition-colors ease-in-out duration-1000"></i>
            </li>
            <li>
              <i className="pi pi-twitter text-4xl cursor-pointer hover:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-1000"></i>
            </li>
            <li>
              <i className="pi pi-github text-4xl cursor-pointer hover:text-black focus:text-black transition-colors ease-in-out duration-1000"></i>
            </li>
            <li>
              <i className="pi pi-whatsapp  text-4xl cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></i>
            </li>
          </ul>
          <div className="w-1 h-[150px]  rounded-full bg-active  cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></div>
        </div>
    </section>
  );
}
