"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      px-4
      py-2
      text-sm
      font-medium
      text-cyan-300
      transition-all
      duration-300
      ease-in-out
      hover:border-cyan-400
      hover:bg-cyan-500/20
      hover:text-white
      "
    >
      {skill}
    </motion.span>
  );
}