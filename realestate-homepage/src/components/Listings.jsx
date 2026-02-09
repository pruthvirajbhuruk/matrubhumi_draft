import { motion } from "framer-motion";

const listings = [
  {
    title: "Skyline Residences",
    location: "Bandra, Mumbai",
    price: "₹4.2 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Palm Grove Villas",
    location: "Whitefield, Bangalore",
    price: "₹3.6 Cr",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    title: "Oceanfront Heights",
    location: "Juhu, Mumbai",
    price: "₹6.8 Cr",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  },
];

export default function Listings() {
  return (
    <section className="py-32 bg-[#0e0f0f] text-white relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-widest text-green-400 font-medium">
            Curated Listings
          </p>
          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
            Homes That Define <br /> Your Lifestyle
          </h2>
          <p className="mt-6 text-white/70 text-lg">
            Handpicked premium properties designed for modern living,
            prime locations, and long-term value.
          </p>
        </motion.div>

        {/* Listings Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {listings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative rounded-[32px] overflow-hidden bg-[#161717]"
            >
              
              {/* Image */}
              <div className="relative h-[380px] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-white/60">{item.location}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-semibold text-green-400">
                    {item.price}
                  </span>
                  <button className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-green-500/20 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="px-10 py-5 rounded-full bg-green-500 text-black font-semibold text-lg hover:scale-105 transition">
            View All Listings
          </button>
        </motion.div>

      </div>
    </section>
  );
}
