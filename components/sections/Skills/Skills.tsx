"use client";

import { motion } from "framer-motion";
import SkillsGrid from "./SkillsGrid";
import SectionHeading from "@/components/common/SectionHeading";

export default function Skills() {
  return (
    <section
        id="skills"
        className="relative overflow-hidden py-32"
    >
        {/* Decorative Background */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[170px]" />
      
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <SectionHeading
          subtitle="TECHNICAL EXPERTISE"
          title="Technologies & Skills"
          description="A comprehensive toolkit built through academic learning, internships, and real-world projects in Artificial Intelligence, Machine Learning, and Full Stack Development."
        />
        
        <SkillsGrid />

        <div className="mt-20 text-center">

        <p className="mx-auto max-w-2xl text-zinc-400">

            I continuously explore new technologies and frameworks,
            with a strong focus on Artificial Intelligence,
            Machine Learning, Generative AI, and scalable software development.

        </p>

        </div>

      </div>
    </section>
  );
}