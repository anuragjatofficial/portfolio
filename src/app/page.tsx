"use client";
import "primeicons/primeicons.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Github from "./pages/Github";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function Page() {
  return (
    <main className="font-josefin_sans bg-[#3d3e42]">
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Github />
      <Contact />
      <Footer />
    </main>
  );
}
Page.serialize = {
  client: true,
};
