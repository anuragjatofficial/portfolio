import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-screen justify-between p-24 bg-[#14131a]">
      <div className="flex w-full h-full">
        <aside className="w-1/5 h-full">
          <div className='flex gap-2 pb-5 pl-3'>
            <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
            <div className="rounded-full h-4 w-4  bg-[#2bd576]"></div>
          </div>
          <div className=" bg-[#1c1b23] rounded-md">
            <ul className="text-[#8b8a91] text-sm">
              <li className="py-3 pl-5">Home</li>
              <li className="py-3 pl-5">About</li>
              <li className="py-3 pl-5">Skills</li>
              <li className="py-3 pl-5">Projets</li>
            </ul>
          </div>
        </aside>
        <div></div>
      </div>
    </main>
  );
}
