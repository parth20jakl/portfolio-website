import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Home/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";   
import Experience from "@/components/sections/Experience"; 
import Leadership from "@/components/sections/Leadership";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Education />

      <Projects />

      <Experience />

      <Leadership />

      <Certifications />

      <Contact />

    </main>
  );
}