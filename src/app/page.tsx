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
import { useState } from "react";
import { PrimeReactProvider } from "primereact/api";

export default function Page() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <PrimeReactProvider>
      <main className="font-josefin_sans bg-[#3d3e42] ">
        <Header
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
        <Sidebar
          isVisible={isSidebarVisible}
          setIsVisible={setIsSidebarVisible}
        ></Sidebar>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Github />
        <Contact />
        <Footer />
      </main>
    </PrimeReactProvider>
  );
}
Page.serialize = {
  client: true,
};
