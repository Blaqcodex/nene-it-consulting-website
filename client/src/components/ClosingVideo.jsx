import heroVideo from "../assets/hero-video.mp4";

export default function ClosingVideo() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/*<h2 className="text-5xl md:text-7xl font-black">
          Engineering
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Digital Futures
          </span>
        </h2>

        <p className="mt-8 text-xl text-white/80 max-w-2xl">
          Ready to transform your business with modern software,
          cloud solutions and AI?
        </p>

        <button
          className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-purple-600
            font-semibold
          "
        >
          Let's Build Together
        </button>*/}

      </div>

    </section>
  );
}