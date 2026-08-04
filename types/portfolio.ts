export interface Hero {
  name: string;
  roles: string[];
  summary: string;
  resume: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  leetcode: string;
}

export interface About {
  title: string;
  description: string[];
  passions: string[];
  currentFocus: string[];
  careerObjective: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  college: string;
  degree: string;
  branch: string;
  university: string;
  duration: string;
  cgpa: string;
  honours: string;
  coursework: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Leadership {
  organization: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
}

export interface Certification {
  title: string;
  organization: string;
  issueDate: string;
  credential: string;
}

export interface ResearchInterest {
  title: string;
}

export interface Achievement {
  title: string;
  description: string;
}