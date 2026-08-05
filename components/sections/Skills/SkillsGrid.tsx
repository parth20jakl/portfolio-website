"use client";

import { skills } from "@/data";

import SkillCategory from "./SkillCategory";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">

      {skills.map((category) => (

        <SkillCategory
          key={category.title}
          category={category}
        />

      ))}

    </div>
  );
}