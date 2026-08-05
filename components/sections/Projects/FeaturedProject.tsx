"use client";

import { projects } from "@/data";

import Image from "next/image";

import ProjectButtons from "./ProjectButtons";

import TechBadge from "./TechBadge";

export default function FeaturedProject() {

  const featured = projects.find(
    (project) => project.featured
  );

  if (!featured) return null;

  return (
    <div
      className="
      mb-24
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      "
    >

      <div className="grid items-center lg:grid-cols-2">

        {/* Image */}

        <div className="relative min-h-[350px]">

          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
          />

        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-10">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">

            Featured Project

          </p>

          <h2 className="mt-4 text-4xl font-bold">

            {featured.title}

          </h2>

          <p className="mt-6 leading-8 text-zinc-400">

            {featured.description}

          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {featured.techStack.map((tech) => (

              <TechBadge
                key={tech}
                tech={tech}
              />

            ))}

          </div>

          <ProjectButtons
            github={featured.github}
            demo={featured.demo}
          />

        </div>

      </div>

    </div>
  );
}