"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#about">
        <ChevronDown
          className="h-8 w-8 text-cyan-400"
        />
      </a>
    </motion.div>
  );
}