import { motion } from "framer-motion";

const modules = [
  "AI",
  "Cloud",
  "Security",
  "Software",
  "Automation",
  "Consulting",
];

export default function OrbitalSystem() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {modules.map((item, index) => {

        const angle = (360 / modules.length) * index;

        return (
          <motion.div
            key={item}
            className="absolute"

            animate={{
              rotate: 360
            }}

            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }}

            style={{
              transformOrigin: "0 160px"
            }}
          >
            <div
              style={{
                transform: `rotate(${angle}deg)`
              }}
            >
              <div
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  backdrop-blur-md
                  border
                  border-white/10
                  text-white/80
                  text-sm
                  tracking-widest
                "
              >
                {item}
              </div>
            </div>
          </motion.div>
        );

      })}
    </div>
  );
}