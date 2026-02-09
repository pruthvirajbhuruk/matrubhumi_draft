export default function Blogs() {
  const blogs = [
    "Best Areas to Buy Property in Pune (2025)",
    "How to Avoid Overpriced Real Estate Projects",
    "Step-by-Step Guide for First-Time Home Buyers",
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Insights & Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogs.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h3 className="font-semibold text-lg text-gray-900">
                {b}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Read more →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
