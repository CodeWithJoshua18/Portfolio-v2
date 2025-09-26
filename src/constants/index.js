import { BsWhatsapp } from "react-icons/bs";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I am honing my skills in front-end technologies like React,Tailwind.css, and Next.js as well as back-end technologies like Node.js, MySQL, and Postgresql. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    role: " Full Stack Developer",
    company: "Retrosoft Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023 - Present",
    role: "IT Specialist",
    company: "RetroWorld Studios Inc.",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
 {
  year: "2021",
  role: "Freelance Web Developer",
  company: "KicksByKigga",
  description: `Designed and developed a responsive e-commerce website for a local shoe retailer. Implemented product catalog and Contact Methods.`,
  technologies: ["HTML", "CSS", "JavaScript"],
},
];

export const PROJECTS = [
  {
    title: "KicksByKigga E-commerce",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: " Strathmore Conference App",
    image: project2,
    description:
      "Developed a mobile-friendly conference management application for Strathmore University attendees. The app was designed to streamline the event experience by providing access to session schedules, speaker profiles, and real-time updates, ensuring participants could easily navigate the conference.",
    technologies: ["React", "EXpo", "Flutter", "Firebase"],
  },
  {
    title: "DropEx",
    image: project3,
    description:
      "A Tech-Driven logistics startup taht streamlines operations and enhances delivery efficiency through innovative technology solutions.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Chef-Claude",
    image: project4,
    description:
      "Chef Claude helps people make the most of what they already have at home. By listing your available ingredients, the app uses AI to generate creative and practical recipe ideas—making cooking easier, reducing food waste, and inspiring new meals.",
    technologies: ["React", "CSS", "Claude-AI"],
  },
];

export const CONTACT = {
  phoneNo: "+254-714-252-464 ",
  email: "calebkiamba9@gmail.com",
};
