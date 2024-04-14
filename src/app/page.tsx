import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-screen justify-between bg-[#14131a]">
      <div className="flex w-full h-full  gap-10">
        <Sidebar />
        <div className="w-4/5">
          <Banner />
          <Projects/>
        </div>
      </div>
    </main>
  );
}
Home.serialize = {
  client: true,
};