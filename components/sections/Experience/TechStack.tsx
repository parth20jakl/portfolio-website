"use client";

import { motion } from "framer-motion";

interface Props {
  technologies: string[];
}

export default function TechStack({
  technologies,
}: Props) {
  return (
    <div className="mt-8">

      <h4 className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-zinc-500">
        Technologies & Skills
      </h4>

      <div className="flex flex-wrap gap-2.5">
        {technologies.map((technology) => (
          <motion.span
            key={technology}
            whileHover={{
              y: -2,
              scale: 1.04,
            }}
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-3
              py-1.5
              text-sm
              font-medium
              text-cyan-300
              transition-colors
              hover:border-cyan-400/40
              hover:bg-cyan-500/20
              hover:text-white
            "
          >
            {technology}
          </motion.span>
        ))}
      </div>

    </div>
  );
}