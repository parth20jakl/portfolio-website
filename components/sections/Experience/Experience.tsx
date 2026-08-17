"use client";

import SectionHeading from "@/components/common/SectionHeading";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionHeading
          subtitle="EXPERIENCE"
          title="Professional Experience"
          description="Internships and industry experiences that strengthened my technical expertise, business understanding, analytical thinking, and collaborative problem-solving skills."
        />

        <ExperienceTimeline />

      </div>
    </section>
  );
}