export default function CommandCenter() {
  return (
    <section
      id="contact"
      className="py-40 max-w-5xl mx-auto px-8"
    >
      <div
        className="
          bg-black
          border
          border-purple-500
          rounded-3xl
          p-10
        "
      >

        <div className="text-green-400 mb-8">
          {">"} initialize_project()
        </div>

        <input
          placeholder="Your Name"
          className="w-full mb-4 p-4 bg-black border border-white/10"
        />

        <input
          placeholder="Your Email"
          className="w-full mb-4 p-4 bg-black border border-white/10"
        />

        <textarea
          placeholder="Tell us about your project..."
          className="w-full p-4 bg-black border border-white/10 h-40"
        />

      </div>
    </section>
  );
}