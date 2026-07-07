const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-white/10 bg-black/30 backdrop-blur-xl">

      <div className="p-8">

        <h2 className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
          Mission Control
        </h2>

        <h1 className="text-2xl font-bold mt-3">
          Nene IT
        </h1>

      </div>

      <nav className="px-6 space-y-3">

        <button className="w-full text-left rounded-xl bg-cyan-500/20 border border-cyan-500/30 px-4 py-3">
          Dashboard
        </button>

        <button className="w-full text-left rounded-xl hover:bg-white/5 px-4 py-3">
          Contacts
        </button>

        <button className="w-full text-left rounded-xl hover:bg-white/5 px-4 py-3">
          AI Core
        </button>

        <button className="w-full text-left rounded-xl hover:bg-white/5 px-4 py-3">
          Settings
        </button>

      </nav>

    </aside>
  );
};

export default Sidebar;