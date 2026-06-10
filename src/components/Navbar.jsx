export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-dark/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h2 className="font-bold text-2xl text-violet">
          Nene IT & Consulting
        </h2>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-white/80">
          <a href="#services" className="hover:text-orange transition-colors">Services</a>
          <a href="#about" className="hover:text-orange transition-colors">About</a>
          <a href="#contact" className="hover:text-orange transition-colors">Contact</a>
        </div>

      </div>
    </nav>
  )
}