"use client";

import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import Timeline from "./Timeline";
import EducationHighlights from "./EducationHighlights";
import SectionHeading from "@/components/common/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[180px]" />

       <SectionHeading
            subtitle="EDUCATION"
            title="Academic Journey"
            description="Building a strong foundation in Artificial Intelligence and Data Science through rigorous academics, practical projects, and continuous learning."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="space-y-10">

            <EducationCard />

            <Timeline />

            <EducationHighlights />
        
                <div className="mx-auto mt-20 max-w-3xl text-center">

                    <p className="leading-8 text-zinc-400">

                        My academic journey has provided me with a strong
                        foundation in Artificial Intelligence, Machine Learning,
                        Data Science, and Software Engineering while encouraging
                        practical implementation through projects, internships,
                        leadership, and continuous learning.

                    </p>

                </div>

            </div>
        </motion.div>
    </section>
  );
}