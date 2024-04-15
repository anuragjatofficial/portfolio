import "primeicons/primeicons.css";
import Home from "./pages/Home";
import About from "./pages/About";

export default function Page() {
  return (
    <main className="font-josefin_sans">
      <header className="bg-[#31333b] flex justify-between py-5 items-center px-5 z-20 sticky top-0">
        <div className="text-active font-medium text-2xl">
          {"<"}Anurag{"/>"}
        </div>
        <div className="text-gray-400">
          <ul className="flex gap-7">
            <li className="hover:text-gray-50 cursor-pointer">About</li>
            <li className="hover:text-gray-50 cursor-pointer">Portfolio</li>
            <li className="hover:text-gray-50 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="bg-[#31333b]">
          <div className="bg-[#3d3e42] flex justify-between items-center px-3 py-2 rounded-md text-gray-400">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none bg-[#3d3e42]"
            />
            <i className="pi pi-search"></i>
          </div>
        </div>
      </header>
      <Home/>
      <About/>
    </main>
  );
}
Page.serialize = {
  client: true,
};
