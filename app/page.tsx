import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Home/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";


export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Education />
    
    </main>
  );
}