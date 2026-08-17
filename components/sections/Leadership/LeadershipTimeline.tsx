"use client";

import { motion } from "framer-motion";
import { leadership } from "@/data";

import LeadershipCard from "./LeadershipCard";

export default function LeadershipTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">

      {/* Vertical Timeline Line */}
      <div
        className="
          absolute
          left-5
          top-0
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-cyan-400/70
          via-cyan-400/30
          to-transparent
          md:block
        "
      />

      <div className="space-y-12">

        {leadership.map((item, index) => (
          <motion.div
            key={`${item.organization}-${item.role}`}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative md:pl-16"
          >

            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-0
                top-8
                hidden
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/30
                bg-[#0b1120]
                md:flex
              "
            >
              <div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_15px_rgba(34,211,238,0.7)]
                "
              />
            </div>

            <LeadershipCard
              leadership={item}
            />

          </motion.div>
        ))}

      </div>

    </div>
  );
}