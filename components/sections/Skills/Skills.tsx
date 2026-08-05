"use client";

import { motion } from "framer-motion";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 uppercase tracking-[6px] text-cyan-400">
            SKILLS
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-cyan-400" />
        </motion.div>

        <SkillsGrid />

      </div>
    </section>
  );
}