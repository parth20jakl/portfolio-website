"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "8+",
    label: "Projects",
  },
  {
    value: "2",
    label: "Internships",
  },
  {
    value: "3",
    label: "Leadership Roles",
  },
  {
    value: "8.77",
    label: "CGPA",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">

      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {stat.label}
          </p>
        </motion.div>
      ))}

    </div>
  );
}