"use client";

import SectionHeading from "@/components/common/SectionHeading";
import LeadershipTimeline from "./LeadershipTimeline";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Dot Pattern */}
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
          subtitle="LEADERSHIP"
          title="Leading Beyond Code"
          description="Building communities, managing teams, organizing events, and creating impact through leadership roles in technical and cultural organizations."
        />

        <LeadershipTimeline />

      </div>
    </section>
  );
}