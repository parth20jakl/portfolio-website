"use client";

import { projects } from "@/data";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const normalProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <div className="grid gap-8 md:grid-cols-2">

      {normalProjects.map((project) => (

        <ProjectCard
          key={project.title}
          project={project}
        />

      ))}

    </div>
  );
}