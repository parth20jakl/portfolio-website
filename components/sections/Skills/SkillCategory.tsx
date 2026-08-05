"use client";

import { motion } from "framer-motion";

import { SkillCategory as SkillCategoryType } from "@/types/portfolio";

import SkillBadge from "./SkillBadge";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: Props) {
  return (
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
        duration: 0.6,
      }}
      whileHover={{
        y: -6,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-cyan-400/20
      hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >
      <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold">

        <span className="h-3 w-3 rounded-full bg-cyan-400" />
        <span>{category.title}</span>
        
      </h3>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  );
}