import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("");
  const footerRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const el = footerRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Johannesburg",
      });
      setTime(now);
    };
    updateTime();
    const id = setInterval(updateTime, 30000);
    return () => clearInterval(id);
  }, []);

  const services = [
    "Web Development",
    "Custom Software",
    "Cloud Solutions",
    "AI Automation",
    "IT Consulting",
    "Digital Transformation",
  ];

  const links = ["Services", "About", "Portfolio", "Careers", "Contact"];

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#050510] text-white"
    >
      {/* Animated aurora blob following cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(139,92,246,0.25), rgba(249,115,22,0.12) 30%, transparent 60%)`,
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

      {/* Top hairline gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      {/* MASSIVE brand mark */}
      <div className="relative pt-20 pb-8 px-6 md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* CTA bar */}
          <div className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-16 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-3">
                
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
                
              </h2>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Brand column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative h-10 w-10">
                  

                </div>
                <div>
                  <div className="font-bold text-lg leading-none"></div>
                  <div className="text-xs text-white/50 leading-none mt-1">
                  
                  </div>
                </div>
              </div>
              

              {/* Live status */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-4xl text-white/70 font-mono tracking-wide">
                  Johannesburg · {time}  Available for work now
                </span>
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <span className="h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-4" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <span className="h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-4" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Contact
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:info@neneit.co.za"
                    className="block text-white hover:text-purple-300 transition-colors"
                  >
                    info@neneit.co.za
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+27823665854"
                    className="block text-white hover:text-purple-300 transition-colors"
                  >
                    +27 82 366 5854
                  </a>
                </li>
                <li>
                  <a
                    href="https://neneit.co.za"
                    className="block text-white/60 hover:text-white transition-colors"
                  >
                    neneit.co.za
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Giant wordmark */}
          <div className="relative mb-10 overflow-hidden">
            <h1 className="pointer-events-none select-none text-center font-black tracking-tighter leading-none bg-gradient-to-b from-white/20 via-white/5 to-transparent bg-clip-text text-transparent"
                style={{ fontSize: "clamp(3rem, 18vw, 16rem)" }}>
              
            </h1>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050510] to-transparent" />
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
              <span>© {new Date().getFullYear()} Nene IT & Consulting</span>
              <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/80 transition-colors">Cookies</a>
              <a href="#" className="hover:text-white/80 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-white/80 transition-colors">License</a>
            </div>
            <div className="flex items-center gap-3">
              {[].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold text-white/60 transition-all hover:border-purple-400/50 hover:text-white hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/0 to-orange-500/0 transition-all group-hover:from-purple-500/20 group-hover:to-orange-500/20" />
                  <span className="relative">{s}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
