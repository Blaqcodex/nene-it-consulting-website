import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt";

const services = [
  { title: "Web Development", desc: "Custom apps & platforms built for scale" },
  { title: "Custom Software", desc: "Bespoke solutions for your exact workflow" },
  { title: "Cloud Solutions", desc: "AWS, Azure, DevOps & infrastructure" },
  { title: "AI Automation", desc: "Intelligent workflows that save hours daily" },
  { title: "IT Consulting", desc: "Strategy, architecture & technical audits" },
  { title: "Digital Transformation", desc: "Future-proof your business systems" },
]

export default function Services() {
  return (
    <section id="services" className="py-32 max-w-7xl mx-auto px-8">
      <h2 className="text-center text-5xl font-bold mb-20">
        <span className="text-violet">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
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
          >
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: "#A100FF",
                boxShadow: "0 0 50px rgba(228, 186, 46, 0.3)"
              }}
              className="
                bg-white/5 border-white/10 backdrop-blur-xl 
                rounded-3xl p-10 group cursor-pointer text-center
                h-full
              "
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange transition-colors">
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