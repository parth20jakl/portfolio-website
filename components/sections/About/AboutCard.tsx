"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function AboutCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <motion.div

      whileHover={{
        y: -10,
        scale: 1.03,
    }}
      className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
    >

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-4xl">
        {icon}

      </div>

      <h3 className="mt-8 text-xl font-semibold">

        {title}

      </h3>

      <p className="mt-5 leading-8 text-zinc-400">

        {description}

      </p>

    </motion.div>
  );
}