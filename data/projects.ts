import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Multi-Agent Customer Support System",

    shortDescription:
      "AI-powered multi-agent customer support platform using local LLMs and Retrieval-Augmented Generation.",

    description:
      "Designed and developed a production-ready multi-agent customer support platform that utilizes LangGraph, LangChain, FAISS, Ollama, and Llama 3.1 for intelligent document understanding, semantic retrieval, and context-aware responses. The application supports PDF ingestion, REST APIs, verification agents, and local LLM inference.",

    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "FAISS",
      "Ollama",
      "Llama 3.1",
      "Docker",
      "Git"
    ],

    github: "",

    demo: "",

    image: "/images/projects/multi-agent.png",

    featured: true
  },

  {
    title: "Community Hero",

    shortDescription:
      "AI-powered civic issue reporting platform.",

    description:
      "Developed during a hackathon, Community Hero enables users to report local civic issues using AI-based categorization, geotagging, analytics dashboards, and community verification.",

    techStack: [
      "Next.js",
      "React",
      "Firebase",
      "Google Maps",
      "AI"
    ],

    github: "",

    demo: "",

    image: "/images/projects/community-hero.png",

    featured: true
  },

  {
    title: "Gesture-Based Real-Time Voice Modulation System",

    shortDescription:
      "Control voice modulation using hand gestures.",

    description:
      "A Computer Vision application that detects hand gestures using MediaPipe and OpenCV to perform real-time voice modulation using Digital Signal Processing.",

    techStack: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "TensorFlow Lite",
      "PyAudio",
      "SoundDevice"
    ],

    github: "",

    demo: "",

    image: "/images/projects/voice-modulation.png",

    featured: true
  },

  {
    title: "Face Recognition Attendance System",

    shortDescription:
      "Automated attendance using facial recognition.",

    description:
      "Implemented a real-time attendance management system using OpenCV capable of detecting and recognizing faces while maintaining attendance logs.",

    techStack: [
      "Python",
      "OpenCV",
      "NumPy"
    ],

    github: "",

    demo: "",

    image: "/images/projects/attendance.png",

    featured: false
  },

  {
    title: "AI Chatbot using Gemini API",

    shortDescription:
      "Conversational AI chatbot powered by Google Gemini.",

    description:
      "Developed an interactive chatbot using Google Gemini API and Streamlit supporting prompt engineering and conversational AI workflows.",

    techStack: [
      "Python",
      "Streamlit",
      "Gemini API",
      "LangChain"
    ],

    github: "",

    demo: "",

    image: "/images/projects/chatbot.png",

    featured: false
  },

  {
    title: "ESP32 Firebase IoT Monitoring System",

    shortDescription:
      "IoT dashboard for real-time environmental monitoring.",

    description:
      "Built an IoT monitoring system using ESP32 and Firebase to collect and visualize temperature and humidity data from DHT11 sensors.",

    techStack: [
      "ESP32",
      "Firebase",
      "Arduino IDE",
      "DHT11"
    ],

    github: "",

    demo: "",

    image: "/images/projects/iot.png",

    featured: false
  },

  {
    title: "Sentiment Analysis Dashboard",

    shortDescription:
      "Machine Learning dashboard for sentiment analysis.",

    description:
      "Developed a sentiment classification dashboard using Machine Learning and interactive visualizations for trend analysis.",

    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib"
    ],

    github: "",

    demo: "",

    image: "/images/projects/sentiment.png",

    featured: false
  },

  {
    title: "AI Portfolio Website",

    shortDescription:
      "Personal AI portfolio built using Next.js.",

    description:
      "Responsive portfolio website showcasing projects, experience, leadership, certifications, and AI journey using Next.js, TypeScript, and Tailwind CSS.",

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],

    github: "",

    demo: "",

    image: "/images/projects/portfolio.png",

    featured: false
  }
];