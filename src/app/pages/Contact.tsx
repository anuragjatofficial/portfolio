import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  intrests,
  linkedIn,
  twitter,
  whatsApp,
  github,
  email,
} from "../../../info.json";
import { BeatLoader } from "react-spinners";
import { Toast } from "primereact/toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useRef<Toast>(null);

  const PRIMARY_TEXT = `${
    theme === "dark" ? "text-gray-400" : "text-gray-500"
  }`;
  const SECONDARY_TEXT = `${
    theme === "dark" ? "text-gray-50" : "text-gray-950"
  }`;

  const HOVER_TEXT = `${
    theme === "dark" ? "hover:text-gray-50" : "hover:text-gray-950"
  }`;
  const FOCUS_TEXT = `${
    theme === "dark" ? "focus:text-gray-50" : "focus:text-gray-950"
  }`;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Send form data to the backend API route
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setIsLoading(false);
    if (res.ok) {
      toast.current?.show({
        severity: "success",
        summary: "Email Sent",
        detail: "Email sent successfully!",
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to send email.",
      });
    }
    clearForm();
  };
  const handleEmailCopy = () => {
    // Copy the email to the clipboard
    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Show a success message via toast
        toast.current?.show({
          severity: "success",
          summary: "Email Copied!",
          detail: "Email copied successfully!",
        });
      })
      .catch((err) => {
        // Handle error if copying fails
        toast.current?.show({
          severity: "error",
          summary: "Copy Failed",
          detail: "Failed to copy email. Please try again.",
        });
      });
  };

  return (
    <section
      className={`${
        theme === "dark" ? "bg-secondary" : "bg-secondary-bright"
      } min-h-screen flex relative`}
      id="contact"
    >
      <div className="h-full  w-full  my-auto max-w-[1700px] mx-auto max-sm:px-5 max-md:px-5 px-24 py-10 flex justify-between max-md:flex-col max-md:gap-10 max-sm:flex-col max-sm:gap-10 max-lg:flex-col max-lg:gap-10">
        <div className="w-fit">
          <h2
            className={`text-5xl font-semibold  ${SECONDARY_TEXT} py-5   max-sm:text-3xl`}
          >
            Let's discuss <br />
            on something <span className="text-blue-400">cool</span> together
          </h2>
          <p className={`text-lg py-5 ${SECONDARY_TEXT}`}>
            I am interested in ...
          </p>
          <div className="flex flex-wrap gap-3">
            {intrests.map((e, index) => (
              <div
                className={`px-2 py-1 shadow-sm rounded-md ${SECONDARY_TEXT} ${
                  theme === "dark" ? "bg-primary" : "bg-primary-bright"
                }`}
                key={index}
              >
                {e}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[50%] flex justify-end max-sm:w-full max-sm:justify-center max-md:w-full max-md:justify-center max-lg:w-full max-lg:justify-center">
          <form className="w-[70%] " onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                required={true}
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full focus:outline-none py-1.5 px-3 rounded-md ${
                  theme === "dark" ? "ring-gray-500" : "ring-gray-400"
                } focus:ring-1 ring-inset ${SECONDARY_TEXT} ${
                  theme === "dark" ? "bg-primary" : "bg-primary-bright"
                }`}
                placeholder="Your name"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                required={true}
                onChange={handleChange}
                className={`w-full focus:outline-none py-1.5 px-3 rounded-md ${SECONDARY_TEXT} ${
                  theme === "dark" ? "bg-primary" : "bg-primary-bright"
                } ${
                  theme === "dark" ? "ring-gray-500" : "ring-gray-400"
                }  focus:ring-1 ring-inset`}
                placeholder="Your email"
              />
            </div>
            <div>
              <textarea
                rows={5}
                required={true}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`resize-none w-full mb-5 py-1.5 px-3 rounded-md focus:outline-none ${
                  theme === "dark" ? "bg-primary" : "bg-primary-bright"
                } ${SECONDARY_TEXT} ${
                  theme === "dark" ? "ring-gray-500" : "ring-gray-400"
                }  focus:ring-1 ring-inset`}
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading ? "cursor-wait" : "cursor-pointer"
              } bg-active text-gray-50 gap-3 flex justify-center items-center py-1.5 px-3 rounded-md w-full outline-none hover:opacity-60 focus:opacity-60  `}
            >
              {isLoading ? (
                <BeatLoader color="white" size={"16px"} />
              ) : (
                <>
                  Submit
                  <i className="pi pi-send"></i>
                </>
              )}
            </button>
            <div>
              <ul
                className={`flex  w-full justify-center gap-5 py-5 ${PRIMARY_TEXT}`}
              >
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
            </div>
          </form>
        </div>
      </div>
      <Toast
        ref={toast}
        className="!top-[10px] !right-2 "
        style={{ maxWidth: "calc(100vw - 40px) ", top: "10px", right: "0px" }}
      />
      <div
        className={`absolute bottom-0  w-fit transform-translate translate-x-[-50%] left-[50%]  flex justify-center items-center gap-2 my-3 ${PRIMARY_TEXT} px-3 py-1 shadow-sm rounded-md ${SECONDARY_TEXT} ${
          theme === "dark" ? "bg-primary" : "bg-primary-bright"
        }`}
      >
        <i className="pi pi-envelope"></i>
        <p>{email}</p>
        <i
          className={`pi pi-clone p-2 cursor-pointer hover:bg-gray-400 bg-opacity-75 transition-all duration-500 focus:bg-gray-400 rounded-full ${HOVER_TEXT} ${FOCUS_TEXT}`}
          onClick={handleEmailCopy}
        ></i>
      </div>
    </section>
  );
}
