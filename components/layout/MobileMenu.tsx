"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-white/10 bg-[#0B1120]/95 backdrop-blur-xl">

          <div className="flex flex-col gap-6 p-8">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex items-center justify-between">

              <ThemeToggle />

              <a
                href="/resume/AI_Engineer_Resume.pdf"
                target="_blank"
              >
                <Button>
                  Resume
                </Button>
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}