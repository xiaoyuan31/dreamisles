import Stars from "./components/Stars";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { islands, type Island } from "@/app/data/islands";

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

       <p className="text-lg md:text-xl mb-6 opacity-80 italic card flex items-center justify-center gap-2">
          A place between dreams and reality
          <span className="inline-block ml-2 animate-pulse">
            <FontAwesomeIcon icon={faCompass} className="text-pink-300 text-sm" />
          </span>
        </p>

        <Link href="/islands">
          <button className="bg-gradient-to-r mb-6 from-pink-500 to-purple-500 w-fit mx-auto px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2">
            Explore the isles
          </button>
        </Link>


        <Link href="/islands/memory">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 w-fit mx-auto px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2">
            📖 Memories
          </button>
        </Link>
    </div>

</div>
  );
}