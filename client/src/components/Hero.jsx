import { useState } from "react";
import ContactModal from "./ContactModal";
import ParticleField from "./ParticleField";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import ParticleGalaxy from "./ParticleGalaxy";
import ENITING from "./ENITING/ENITING";
import OrbitalSystem from "./OrbitalSystem";


export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">

      <ParticleField />
      <ParticleGalaxy />
      {/* <OrbitalSystem /> */}

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[180px] opacity-20" />
      <div className="absolute right-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[150px] opacity-20" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          max-w-4xl
          overflow-visible
        "
      >

        {/* ================= Logo ================= */}

        <motion.img
          id="logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          src={logo}
          alt="Nene IT"
          className="
            w-24
            md:w-32
            mx-auto
            mb-[-40px]
            relative
            z-20
            rounded-xl
            drop-shadow-[0_0_25px_rgba(255,122,26,0.7)]
          "
        />

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 -mt-16 md:-mt-24"
        >

          <h1
            className="
              text-5xl
              md:text-8xl
              font-black
              leading-none
            "
          >

            <span id="engineering">
              Engineering
            </span>

            <br />

            <span
              id="digital"
              className="
                bg-gradient-to-r
                from-orange-400
                via-purple-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Digital
            </span>

            {" "}

            <span
              id="futures"
              className="
                bg-gradient-to-r
                from-orange-400
                via-purple-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Futures
            </span>

          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-white/70 text-xl">
            Software Development • Cloud Solutions • AI Automation • Digital Transformation
          </p>

          <motion.button
            onClick={() => setOpenModal(true)}
            id="cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-10
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-purple-600
              font-semibold
              shadow-lg
              shadow-orange-500/30
              hover:shadow-orange-500/50
              transition
            "
          >
            Start Your Project
          </motion.button>

        </motion.div>

      </motion.div>

      {/* <ENITING /> */}

      <ContactModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </section>
  );
}