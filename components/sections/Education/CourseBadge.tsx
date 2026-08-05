"use client";

import { motion } from "framer-motion";

interface CourseBadgeProps {
  title: string;
}

export default function CourseBadge({
  title,
}: CourseBadgeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
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
      hover:border-cyan-400
      hover:bg-cyan-500/20
      hover:text-white
      "
    >
      {title}
    </motion.div>
  );
}