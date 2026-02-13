"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleField from "@/components/ui/particle-field";
import TypewriterText from "@/components/ui/typewriter-text";
import MagneticButton from "@/components/ui/magnetic-button";

const firstName = "LEONALD".split("");
const lastName = "PILVERA".split("");

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm text-gray-300">
            Virtual Assistant &amp; Automation Expert
          </span>
        </motion.div>

        {/* Staggered name */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
          <span className="block">
            {firstName.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.04, type: "spring", stiffness: 100 }}
                className="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {lastName.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (firstName.length + 1 + i) * 0.04, type: "spring", stiffness: 100 }}
                className="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div className="text-xl md:text-2xl text-gray-300 mb-12 h-8">
          <TypewriterText
            words={["Cold Email Specialist", "Automation Expert", "Operations Strategist"]}
          />
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-row justify-center gap-3 sm:gap-4"
        >
          <MagneticButton
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
          >
            Get in Touch
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="px-6 sm:px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
          >
            View My Services
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-gray-400" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
