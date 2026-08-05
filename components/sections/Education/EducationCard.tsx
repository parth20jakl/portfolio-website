"use client";

import { education } from "@/data";

import CourseBadge from "./CourseBadge";

export default function EducationCard() {
  return (
    <div
        className="
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/5
        to-white/[0.02]
        backdrop-blur-xl
        p-10
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]
      "
    >

      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

        {/* Left */}

        <div className="space-y-5">

          <h2 className="text-3xl font-bold leading-tight">
            {education.college}
          </h2>

          <p className="text-lg font-semibold text-cyan-400">
            {education.degree}
          </p>

          <p className="text-zinc-400">
            {education.branch}
          </p>

          <div className="space-y-3 pt-6">

            <p>
              <span className="font-semibold">
                University :
              </span>{" "}
              {education.university}
            </p>

            <p>
              <span className="font-semibold">
                Duration :
              </span>{" "}
              {education.duration}
            </p>

            <p>
              <span className="font-semibold">
                CGPA :
              </span>{" "}
              {education.cgpa}
            </p>

            <p>
              <span className="font-semibold">
                Honours :
              </span>{" "}
              {education.honours}
            </p>
            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            
          </div>

        </div>

        {/* Right */}

        <div className="max-w-xl">

          <h3 className="mb-6 text-xl font-semibold">

            Relevant Coursework

          </h3>

          <div className="flex flex-wrap gap-3">

            {education.coursework.map((course) => (

              <CourseBadge
                key={course}
                title={course}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}