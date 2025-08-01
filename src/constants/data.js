import { FiDownload, FiMail, FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

export const name = "Ebad Qureshi"
export const jobTitle = "Software Engineer";
export const intro = "I build secure, maintainable, and high-performing full-stack applications.";

export const navigationLinks = [
  {
    id: "home",
    title: "Home",
    url: "#home",
  },
  {
    id: "about",
    title: "About",
    url: "#about",
  },
  {
    id: "skills",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "experience",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "projects",
    title: "Projects",
    url: "#projects",
  },
];

export const links = {
  resume: "https://www.dropbox.com/scl/fi/sy1xzyyqqfd65m9ie4e3l/Qureshi-Ebad-2025-Software-Engineer.pdf?rlkey=6pxpba6yuu8lkihzmehmjldzu&e=1&dl=0",
  email: "mailto:ebad.qureshi@outlook.com",
  github: "https://github.com/ebad8931",
  linkedin: "https://www.linkedin.com/in/ebadqureshi/",
};

export const socialLinks = [
  {
    id: "resume",
    icon: <FiDownload />,
    title: "Download Resume",
    url: links.resume,
  },
  {
    id: "email",
    icon: <FiMail />,
    title: "Email",
    url: links.email,
  },
  {
    id: "github",
    icon: <FiGithub />,
    title: "Github",
    url: links.github,
  },
  {
    id: "linkedin",
    icon: <RiLinkedinLine />,
    title: "LinkedIn",
    url: links.linkedin,
  },
];

export const skills = ["HTML", "CSS", "JavaScript", "Angular", "React", "Node.js", "Express.js", "Java", "Spring Boot", "Python", "Numpy", "Pandas", "Pytest", "Cypress", "Cucumber"];

export const projects = [
  {
    id: 1,
    title: "Drum Kit",
    desc: "Interactive drum kit that plays drum sounds when specific keys are pressed or buttons are clicked.",
    img: "",
    techs: ["HTML", "CSS", "JavaScript"],
    demo: "https://ebad8931.github.io/WebDevProjects/DrumKit/",
    code: "https://github.com/Ebad8931/WebDevProjects/tree/main/DrumKit",
  },
  {
    id: 2,
    title: "Simon Game",
    desc: "A game that tests memory by challenging users to repeat increasingly complex sequences of colors and sounds",
    img: "",
    techs: ["HTML", "CSS", "JavaScript"],
    demo: "https://ebad8931.github.io/WebDevProjects/SimonGame/",
    code: "https://github.com/Ebad8931/WebDevProjects/tree/main/SimonGame",
  }
];

export const experience = [
  {
    id: 1,
    date: "Jul 2023 - Present",
    jobTitle: "Fullstack Software Engineer",
    company: "Fidelity Investments",
    location: "Westlake, TX",
    responsibilities: [],
  },
  {
    id: 2,
    date: "Jan 2022 - Jun 2023",
    jobTitle: "Associate Software Engineer",
    company: "Fidelity Investments",
    location: "Westlake, TX",
    responsibilities: [],
  },
  {
    id: 3,
    date: "Feb 2021 - Dec 2021",
    jobTitle: "Business Analyst",
    company: "Axtria",
    location: "Berkeley Heights, NJ",
    responsibilities: [],
  },
  {
    id: 4,
    date: "Jun 2020 - Aug 2020",
    jobTitle: "Media Tech Intern",
    company: "NBC Universal Media",
    location: "Universal City, CA (Remote)",
    responsibilities: [],
  },
  {
    id: 5,
    date: "Jun 2019 - Aug 2019",
    jobTitle: "Software Development Intern",
    company: "OLI Systems",
    location: "Cedar Knolls, NJ (Now Parsippany, NJ)",
    responsibilities: [],
  }
];
