"use client";

import Image from "next/image";

import { Project } from "@/types/portfolio";

import ProjectButtons from "./ProjectButtons";
import TechBadge from "./TechBadge";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-400/30
      hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]
      "
    >

      <div className="relative h-56">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold">

          {project.title}

        </h3>

        <p className="mt-4 leading-7 text-zinc-400">

          {project.description}

        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.techStack.map((tech) => (

            <TechBadge
              key={tech}
              tech={tech}
            />

          ))}

        </div>

        <ProjectButtons
          github={project.github}
          demo={project.demo}
        />

      </div>

    </div>
  );
}