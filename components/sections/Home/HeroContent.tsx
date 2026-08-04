"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { hero } from "@/data";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="max-w-3xl"
    >
      <p className="mb-4 text-lg font-medium text-cyan-400">
        Hello, I'm
      </p>

      <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
        {hero.name}
      </h1>

      <div className="mt-5 text-2xl font-semibold text-zinc-300 md:text-4xl">
        <TypeAnimation
          sequence={[
            ...hero.roles.flatMap((role) => [role, 2000]),
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        {hero.summary}
      </p>

      <HeroButtons />

      <HeroSocials />
    </motion.div>
  );
}