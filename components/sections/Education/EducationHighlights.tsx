"use client";

import { GraduationCap, Medal, BookOpen, Award } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "CGPA",
    value: "8.77",
  },
  {
    icon: Award,
    title: "Honours",
    value: "Machine Learning",
  },
  {
    icon: Medal,
    title: "Degree",
    value: "B.E.",
  },
  {
    icon: BookOpen,
    title: "University",
    value: "SPPU",
  },
];

export default function EducationHighlights() {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:-translate-y-2
            "
          >
            <Icon className="mb-5 h-8 w-8 text-cyan-400" />

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}