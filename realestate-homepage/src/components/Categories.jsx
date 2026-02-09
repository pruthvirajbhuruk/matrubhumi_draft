export default function Categories() {
  const categories = [
    { title: "Apartments", img: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1" },
    { title: "Villas", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" },
    { title: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" },
    { title: "Luxury Homes", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          Explore Property Types
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

              <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
