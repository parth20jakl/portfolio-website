"use client";

import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-16 lg:grid-cols-2"
        >

          <AboutContent />

          <AboutCards />

        </motion.div>

      </div>
    </section>
  );
}