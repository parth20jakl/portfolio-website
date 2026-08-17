"use client";

import {
  Mail,
  Phone,
  MapPin,
  Link,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "parthjskulkarni18@gmail.com",
    href: "mailto:parthjskulkarni18@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 92846 32084",
    href: "tel:+919284632084",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/parth-kulkarni-22466628a/",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com/parth20jakl/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">

      <div className="mb-8">

        <h3 className="text-2xl font-semibold">
          Let's Connect
        </h3>

        <p className="mt-4 max-w-lg leading-8 text-zinc-400">
          Whether you have an opportunity, a project idea,
          or simply want to discuss technology and AI,
          feel free to reach out.
        </p>

      </div>

      {contactItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.label}
            href={item.href}
            target={
              item.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              item.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:bg-cyan-500/5
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-500/10
                text-cyan-400
              "
            >
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0">

              <p className="text-sm text-zinc-500">
                {item.label}
              </p>

              <p className="mt-1 truncate font-medium text-zinc-200">
                {item.value}
              </p>

            </div>

          </motion.a>
        );
      })}

    </div>
  );
}