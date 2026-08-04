"use client";

import { navigation } from "@/constants/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import clsx from "clsx";

export default function NavLinks() {
  const active = useActiveSection();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const id = item.href.replace("#", "");

        return (
          <a
            key={item.name}
            href={item.href}
            className={clsx(
              "transition duration-300",
              active === id
                ? "text-cyan-400"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}