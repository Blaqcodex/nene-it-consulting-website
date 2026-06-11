export default function CallToAction() {
  return (
    <section className="py-32 px-8">

      <div
        className="
          max-w-6xl
          mx-auto
          text-center
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-[40px]
          p-16
        "
      >

        <h2 className="text-6xl font-black mb-6">

          Ready To Build
          The Future?

        </h2>

        <p className="text-gray-400 text-xl mb-10">

          Let's create software,
          automation and digital experiences
          that move your business forward.

        </p>

        <button
          className="
            px-10
            py-5
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-purple-600
            font-bold
          "
        >
          Start Your Project
        </button>

      </div>

    </section>
  );
}