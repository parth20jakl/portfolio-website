"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Top Left Blur */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute left-[-120px] top-[-80px] h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Bottom Right Blur */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-[-120px] right-[-120px] h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[170px]"
      />
        <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
            backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
        }}
        />
        
      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

    </div>
  );
}