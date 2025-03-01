"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Background from './../../assets/pi-background.png';


export default function page() {
  const router = useRouter();
  return (


    <div className="min-h-screen relative">
      <Image
        fill
        sizes="100%"
        src={Background}
        alt="Background"
        className="h-screen w-screen object-cover object-center"
      />
      <main className="relative z-10 ">

        <div className="py-20 px-6 md:px-12 lg:px-20">
          <div className="text-center h-48 rounded-3xl space-y-2 bg-green-700 rounded-tl-none flex flex-col items-center justify-center px-5 max-w-lg mx-auto">
            <h3 className="text-2xl text-[#edb703] font-bold">Hurray!!!</h3>
            <p className="text-base text-white/80">
              Your pi is on its way to your wallet.
            </p>
          </div>

          <div className="max-w-lg mx-auto text-center mt-20">
            <button
              onClick={() => router.replace("/")}
              className="bg-[#8a348e] border-[#edb703] py-3.5 px-14 rounded-xl border hover:border-2 text-white transition-all ease-linear duration-200 font-medium tracking-wider"
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>



  );
}

