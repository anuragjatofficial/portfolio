import "primeicons/primeicons.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Projects from "./pages/Projects";

export default function Page() {
  return (
    <main className="font-josefin_sans bg-[#3d3e42]">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
    </main>
  );
}
Page.serialize = {
  client: true,
};
