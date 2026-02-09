import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discover Properties",
      desc: "Explore handpicked, verified homes curated around your lifestyle and budget.",
    },
    {
      step: "02",
      title: "Visit & Evaluate",
      desc: "Schedule seamless site visits and understand every detail with expert guidance.",
    },
    {
      step: "03",
      title: "Secure with Confidence",
      desc: "From negotiation to paperwork, we handle everything transparently.",
    },
  ];

  return (
    <section className="relative py-32 bg-[#f8faf9] overflow-hidden">
      
      {/* Soft ambient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-green-600 text-sm font-medium">
            Our Process
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Simple. Transparent. <br className="hidden md:block" />
            Designed for You.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A refined experience that removes complexity and keeps you in control at every step.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-24 grid md:grid-cols-3 gap-12">

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[32px] p-10 border border-gray-200 hover:border-gray-300 transition"
            >
              {/* Step number */}
              <div className="text-6xl font-extrabold text-green-500/15 group-hover:text-green-500/30 transition">
                {s.step}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {s.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {s.desc}
              </p>

              {/* Underline accent */}
              <div className="mt-8 h-[2px] w-10 bg-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
            </motion.div>
          ))}

          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10" />
        </div>
      </div>
    </section>
  );
}
