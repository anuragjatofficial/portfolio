"use client";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Github from "./pages/Github";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { PrimeReactProvider } from "primereact/api";

export default function Page() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    savedTheme
      ? setTheme(savedTheme)
      : prefersDarkMode
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  return (
    <PrimeReactProvider>
      <main
        className={`font-josefin_sans ${
          theme === "dark" ? "bg-primary" : "bg-primary-bright"
        } `}
      >
        <Header
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
          theme={theme}
          setTheme={setTheme}
        />
        <Sidebar
          isVisible={isSidebarVisible}
          setIsVisible={setIsSidebarVisible}
          theme={theme}
          setTheme={setTheme}
        ></Sidebar>
        <Home theme={theme} setTheme={setTheme} />
        <About theme={theme} setTheme={setTheme} />
        <Projects theme={theme} setTheme={setTheme} />
        <Experience theme={theme} setTheme={setTheme} />
        <Github theme={theme} setTheme={setTheme} />
        <Contact theme={theme} setTheme={setTheme} />
        <Footer theme={theme} setTheme={setTheme} />
      </main>
    </PrimeReactProvider>
  );
}
Page.serialize = {
  client: true,
};
