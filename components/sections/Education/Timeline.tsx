"use client";

import { CalendarDays, GraduationCap } from "lucide-react";
import { education } from "@/data";

export default function Timeline() {
  return (
    <div className="mt-12">

      <div className="flex items-start gap-6">

        {/* Timeline Line */}

        <div className="flex flex-col items-center">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">

            <GraduationCap className="h-6 w-6 text-cyan-400" />

          </div>

          <div className="mt-2 h-32 w-[2px] bg-cyan-500/30" />

        </div>

        {/* Content */}

        <div className="pb-10">

          <div className="flex items-center gap-2 text-cyan-400">

            <CalendarDays className="h-5 w-5" />

            <span>{education.duration}</span>

          </div>

          <h3 className="mt-3 text-2xl font-bold">
            {education.degree}
          </h3>

          <p className="mt-2 text-zinc-400">
            {education.college}
          </p>

          <p className="mt-1 text-zinc-500">
            {education.branch}
          </p>

        </div>

      </div>

    </div>
  );
}