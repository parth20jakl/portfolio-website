import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 shadow-xl backdrop-blur-xl">

        <Logo />

        <NavLinks />

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-cyan-600"
          >
            Resume
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}