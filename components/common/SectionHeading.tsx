"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      className={`mb-16 ${
        center ? "text-center" : "text-left"
      }`}
    >
      {/* Subtitle */}

      <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
        {subtitle}
      </p>

      {/* Main Title */}

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {/* Divider */}

      <div
        className={`mt-6 h-1 w-24 rounded-full bg-cyan-400 ${
          center ? "mx-auto" : ""
        }`}
      />

      {/* Description */}

      {description && (
        <p className="mx-auto mt-8 max-w-3xl leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}