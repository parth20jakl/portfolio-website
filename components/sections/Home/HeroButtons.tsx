"use client";

import { Button } from "@/components/ui/button";
import { hero } from "@/data";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <a
        href={hero.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-cyan-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-600"
      >
        Download Resume
      </a>

      <a
        href="#contact"
        className="inline-flex rounded-full border border-cyan-500 bg-transparent px-8 py-3 text-sm font-medium text-cyan-500 transition-colors hover:bg-cyan-500 hover:text-white"
      >
        Contact Me
      </a>
    </div>
  );
}