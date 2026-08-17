"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex justify-center"
    >
      {/* Glow */}

      <div className="absolute h-[340px] w-[340px] rounded-full bg-cyan-500/20 blur-[90px]" />

      {/* Ring */}

      <div className="absolute h-[340px] w-[340px] rounded-full border border-cyan-400/20" />

      {/* Image */}

      <div className="relative overflow-hidden rounded-full border-4 border-cyan-500/40 shadow-2xl">

        <Image
          src="/images/profile.JPG"
          alt="Parth Kulkarni"
          width={320}
          height={320}
          priority
          className="rounded-full object-cover"
        />

      </div>

    </motion.div>
  );
}