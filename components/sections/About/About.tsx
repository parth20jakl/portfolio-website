"use client";

import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Passion Meets Intelligence
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-cyan-400" />
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-2">

          <AboutContent />

          <AboutCards />

        </div>

      </div>
    </section>
  );
} 