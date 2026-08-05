"use client";

import { about } from "@/data";
import FocusBadge from "./FocusBadge";

export default function AboutHighlights() {
  return (
    <div className="mt-12">

      <h3 className="mb-6 text-2xl font-semibold">
        Current Focus
      </h3>

      <div className="flex flex-wrap gap-3">

        {about.currentFocus.map((item) => (
          <FocusBadge
            key={item}
            title={item}
          />
        ))}

      </div>

      <div className="mt-10">

        <h3 className="mb-5 text-2xl font-semibold">
          Passion Areas
        </h3>

        <div className="flex flex-wrap gap-3">

          {about.passions.map((item) => (
            <FocusBadge
              key={item}
              title={item}
            />
          ))}

        </div>

      </div>

    </div>
  );
}