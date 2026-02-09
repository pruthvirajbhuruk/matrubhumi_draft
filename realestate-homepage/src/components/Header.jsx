import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className={`font-bold text-xl ${
          scrolled ? "text-gray-900" : "text-white"
        }`}>
          Matrubhumi
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className={`hidden sm:block px-4 py-2 rounded-full text-sm font-medium transition ${
              scrolled
                ? "bg-gray-100 text-gray-800"
                : "bg-white/20 text-white"
            }`}
          >
            Sell Property
          </button>

          <button className="px-4 py-2 rounded-full text-sm font-semibold bg-green-600 text-white">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
