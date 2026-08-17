"use client";

import SectionHeading from "@/components/common/SectionHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Dot Pattern */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionHeading
          subtitle="GET IN TOUCH"
          title="Let's Build Something Amazing"
          description="I'm always open to discussing AI, Machine Learning, internships, collaborations, or exciting opportunities."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}