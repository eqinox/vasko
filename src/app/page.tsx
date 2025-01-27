import Image from "next/image";
import SpinningCube from "@/components/ui/spinning-cube";

export default function Home() {
  return (
    <div>
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
      <div className="flex items-center justify-center">
        <SpinningCube />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
          {/* <img src="path-to-your-image.jpg" alt="Project 1" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"> */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-white text-lg font-bold">Project Title</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2 p-5 text-slate-900">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="p-4 rounded-md border-slate-600 border">
            <h2>Product {index}</h2>
            <p>Description {index}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
