import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Keep footer full-bleed on mobile
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 768px) {
        footer > div:first-child {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              

            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              
              
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm">info@nenetech.co.za</p>
            <p className="text-gray-400 text-sm mt-2">+27 82 366 5854</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nene IT & Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}