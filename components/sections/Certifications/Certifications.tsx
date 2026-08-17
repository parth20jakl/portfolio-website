"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import CertificationCard from "./CertificationCard";
import { certifications } from "@/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionHeading
          subtitle="CERTIFICATIONS"
          title="Continuous Learning"
          description="Certifications and learning experiences that complement my academic background and strengthen my technical and professional skills."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.div
              key={`${certification.title}-${index}`}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <CertificationCard
                certification={certification}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}