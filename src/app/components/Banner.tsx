import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Banner() {
  return (
    <section className="bg-[url('/bg.jpeg')] w-[95%] mx-auto bg-no-repeat bg-blur my-14 rounded-md">
      <div
        className="flex justify-between items-center py-5 w-full px-10"
        style={{ backdropFilter: "blur(10px)" }}
      >
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
            <h1 className="text-2xl font-bold">Anurag Choudhary</h1>
            <p className="text-sm">@anuragjatofficial</p>
          </div>
        </div>
        <Link href="https://instagram.com/anuragjatofficial" target="_blank">
          <button className=" bg-[#14131a] text-[#8b8a91] px-3 py-2 flex items-center justify-center gap-2 rounded-md text-sm">
            <div>Follow on instagram</div>
            <i
              className="pi pi-instagram"
            ></i>
          </button>
        </Link>
      </div>
    </section>
  );
}
