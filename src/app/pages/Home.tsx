import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="font-sans flex justify-between xl:flex-row sm:flex-col-reverse md:flex-col-reverse items-center h-[calc(100vh)] bg-[#31333b]  max-w-[1700px] mx-auto"
    >
      <div>
        <div>
          <h1 className="text-4xl font-normal text-gray-50 py-3">
            I'M
            <span className="text-5xl font-semibold font-libre_serif text-active">
              {" "}
              Anurag Choudhary
            </span>
          </h1>
          <h2 className="text-2xl text-gray-50">
            Full Stack Web Developer & Devops <br /> Engineer
          </h2>
        </div>
        <button className="px-5 rounded-md py-2  ring-offset transition-colors duration-1000 focus:text-white focus:bg-transparent ring-active ring-[3px] my-8 bg-active text-white hover:bg-transparent hover:text-active">
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
            width: "800px",
            maskImage:
              "linear-gradient(180deg,rgb(255, 255, 255), rgb(0, 0, 0,0.30), transparent)",
          }}
          className="md:pt-32 sm:pt-16  mix-blend-overlay drop-shadow-[0_0_1.5rem_#2bd576] md:w-[500px] sm:w-[400px] "
        />
      </div>
      <div className="sticky right-[150px] bottom-[100px] flex flex-col-reverse items-center gap-7">
        <ul className="flex flex-col gap-5 text-gray-400">
          <li>
            <i className="pi pi-linkedin text-4xl cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></i>
          </li>
          <li>
            <i className="pi pi-twitter text-4xl cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></i>
          </li>
          <li>
            <i className="pi pi-github text-4xl cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></i>
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
