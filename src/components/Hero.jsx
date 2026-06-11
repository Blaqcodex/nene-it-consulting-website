import ParticleField from "./ParticleField";
import { motion } from "framer-motion"
import logo from "../assets/logo.png";
import ParticleGalaxy from "./ParticleGalaxy";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      <ParticleGalaxy />
      
      <div className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[180px] opacity-20"/>

      <div className="absolute right-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[150px] opacity-20"/>

      <motion.img
            initial={{
            scale: 0,
            rotate: -180
                    }}
            animate={{
            scale: 1,
            rotate: 0
                    }}
            transition={{
            duration: 1.5
                }}
            src={logo}
            alt="logo"
            className="w-40 mx-auto mb-10"/>  

      <motion.div
        initial={{ opacity:0, y:100 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="text-center z-10 px-6"
      >

        <h1 className="text-7xl md:text-8xl font-black leading-none">

          Engineering

          <br />

          <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">

            Digital Futures

          </span>

        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-xl">

          Software Development.
          Cloud Solutions.
          AI Automation.
          Digital Transformation.

        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 hover:scale-105 transition">

          Start Your Project

        </button>

      </motion.div>

    </section>
  )
}