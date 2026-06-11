import { motion } from "framer-motion"

export default function Stats() {
  const stats = [
    { number: "15+", label: "Technologies" },
    { number: "24/7", label: "Support" },
    { number: "100%", label: "Client Focus" },
    { number: "∞", label: "Scalability" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold mb-16 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                bg-white/5 backdrop-blur-xl
                border-white/10
                rounded-3xl p-8 text-center
                hover:border-violet
                transition-all duration-500
                group
              "
            >
              <h3 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {stat.number}
              </h3>

              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}