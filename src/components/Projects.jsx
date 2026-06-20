const projects = [
  {
    title: "Security Guard Management System",
    tech: "React • Node.js • PostgreSQL",
    description:
      "A centralized platform for managing security personnel, attendance tracking, payroll administration, client contracts and reporting.",
  },

  {
    title: "Business Process Automation",
    tech: "JavaScript • APIs • Databases",
    description:
      "Custom automation solutions that reduce manual work, improve efficiency and streamline operations.",
  },

  {
    title: "Modern Web Applications",
    tech: "React • Express • MySQL",
    description:
      "Responsive web applications designed to improve customer experience and business productivity.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-32"
    >

      <h2 className="text-center text-6xl font-black mb-8 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
        Real solutions built to solve real business challenges.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-purple-300 mb-4">
              {project.tech}
            </p>

            <p className="text-gray-400">
              {project.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}