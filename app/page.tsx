import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Home/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      <Hero />

      <About />

      <Skills />
    
    </main>
  );
}