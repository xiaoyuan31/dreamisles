import Stars from "./components/Stars";


export default function HomePage() {
  return (
   <div className="island-ocean animated-gradient flex flex-col items-center justify-center min-h-screen relative text-white text-center py-6 px-6 overflow-hidden">

  <Stars />

  
  
  {/* Floating Island */}
  <img
    src="/images/island_logo.png"
    alt="Floating Island"
    className="absolute top-[20%] left-1/2 -translate-x-1/2 w-24 md:w-32 z-10 animate-bounce-slow"
  />

  {/* Content */}
  <div className="z-20 relative max-w-2xl">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
      Welcome to DreamIsles
    </h1>

    

    <p className="text-lg md:text-xl mb-8">
      Explore as you wish for experiences. Let your imagination guide you
      through a universe full of surprises, adventures, and creativity.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
        Explore 
      </button>
      <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-400/50">
        Learn More
      </button>
    </div>
  </div>

</div>
  );
}