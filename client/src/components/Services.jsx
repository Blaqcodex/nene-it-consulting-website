import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt";

const services = [
  { title: "Web Development", desc: "Custom apps & platforms built for scale", icon: "🌐" },
  { title: "Custom Software", desc: "Bespoke solutions for your exact workflow", icon: "💻" },
  { title: "Cloud Solutions", desc: "AWS, Azure, DevOps & infrastructure", icon: "☁️" },
  { title: "AI Automation", desc: "Intelligent workflows that save hours daily", icon: "🤖" },
  { title: "IT Consulting", desc: "Strategy, architecture & technical audits", icon: "📊" },
  { title: "Digital Transformation", desc: "Future-proof your business systems", icon: "⚙️" },
]

export default function Services() {
  return (
    <section id="services" className="py-32 pb-40">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold mb-24 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Services
      </motion.h2>

      <div
        className="
          max-w-8xl
          mx-auto
          px-12
          grid
          md:grid-cols-3
          gap-8
        "
      >
        {services.map((service, i) => (
          <Tilt
            key={service.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#A100FF"
            glarePosition="all"
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white/5 border-white/10 backdrop-blur-xl 
                rounded-3xl p-10 group cursor-pointer text-center
                h-full transition-all duration-500
                hover:border-violet-500
                hover:shadow-[0_0_50px_rgba(161,0,255,0.3)]
              "
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}