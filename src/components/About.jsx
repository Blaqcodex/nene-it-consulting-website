import { motion } from "framer-motion"

const aboutCards = [
  {
    title: "Mission",
    desc: "Transform businesses through technology.",
    gradient: "from-orange-400 to-orange-600"
  },
  {
    title: "Vision", 
    desc: "Become a trusted digital partner.",
    gradient: "from-violet-400 to-violet-600"
  },
  {
    title: "Innovation",
    desc: "Build future-ready solutions.",
    gradient: "from-pink-400 to-pink-600"
  },
]

export default function About() {
  return (
    <section id="about" className="py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold mb-12 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Who We Are
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-xl text-white/70 max-w-4xl mx-auto mb-24 leading-relaxed"
      >
        Nene IT & Consulting delivers innovative software, cloud, AI and digital transformation solutions that help businesses modernize, automate and scale.
      </motion.p>

      {/* Centered grid with equal side space */}
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {aboutCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="
              bg-white/5 border-white/10 backdrop-blur-xl
              rounded-3xl p-8 group
              hover:border-violet-500 transition-all duration-500
              text-center cursor-pointer h-full
            "
          >
            <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${card.gradient} mx-auto mb-6`} />
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
              {card.title}
            </h3>

            <p className="text-white/60 group-hover:text-white/80 transition-colors">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}