import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const services = [
  {
    title: "Web Development",
    desc: "Modern websites, secure client portals and high-performance web applications engineered to help businesses grow online.",
    icon: "🌐",
    stack: ["React", "Node.js", "MongoDB", "Vite"],
    benefit: "Fast, responsive & scalable.",
  },
  {
    title: "Custom Software",
    desc: "Business software designed around your workflow to improve productivity and eliminate repetitive manual processes.",
    icon: "💻",
    stack: ["JavaScript", "Express", "PostgreSQL", "REST API"],
    benefit: "Built specifically for your business.",
  },
  {
    title: "Cloud Solutions",
    desc: "Deploy, secure and scale your infrastructure using modern cloud technologies and best practices.",
    icon: "☁️",
    stack: ["Azure", "AWS", "Docker", "Linux"],
    benefit: "Reliable infrastructure that grows with you.",
  },
  {
    title: "AI Automation",
    desc: "Automate repetitive business tasks using AI assistants, intelligent workflows and machine-powered solutions.",
    icon: "🤖",
    stack: ["OpenAI", "Python", "Automation", "APIs"],
    benefit: "Save time and reduce operational costs.",
  },
  {
    title: "IT Consulting",
    desc: "Strategic technology advice, software planning and architecture designed to help businesses make smarter decisions.",
    icon: "📊",
    stack: ["Architecture", "Security", "Planning", "Strategy"],
    benefit: "Technology aligned with your business goals.",
  },
  {
    title: "Digital Transformation",
    desc: "Transform outdated business processes into efficient digital systems that improve customer experience and productivity.",
    icon: "⚙️",
    stack: ["Cloud", "AI", "Automation", "Analytics"],
    benefit: "Future-ready business operations.",
  },
];

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
              whileHover={{ y: -8 }}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-10
                group
                cursor-pointer
                text-center
                h-full
                transition-all
                duration-500
                hover:border-orange-400
                hover:shadow-[0_0_50px_rgba(255,122,26,0.25)]
              "
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-5xl mb-6 group-hover:scale-110 transition-transform"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-white/60 leading-7 group-hover:text-white/80 transition-colors min-h-[110px]">
                {service.desc}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-white/10
                      border
                      border-white/10
                      text-white/80
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-orange-400">
                ✓ {service.benefit}
              </p>

              <button
                className="
                  mt-6
                  font-semibold
                  text-orange-400
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              >
                Learn More →
              </button>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}