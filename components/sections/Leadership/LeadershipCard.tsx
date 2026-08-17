"use client";

import { CalendarDays, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import type { Leadership } from "@/types/portfolio";

interface Props {
  leadership: Leadership;
}

export default function LeadershipCard({
  leadership,
}: Props) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
        md:p-10
      "
    >
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
            LEADERSHIP ROLE
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            {leadership.role}
          </h3>

          <p className="mt-2 text-lg font-medium text-zinc-300">
            {leadership.organization}
          </p>
        </div>

        {/* Duration */}
        <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-400">
          <CalendarDays className="h-4 w-4 text-cyan-400" />

          <span>
            {leadership.duration}
          </span>
        </div>

      </div>

      {/* Responsibilities */}
      {leadership.responsibilities.length > 0 && (
        <div className="mt-8">

          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-zinc-500">
            Responsibilities
          </h4>

          <ul className="space-y-4">

            {leadership.responsibilities.map(
              (responsibility, index) => (
                <motion.li
                  key={`${responsibility}-${index}`}
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
                  <CheckCircle2
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-cyan-400
                    "
                  />

                  <span>
                    {responsibility}
                  </span>
                </motion.li>
              )
            )}

          </ul>

        </div>
      )}

      {/* Achievements */}
      {leadership.achievements.length > 0 && (
        <div className="mt-8">

          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-zinc-500">
            Key Impact
          </h4>

          <ul className="space-y-4">

            {leadership.achievements.map(
              (achievement, index) => (
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
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-7
                    text-zinc-400
                  "
                >
                  <span
                    className="
                      mt-3
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-cyan-400
                    "
                  />

                  <span>
                    {achievement}
                  </span>
                </motion.li>
              )
            )}

          </ul>

        </div>
      )}

    </article>
  );
}