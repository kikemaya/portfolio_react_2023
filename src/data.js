//  icons
import { FiLinkedin, FiGithub, FiMail, FiMapPin } from "react-icons/fi";

// companies icons
import AcatlanIcon from "./assets/img/brands/acatlan.png";
import DevF from "./assets/img/brands/devf.png";
import Epam from "./assets/img/brands/epam.svg";

// projects images
// import Project1 from './assets/img/projects/p1.webp';
// import Project2 from './assets/img/projects/p2.webp';
// import Project3 from './assets/img/projects/p3.webp';
// import Project4 from './assets/img/projects/p4.webp';
// import Project5 from './assets/img/projects/p5.webp';
// import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nodejs.png";
import SkillImg6 from "./assets/img/skills/mongo.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  // {
  //   name: 'portfolio',
  //   href: 'portfolio',
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/enrique-maya-8407a4216/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/kikemaya",
  },
];

// companies
export const brands = [
  {
    img: AcatlanIcon,
    href: "https://www.acatlan.unam.mx/index.php?id=13",
    alt: "Fes Acatlan logo",
  },
  {
    img: DevF,
    href: "https://www.devf.la/",
    alt: "DEV.F logo",
  },
  {
    img: Epam,
    href: "https://www.epam.com/",
    alt: "EPAM Systems logo",
  },
];

// projects
// export const projectsData = [
//   {
//     id: '1',
//     image: Project1,
//     name: 'To do',
//     // category: 'UI/UX design',
//   },
//   {
//     id: '2',
//     image: Project2,
//     name: 'Weather Api',
//     // category: 'web development',
//   },
//   {
//     id: '3',
//     image: Project3,
//     name: 'Contact List',
//     // category: 'UI/UX design',
//   },
//   {
//     id: '4',
//     image: Project4,
//     name: 'Quiz',
//     // category: 'branding',
//   },
//   {
//     id: '5',
//     image: Project5,
//     name: 'Rock Paper Scissors',
//     // category: 'web development',
//   },
//   {
//     id: '6',
//     image: Project6,
//     name: 'Memory Game',
//     // category: 'web development',
//   },
// ];

// skills
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Do you have any questions?",
    subtitle: "I am here to help you.",
    description: "Email me with the form or by social media, please.",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Mexico City, Mexico.",
    description: "Working from 🏠.",
  },
];
