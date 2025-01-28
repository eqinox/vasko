"use client";
import Image from "next/image";
import SpinningCube from "@/components/ui/spinning-cube";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleProjectClick = () => {
    window.open("https://ecommerce-shopping-platform.vercel.app/", "_blank");
  };

  return (
    <div className="flex flex-col">
      <div>
        <Image
          alt="banner"
          src="/images/banner.jpg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto max-sm:h-[400px] max-sm:object-cover"
        />
      </div>
      <div className="flex items-center justify-center rounded-lg mx-auto max-w-4xl p-6">
        <h1 className="text-4xl font-bold text-center flex flex-col gap-6 max-sm:text-2xl">
          <span className="bg-gradient-to-r from-slate-500 to-sky-500 bg-clip-text text-transparent">
            Welcome, I&apos;m <span className="italic">Vasil Nikolov</span>
          </span>
          <div className="flex items-center justify-center gap-4">
            <span className="bg-gradient-to-r from-sky-500 to-slate-500 bg-clip-text text-transparent">
              Transforming Ideas into Digital Solutions
            </span>
          </div>
        </h1>
      </div>
      <div className="flex items-center justify-center mt-10">
        <SpinningCube />
      </div>

      <h2 className="text-4xl font-bold text-center flex flex-col max-sm:text-2xl bg-gradient-to-r from-slate-500 to-sky-500 bg-clip-text text-transparent mt-16">
        My website
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
          {/* <img src="path-to-your-image.jpg" alt="Project 1" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"> */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-white text-lg font-bold">Project Title</h2>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 h-[80vh] w-5/6 mx-auto 
        bg-stone-800 gap-6 group relative overflow-hidden rounded-2xl transition-all duration-500 mt-2
        hover:shadow-2xl p-[4vw] hover:opacity-90 cursor-default"
      >
        <iframe
          src="https://ecommerce-shopping-platform.vercel.app/"
          className="w-full h-full rounded-2xl transform scale-95 transition-transform duration-500 group-hover:scale-100"
          style={{ border: "none" }}
          onLoad={() => setIsLoading(false)}
        />

        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-500 ${
            isLoading ? "opacity-100" : "opacity-100 group-hover:opacity-0"
          }`}
        >
          <h3 className="text-white text-xl font-bold">
            {isLoading ? "Loading..." : "E-commerce Project"}
          </h3>
        </div>
        <Button
          onClick={handleProjectClick}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-6 font-semibold 
          opacity-0 group-hover:opacity-100 text-2xl duration-500
          bg-white text-slate-900 hover:bg-slate-900 hover:text-white border-none"
          variant="ghost"
        >
          View Website
        </Button>
      </div>
    </div>
  );
}
