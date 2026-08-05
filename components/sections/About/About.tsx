"use client";

import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";
import SectionHeading from "@/components/common/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}

    <SectionHeading
        subtitle="ABOUT ME"
        title="Passion Meets Intelligence"
        description="Driven by curiosity and innovation, I specialize in building intelligent systems that solve real-world problems using AI and modern software technologies."
    />
        <div className="grid items-start gap-16 lg:grid-cols-2">

          <AboutContent />

          <AboutCards />

        </div>

      </div>
    </section>
  );
} 