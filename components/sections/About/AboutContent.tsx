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
      <AboutHighlights />

      <AboutStats />

    </div>
  );
}