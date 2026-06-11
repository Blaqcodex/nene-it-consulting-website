import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[999]">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <h1 className="text-5xl font-black">
          NENE IT & CONSULTING
        </h1>

        <p className="text-gray-400 mt-4 text-center">
          INITIALIZING...
        </p>

      </motion.div>

    </div>
  );
}