import { BsWhatsapp } from "react-icons/bs";
import project1 from "../assets/projects/kicks.png";
import project2 from "../assets/projects/conn2.png";
import project3 from "../assets/projects/dropex.png";
import project4 from "../assets/projects/baraka.png";

export const HERO_CONTENT = `A passionate developer with a solid foundation in modern front-end technologies including React, Tailwind CSS, and Next.js. I’m actively learning and building my proficiency in back-end tools like Node.js, MySQL, and PostgreSQL to become a well-rounded full-stack developer capable of delivering impactful digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a passion for building efficient, user-focused, and visually engaging web applications. My journey in web development started with a deep curiosity about how technology connects people and ideas — a curiosity that has grown into a career centered on continuous learning and problem-solving.

I bring a solid foundation in front-end technologies such as React, Next.js, and Tailwind CSS, complemented by growing expertise in back-end development using Node.js, MySQL, PostgreSQL, and MongoDB. I’ve worked on diverse projects, including a conference management app for Strathmore University, a tourism website designed to inspire travel experiences, a shoe e-commerce platform, and a dropshipping website that streamlines online retail processes.
`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "App Developer",
    company: "Strathmore Conference App",
    description: `Developed a mobile-friendly conference management application for event attendees. Features included session schedules, speaker profiles, and live updates to improve event experience.`,
    technologies: ["React", "Flutter", "Firebase", "PWA"],
  },
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Retrosoft Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
  },
  {
    year: "2023 - Present",
    role: "IT Specialist",
    company: "RetroWorld Studios Inc.",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    year: "2021",
    role: "Freelance Web Developer",
    company: "KicksByKigga",
    description: `Designed and developed a responsive e-commerce website for a local shoe retailer. Implemented product catalog and contact methods.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "KicksByKigga E-commerce",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing and contact integration for easy order management.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://kigga.vercel.app/",
  },
  {
    title: "Strathmore Conference App",
    image: project2,
    description:
      "A mobile-friendly conference management application for Strathmore University attendees, providing schedules, speaker profiles, and real-time updates.",
    technologies: ["React", "Expo", "Flutter", "Firebase"],
    link: "https://strath-conference-web.vercel.app/",
  },
  {
    title: "DropEx",
    image: project3,
    description:
      "A tech-driven logistics platform that streamlines delivery operations and enhances efficiency through innovative technology solutions.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://dropexlogistics.com/",
  },
  {
    title: "Baraka Trails",
    image: project4,
    description:
      "A travel and tour website offering curated experiences, seamless booking, and personalized itineraries to explore breathtaking destinations.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://baraka-trails.vercel.app",
  },
];

export const CONTACT = {
  phoneNo: "+254-714-252-464",
  email: "calebkiamba9@gmail.com",
};
