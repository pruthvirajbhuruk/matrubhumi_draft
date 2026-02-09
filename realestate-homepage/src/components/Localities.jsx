export default function Localities() {
  const places = [
    { name: "Baner", price: "₹15,300 / sq.ft" },
    { name: "Wakad", price: "₹9,800 / sq.ft" },
    { name: "Hinjewadi", price: "₹8,600 / sq.ft" },
    { name: "Kharadi", price: "₹10,900 / sq.ft" },
  ];

  return (
    <section className="bg-gray-50 py-24 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Projects <br /> by Localities
          </h2>

          <input
            className="mt-6 md:mt-0 px-5 py-3 rounded-xl border w-full md:w-80"
            placeholder="Search for locality"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {places.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                {p.name}
              </h3>
              <p className="mt-2 text-gray-600">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
