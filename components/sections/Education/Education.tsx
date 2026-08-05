"use client";

import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import Timeline from "./Timeline";
import SectionHeading from "@/components/common/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

       <SectionHeading
            subtitle="EDUCATION"
            title="Academic Journey"
            description="Building a strong foundation in Artificial Intelligence and Data Science through rigorous academics, practical projects, and continuous learning."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="space-y-10">

            <EducationCard />

            <Timeline />

            </div>
        </motion.div>

      </div>
    </section>
  );
}