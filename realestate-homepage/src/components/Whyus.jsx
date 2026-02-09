import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="relative py-40 bg-[#0b0c0c] text-white overflow-hidden">
      
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Story Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <p className="uppercase tracking-[0.25em] text-green-400 text-sm font-medium">
            Why We Exist
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Real Estate <br />
            <span className="text-white/70">
              Designed Around You
            </span>
          </h2>

          <p className="mt-8 text-xl text-white/65 leading-relaxed">
            Anyone can list a property.  
            We go deeper — understanding neighborhoods, future value,
            architecture, and how a home should *feel*.
          </p>
        </motion.div>

        {/* Story Blocks */}
        <div className="mt-28 grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Curated, Not Crowded",
              desc: "Every property is handpicked. No mass listings. No noise. Only homes worth your time.",
            },
            {
              title: "Location Intelligence",
              desc: "We analyze growth corridors, livability scores, and future infrastructure — before we recommend.",
            },
            {
              title: "White-Glove Experience",
              desc: "From first visit to final paperwork, everything feels seamless, private, and personal.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Number */}
              <div className="text-6xl font-extrabold text-white/5">
                0{i + 1}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-white/65 leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Line */}
              <div className="mt-6 h-[2px] w-12 bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-3xl md:text-4xl font-semibold leading-snug">
            We don’t chase volume.  
            <br />
            <span className="text-green-400">
              We build long-term value.
            </span>
          </p>

          <button className="mt-12 px-10 py-5 rounded-full bg-green-500 text-black font-semibold text-lg hover:scale-105 transition">
            Talk to an Expert
          </button>
        </motion.div>

      </div>
    </section>
  );
}
