"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundEffects from "./BackgroundEffects";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <BackgroundEffects />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left */}

        <HeroContent />

        {/* Right */}

        <HeroImage />

      </div>
      <ScrollIndicator />
    </section>
  );
}