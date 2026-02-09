export default function Hero() {
  return (
    <section className="relative w-screen min-h-screen">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
          className="w-full h-full object-cover"
          alt="home"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Real Estate. <br /> Simplified.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-200">
          Buy, sell & discover verified properties with complete transparency
        </p>

        {/* Search Bar */}
        <div className="mt-10 bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-3 max-w-4xl">
          <input
            className="flex-1 px-4 py-3 rounded-xl border outline-none"
            placeholder="City or locality (e.g. Wakad, Pune)"
          />
          <input
            className="flex-1 px-4 py-3 rounded-xl border outline-none"
            placeholder="Budget or BHK"
          />
          <button className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold">
            Search
          </button>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[60px]" />
    </section>
  );
}
