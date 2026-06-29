const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <h2 className="text-center text-6xl font-black mb-16 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        Technologies We Use
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        {technologies.map((tech) => (
          <div
            key={tech}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-full"
          >
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
}