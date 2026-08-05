"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      className="
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      px-3
      py-1.5
      text-sm
      text-cyan-300
      transition-all
      duration-300
      hover:border-cyan-400
      hover:bg-cyan-500/20
      "
    >
      {tech}
    </motion.span>
  );
}