import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-[60]

              w-[92%]
              max-w-2xl

              rounded-3xl

              border border-white/10
              bg-[#0b1020]/95
              backdrop-blur-xl

              p-10
            "
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">
                  Start Your Project
                </h2>

                <p className="text-white/60 mt-2">
                  Let's build something amazing together.
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-3xl text-white/50 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">

              <input
                placeholder="Full Name"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-orange-400"
              />

              <input
                placeholder="Company"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-orange-400"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-orange-400"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-orange-400 resize-none"
              />

              <button
                className="
                  w-full
                  py-4
                  rounded-xl
                  font-semibold

                  bg-gradient-to-r
                  from-orange-500
                  to-purple-600

                  hover:scale-[1.02]
                  transition
                "
              >
                Submit Project
              </button>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}