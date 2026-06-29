import { motion } from "framer-motion";
import { Shield, Workflow, Globe, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Security Guard Management System",
    tech: ["React", "Node.js", "PostgreSQL"],
    description: "A centralized platform for managing security personnel, attendance tracking, payroll administration, client contracts and reporting.",
    icon: Shield,
    gradient: "from-orange-500 to-pink-500",
    href: "#contact"
  },
  {
    title: "Business Process Automation",
    tech: ["JavaScript", "APIs", "Databases"],
    description: "Custom automation solutions that reduce manual work, improve efficiency and streamline operations.",
    icon: Workflow,
    gradient: "from-purple-500 to-pink-500",
    href: "#contact"
  },
  {
    title: "Modern Web Applications",
    tech: ["React", "Express", "MySQL"],
    description: "Responsive web applications designed to improve customer experience and business productivity.",
    icon: Globe,
    gradient: "from-blue-500 to-purple-500",
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

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg"
        >
          Real solutions built to solve real business challenges.
        </motion.p>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={card}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-white/20 overflow-hidden flex-col"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative flex-1">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* View Case Study Link */}
                <a 
                  href={project.href}
                  className="relative inline-flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
                >
                  View Case Study
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