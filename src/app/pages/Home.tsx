import Image from "next/image";
import { linkedIn, twitter, whatsApp, github } from "../../../info.json";
import Link from "next/link";

export default function Home({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  const PRIMARY_TEXT = `${
    theme === "dark" ? "text-gray-400" : "text-gray-500"
  }`;

  const SECONDARY_TEXT = `${
    theme === "dark" ? "text-gray-50" : "text-gray-950"
  }`;

  return (
    <section
      className={`${
        theme === "dark" ? "bg-primary" : "bg-primary-bright"
      }`}
      id="home"
    >
      <div className="font-sans flex justify-between xl:flex-row sm:flex-col-reverse md:flex-col-reverse xs:flex-col-reverse 2xs:flex-col-reverse items-center h-[calc(100vh)]   max-w-[1700px] mx-auto">
        <div className="xl:ml-auto xs:ml-0 flex flex-col">
          <div>
            <h1
              className={`text-4xl font-normal ${SECONDARY_TEXT} py-3 max-sm:text-2xl`}
            >
              I'M
              <span className="text-5xl font-semibold font-libre_serif text-active max-sm:text-3xl">
                {" "}
                Anurag Choudhary
              </span>
            </h1>
            <h2 className={`text-2xl ${SECONDARY_TEXT} max-sm:text-lg`}>
              Full Stack Web Developer & Devops <br /> Engineer
            </h2>
          </div>
          <Link
            href="https://drive.google.com/file/d/1gouD5FmcHbxHjM8_nZmQyxCtUg4-qG2G/view?usp=sharing"
            target="_blank"
            className="px-5 w-fit  rounded-md py-2  ring-offset transition-colors duration-1000 focus:text-white focus:bg-transparent ring-active ring-[3px] my-8 bg-active text-white hover:bg-transparent hover:text-active focus:outline-none"
          >
            Download CV
          </Link>
        </div>
        <div className="z-0 relative bg-transparent overflow-hidden h-full xl:w-[50%] md:w-[50%] flex justify-center items-center sm:w-[80%] w-full max-h-[100vh] max-w-[100vw]">
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
            className="md:pt-32 sm:pt-16 lg:pt-44 xl:pt-0 2xl:pt-0  grayscale-[80%] drop-shadow-active_shadow md:w-[500px] sm:w-[400px] xs:w-[400px] 2xs:w-[400px] lg:w-[800px] xl:w[800px] 2xl:[800px]"
          />
          <div className="absolute bottom-0 w-full h-full bg-transparent  "></div>
        </div>
      </div>
      <div className="absolute   right-10 bottom-36 flex flex-col-reverse items-center gap-7 sm:right-5 sm:bottom-5 lg:right-[100px] lg:bottom-[100px]">
        <ul className={`flex flex-col gap-5 ${PRIMARY_TEXT}`}>
          <li>
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              className="focus:outline-none focus:text-blue-600"
            >
              <i className="pi pi-linkedin text-4xl cursor-pointer hover:text-blue-600 focus:text-blue-600 transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
          <li>
            <a
              href={`https://x.com/${twitter}`}
              target="_blank"
              className="focus:outline-none focus:text-blue-600"
            >
              <i className="pi pi-twitter text-4xl cursor-pointer hover:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
          <li>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              className="focus:outline-none focus:text-black"
            >
              <i className="pi pi-github text-4xl cursor-pointer hover:text-black focus:text-black transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${whatsApp}`}
              target="_blank"
              className="focus:outline-none focus:text-active"
            >
              <i className="pi pi-whatsapp  text-4xl cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></i>
            </a>
          </li>
        </ul>
        <div className="w-1 h-[150px]  rounded-full bg-active  cursor-pointer hover:text-active focus:text-active transition-colors ease-in-out duration-1000"></div>
      </div>
    </section>
  );
}
