const Topbar = () => {
  return (
    <header className="h-20 border-b border-white/10 flex items-center justify-between px-8">

      <div>

        <p className="text-cyan-400 uppercase text-xs tracking-[0.3em]">
          System Status
        </p>

        <h2 className="text-2xl font-bold">
          Mission Control
        </h2>

      </div>

      <div className="flex items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

        <span className="text-gray-300">
          Core Online
        </span>

      </div>

    </header>
  );
};

export default Topbar;