import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Nene IT & Consulting
            </h3>
            <p className="text-white/60 mt-2">
              Where Vision Meets Innovation
            </p>
          </div>

          <div className="text-white/40 text-sm text-center md:text-right">
            © 2026 Nene IT & Consulting. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}