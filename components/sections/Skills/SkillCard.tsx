"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
}

export default function SkillCard({
  title,
  children,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut"
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        hover:border-cyan-400/30
        hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]
      "
    >
      <h3 className="mb-6 text-2xl font-semibold">
        {title}
      </h3>

      {children}
    </motion.div>
  );
}