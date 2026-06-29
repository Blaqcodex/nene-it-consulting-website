import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:border-orange-400
        hover:shadow-[0_0_40px_rgba(255,122,26,.2)]
      "
    >
      <p className="text-sm uppercase tracking-[3px] text-orange-400">
        {project.category}
      </p>

      <h3 className="text-3xl font-bold mt-4">
        {project.title}
      </h3>

      <p className="mt-5 text-white/70 leading-8">
        {project.description}
      </p>

      <div className="mt-8">
        <h4 className="text-orange-400 font-semibold mb-3">
          Key Features
        </h4>

        <div className="grid grid-cols-2 gap-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="text-white/80 text-sm"
            >
              ✓ {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1
              rounded-full
              bg-white/10
              border
              border-white/10
              text-xs
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <button
        className="
          mt-8
          text-orange-400
          font-semibold
          group-hover:translate-x-2
          transition-transform
        "
      >
        View Solution →
      </button>
    </motion.div>
  );
}