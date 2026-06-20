import { motion } from "framer-motion"

export default function Founder() {
  return (
    <section id="founder" className="py-32">
      {/* Consistent container */}
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-black mb-20 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Meet The Founder
        </motion.h2>

        {/* Glass card with split layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur-xl border-white/10 rounded-[40px] p-8 md:p-14 overflow-hidden"
        >
          {/* Glow accent */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-center">

            {/* Photo + badge */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                {/* Replace src with Thabiso's photo */}
                <img
                  src="/thabiso.jpg"
                  alt="Thabiso Nene"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-3xl object-cover border-2 border-white/10"
                />
                <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-sm font-bold">
                  Founder
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <h3 className="text-4xl font-bold mb-2">Thabiso Nene</h3>
              <p className="text-purple-300 text-lg font-medium mb-6">
                Founder & Full Stack Developer
              </p>

              <div className="space-y-4 text-gray-300 leading-8 text-lg">
                <p>
                  Thabiso Nene founded Nene IT & Consulting with a vision of helping
                  businesses embrace technology through innovative software solutions,
                  automation and digital transformation.
                </p>
                <p>
                  With experience in full-stack web development, REST APIs, database
                  systems and cloud technologies, he focuses on building scalable
                  solutions that solve real business challenges and improve operational efficiency.
                </p>
                <p>
                  Through Nene IT & Consulting, businesses gain a technology partner
                  committed to innovation, reliability and long-term growth.
                </p>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-8">
                <a href="https://linkedin.com/in/thabiso-nene/" target="_blank" className="px-5 py-2 rounded-full bg-white/5 border-white/10 hover:border-purple-400 transition text-sm">LinkedIn</a>
                <a href="https://github.com/Blaqcodex" target="_blank" className="px-5 py-2 rounded-full bg-white/5 border-white/10 hover:border-purple-400 transition text-sm">GitHub</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}