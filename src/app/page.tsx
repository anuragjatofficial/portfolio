import Image from 'next/image'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-screen justify-between bg-[#14131a]">
      <div className="flex w-full h-full  gap-10">
        <Sidebar />
        <div className="w-4/5 ">
          <div className="bg-[url('/bg.jpeg')] w-full flex justify-between items-center mx-auto px-10 py-5 bg-no-repeat bg-blur backdrop-blur-md backdrop-filter" >
            <div className="flex items-center ">
              <Image
                src="/main.png"
                alt="my image"
                width={150}
                height={150}
                style={{
                  borderRadius: "50%",
                  padding: "10px",
                  backgroundColor: "white",
                }}
              />
              <div className="text-white pl-4">
                <h1 className='text-2xl font-bold'>Anurag Choudhary</h1>
                <p className='text-sm'>@anuragjatofficial</p>
              </div>
            </div>
            <button className=" bg-[#14131a] text-[#8b8a91] px-3 py-2 rounded-md text-sm">
              Follow on instagram
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
