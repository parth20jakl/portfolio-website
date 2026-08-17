"use client";

import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/types/portfolio";

interface Props {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: Props) {
  return (
    <article
      className="
        group
        h-full
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >
      {/* Icon + Credential */}
      <div className="flex items-start justify-between gap-4">

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10
            text-cyan-400
          "
        >
          <Award className="h-6 w-6" />
        </div>

        {certification.credential && (
          <a
            href={certification.credential}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certification.title} credential`}
            className="
              rounded-full
              border
              border-white/10
              p-2
              text-zinc-400
              transition
              hover:border-cyan-400/30
              hover:text-cyan-400
            "
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

      </div>

      {/* Certification Title */}
      <h3 className="mt-7 text-xl font-semibold leading-8">
        {certification.title}
      </h3>

      {/* Organization */}
      <p className="mt-3 text-sm font-medium text-cyan-400">
        {certification.organization}
      </p>

      {/* Issue Date */}
      <p className="mt-2 text-sm text-zinc-500">
        Issued: {certification.issueDate}
      </p>

      {/* Credential Status */}
      {certification.credential ? (
        <p className="mt-5 text-sm text-zinc-400">
          Credential available
        </p>
      ) : (
        <p className="mt-5 text-sm text-zinc-500">
          Credential link will be added
        </p>
      )}

    </article>
  );
}