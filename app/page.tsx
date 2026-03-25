import Stars from "./components/Stars";
import Link from "next/link";
export default function HomePage() {


  return (
   <div className="island-ocean animated-gradient flex flex-col items-center justify-center min-h-screen relative text-white text-center py-6 px-6 overflow-hidden">

  <Stars />

  {/* Floating Island */}
  <img
    src="/images/island_logo.png"
    alt="Floating Island"
    className="absolute top-[20%] left-1/2 -translate-x-1/2 w-20 md:w-28 z-10 animate-float"
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