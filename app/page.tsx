import Stars from "./components/Stars";
import Link from "next/link";
export default function HomePage() {


  return (
   <div className="island-ocean animated-gradient flex items-center justify-center min-h-screen relative text-white text-center py-6 px-6 overflow-hidden">

 {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B1D51] to-[#000] animate-gradient"></div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:18px_18px]"></div>

  <Stars />

  {/* Floating Island */}
  <img
    src="/images/island_logo.png"
    alt="Floating Island"
    className=" w-20 md:w-28 z-10 animate-float mb-6"
  />

  {/* Content */}
  <div className="z-20 relative max-w-2xl">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
        DreamIsles
      </h1>

        <p className="text-lg md:text-xl mb-6 opacity-80 italic">
          A place between dreams and reality
        </p>

        <Link href="/islands/traveler-night">
        <button  className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Start ✨
        </button>
        </Link>
{/* 
        <button className="border ms-2 border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition">
          Learn
        </button> */}
    </div>

</div>
  );
}