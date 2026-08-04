"use client";

import { socials } from "@/data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function HeroSocials() {
  return (
    <div className="mt-10 flex items-center gap-5">

      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 p-3 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <FaGithub />
      </a>

      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 p-3 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <FaLinkedin />
      </a>

      <a
        href={`mailto:${socials.email}`}
        className="rounded-full border border-white/10 p-3 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}