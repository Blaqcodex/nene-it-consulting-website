import { motion } from "framer-motion"

const services = [
  "Web Development",
  "Custom Software",
  "Cloud Solutions",
  "AI Automation",
  "IT Consulting",
  "Digital Transformation",
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 max-w-7xl mx-auto px-8"
    >

      <h2 className="text-center text-5xl font-bold mb-20">

        Services

      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (

          <motion.div
            key={service}
            whileHover={{
              scale:1.05,
              rotateX:5,
              rotateY:5
            }}
            className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-10
            "
          >

            <h3 className="text-2xl font-semibold">
              {service}
            </h3>

          </motion.div>

        ))}

      </div>

    </section>
  )
}