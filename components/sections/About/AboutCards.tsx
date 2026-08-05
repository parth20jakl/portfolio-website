"use client";

import AboutCard from "./AboutCard";

const cards = [
  {
    title: "Artificial Intelligence",

    description:
      "Building intelligent systems using Machine Learning, Deep Learning, and Generative AI.",

    icon: "🤖",
  },

  {
    title: "Machine Learning",

    description:
      "Developing predictive models and scalable AI pipelines.",

    icon: "🧠",
  },

  {
    title: "Computer Vision",

    description:
      "Image processing, gesture recognition, and real-time AI applications.",

    icon: "👁️",
  },

  {
    title: "Data Analytics",

    description:
      "Transforming raw datasets into actionable business insights.",

    icon: "📊",
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">

      {cards.map((card) => (

        <AboutCard
          key={card.title}
          {...card}
        />

      ))}

    </div>
  );
}