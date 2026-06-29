import { motion, AnimatePresence } from "framer-motion";

export default function ServiceModal({
  service,
  isOpen,
  onClose,
}) {
  return (
    <AnimatePresence>
      {isOpen && (

        <motion.div

          initial={{ opacity:0 }}

          animate={{ opacity:1 }}

          exit={{ opacity:0 }}

          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex items-center justify-center p-6"

          onClick={onClose}

        >

          <motion.div

            initial={{ scale:.8, opacity:0 }}

            animate={{ scale:1, opacity:1 }}

            exit={{ scale:.8, opacity:0 }}

            transition={{ duration:.35 }}

            onClick={(e)=>e.stopPropagation()}

            className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#111827]/90 backdrop-blur-2xl p-10"

          >

            <div className="text-6xl">

              {service.icon}

            </div>

            <h2 className="text-4xl font-bold mt-6">

              {service.title}

            </h2>

            <p className="mt-6 text-white/70 leading-8">

              {service.desc}

            </p>

            <h3 className="mt-10 text-orange-400 font-semibold">

              Technologies

            </h3>

            <div className="flex flex-wrap gap-3 mt-5">

              {service.stack.map((tech)=>(

                <span

                  key={tech}

                  className="px-4 py-2 rounded-full bg-white/10"

                >

                  {tech}

                </span>

              ))}

            </div>

            <button

              className="mt-10 w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 font-semibold"

            >

              Request This Service

            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}