import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Home/Home";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      <Hero />
    </main>
  );
}