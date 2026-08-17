"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  achievements: string[];
}

export default function AchievementList({
  achievements,
}: Props) {
  return (
    <div className="mt-8">

      <h4 className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-zinc-500">
        Key Contributions
      </h4>

      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.li
            key={`${achievement}-${index}`}
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
          >
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />

            <span>{achievement}</span>
          </motion.li>
        ))}
      </ul>

    </div>
  );
}