import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          Parth<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-blue-500 transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button>Resume</Button>
        </div>
      </div>
    </nav>
  );
}