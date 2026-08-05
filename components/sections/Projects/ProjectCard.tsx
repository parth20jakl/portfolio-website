"use client";

import Image from "next/image";

import { Project } from "@/types/portfolio";
import { motion } from "framer-motion";
import ProjectButtons from "./ProjectButtons";
import TechBadge from "./TechBadge";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{
        opacity: 0,
        y: 40,
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
      <div className="group relative h-56 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
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

    </ motion.div>
  );
}