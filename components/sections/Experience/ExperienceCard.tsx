"use client";

import { CalendarDays, MapPin } from "lucide-react";
import type { Experience } from "@/types/portfolio";

import TechStack from "./TechStack";
import AchievementList from "./AchievementList";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
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
            INTERNSHIP
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            {experience.role}
          </h3>

          <p className="mt-2 text-lg font-medium text-zinc-300">
            {experience.company}
          </p>
        </div>

        {/* Duration */}
        <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-400">
          <CalendarDays className="h-4 w-4 text-cyan-400" />

          <span>
            {experience.duration}
          </span>
        </div>
      </div>

      {/* Location */}
      {experience.location && (
        <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
          <MapPin className="h-4 w-4" />

          <span>
            {experience.location}
          </span>
        </div>
      )}

      {/* Responsibilities */}
      {experience.responsibilities &&
        experience.responsibilities.length > 0 && (
          <div className="mt-8">

            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-zinc-500">
              Responsibilities
            </h4>

            <ul className="space-y-3">

              {experience.responsibilities.map(
                (responsibility, index) => (
                  <li
                    key={`${responsibility}-${index}`}
                    className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                    <span>
                      {responsibility}
                    </span>
                  </li>
                )
              )}

            </ul>

          </div>
        )}

      {/* Achievements */}
      {experience.achievements &&
        experience.achievements.length > 0 && (
          <AchievementList
            achievements={experience.achievements}
          />
        )}

      {/* Technologies */}
      {experience.technologies &&
        experience.technologies.length > 0 && (
          <TechStack
            technologies={experience.technologies}
          />
        )}

    </article>
  );
}