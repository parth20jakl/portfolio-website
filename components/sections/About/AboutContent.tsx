"use client";

import { about } from "@/data";

import AboutStatus from "./AboutStatus";
import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";

export default function AboutContent() {
  return (
    <div>

      <h2 className="text-5xl font-bold leading-tight">

        Architecting

        <br />

        <span className="text-cyan-400">

          Intelligence.

        </span>

      </h2>

      <div className="mt-10 space-y-8">

        {about.description.map((paragraph, index) => (

          <p
            key={index}
            className="leading-8 text-zinc-400"
          >
            {paragraph}
          </p>

        ))}

      </div>

      <AboutStatus />
      
      <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <h3 className="mb-5 text-2xl font-semibold">

          Career Objective

        </h3>

        <p className="leading-8 text-zinc-400">

          {about.careerObjective}

        </p>

      </div>

      <AboutHighlights />

      <AboutStats />

    </div>
  );
}