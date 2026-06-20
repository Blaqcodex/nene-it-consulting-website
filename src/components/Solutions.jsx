import { motion } from "framer-motion";
import { Zap, Cloud, Code2, Workflow, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Digital Transformation",
    description: "Transform outdated manual processes into modern digital systems that improve efficiency and productivity.",
    icon: Workflow,
    gradient: "from-orange-500 to-pink-500",
    href: "#contact"
  },
  {
    title: "Business Automation", 
    description: "Automate repetitive workflows and tasks to save time, reduce errors and improve operational performance.",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
    href: "#contact"
  },
  {
    title: "Cloud Infrastructure",
    description: "Deploy scalable cloud solutions that provide flexibility, security and business continuity.",
    icon: Cloud,
    gradient: "from-blue-500 to-purple-500",
    href: "#contact"
  },
  {
    title: "Custom Software Development",
    description: "Build software tailored specifically to your business processes, goals and growth strategy.",
    icon: Code2,
    gradient: "from-orange-400 to-purple-600",
    href: "#contact"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Solutions() {
  return (
    <section id="solutions" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Business Solutions
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg"
        >
          We help organizations modernize operations, improve efficiency and accelerate growth through technology.
        </motion.p>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                variants={card}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-white/20 overflow-hidden flex-col"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative flex-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <a 
                  href={solution.href}
                  className="relative inline-flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}