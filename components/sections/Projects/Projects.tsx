"use client";

import SectionHeading from "@/components/common/SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionHeading
          subtitle="FEATURED WORK"
          title="Projects That Define My Journey"
          description="A collection of Artificial Intelligence, Machine Learning, Computer Vision and Full Stack projects built through academics, internships and self-learning."
        />

        <FeaturedProject />

        <ProjectGrid />

      </div>
    </section>
  );
}