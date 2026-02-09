export default function CompareCTA() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Ambient moving glows */}
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-green-400/30 rounded-full blur-[120px] animate-orbitSlow" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-300/30 rounded-full blur-[120px] animate-orbitReverse" />

        <div className="relative rounded-[56px] bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 px-12 py-20 md:px-20 md:py-24 flex flex-col md:flex-row items-center gap-16 shadow-[0_40px_120px_rgba(16,185,129,0.35)] overflow-hidden">

          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* Image block */}
          <div className="relative z-10 group">
            <div className="absolute -inset-6 rounded-[32px] bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="compare properties"
              className="relative w-80 rounded-[32px] shadow-2xl transform group-hover:-translate-y-3 group-hover:rotate-[-1deg] transition duration-700 ease-out"
            />
          </div>

          {/* Text */}
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white/20 text-white text-sm tracking-wide backdrop-blur">
              Smart Comparison Engine
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Compare Your <br />
              <span className="text-emerald-100">Best Property Choices</span>
            </h2>

            <p className="mt-6 text-lg text-emerald-50 leading-relaxed">
              Side-by-side pricing, amenities, location insights & resale
              potential — all in one clean view.
            </p>

            <button className="group mt-10 inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              Explore Comparisons
              <span className="inline-block transform group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
