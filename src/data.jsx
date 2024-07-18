//  icons
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

// companies icons
import AcatlanIcon from "./assets/img/brands/acatlan.png";
import DevF from "./assets/img/brands/devf.png";
import Epam from "./assets/img/brands/epam.svg";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg6 from "./assets/img/skills/firebase.png";
import SkillImg7 from "./assets/img/skills/gcp-logo.png";
import SkillImg8 from "./assets/img/skills/git.png";
// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg5 from "./assets/img/skills/nodejs.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";

// navigation
export const navigation = [
	{
		id: "a578e3e1-406d-4b8d-bead-e2b47a83c196",
		name: "home",
		href: "home",
	},
	{
		id: "42d277b4-5814-4f80-8cd0-e1afb61d4216",
		name: "about",
		href: "about",
	},
	{
		id: "d937e545-d9b4-4d16-b976-550606fa9c6a",
		name: "portfolio",
		href: "portfolio",
	},
	// {
	//   id: "d8b236e7-80be-451c-82d5-e6e2fe3bc373",
	//   name: "blog",
	//   href: "blog",
	// },
	{
		id: "2d5c0480-beb6-46be-8da3-d20a9e8bdc58",
		name: "contact",
		href: "contact",
	},
];

// social
export const social = [
	{
		id: "94f12cd5-d274-4d9b-bf28-f9382b37a00b",
		icon: <FiLinkedin />,
		href: "https://www.linkedin.com/in/enrique-maya-8407a4216/",
	},
	{
		id: "19afaa2e-5224-4c47-82f4-4a68922f7ca7",
		icon: <FiGithub />,
		href: "https://github.com/kikemaya",
	},
];

// companies
export const brands = [
	{
		id: "ba471395-b32a-493e-8029-f7ed9b6eb24c",
		img: AcatlanIcon,
		href: "https://www.acatlan.unam.mx/index.php?id=13",
		alt: "Fes Acatlan logo",
	},
	{
		id: "dc1bd048-8270-4809-bc24-af1cf9336eb9",
		img: DevF,
		href: "https://www.devf.la/",
		alt: "DEV.F logo",
	},
	{
		id: "340557ac-27d6-4d26-8d82-68a5f4aa01ae",
		img: Epam,
		href: "https://www.epam.com/",
		alt: "EPAM Systems logo",
	},
];

// projects;
export const projectsData = [
	{
		id: "9b326b89-283d-47f3-a0ae-a40ca9fc0a79",
		image: Project1,
		name: "To do list",
		category: "Web development",
		href: "https://todo-1048e.web.app/",
		description: "My first todo list made with react and localstorage",
	},
	{
		id: "d5155da1-9c54-45ec-993e-f9a395aa3c71",
		image: Project3,
		name: "Astronomy Picture of the Day",
		category: "Web development",
		href: "https://space-app-9de4b.web.app/",
		description: "This app gave me a job",
	},
];

// skills
export const skills = [
	{
		id: "9ff85a04-a5b3-459c-879b-6f0fa4d7dd3a",
		image: SkillImg1,
	},
	{
		id: "36ba96f5-51a0-4245-9de2-29da50804d2f",
		image: SkillImg2,
	},
	{
		id: "ed397ad5-67cb-47a9-8c3a-4316b9bc6045",
		image: SkillImg3,
	},
	{
		id: "99289e7c-dc69-4a69-9d8f-eb523fc90324",
		image: SkillImg4,
	},
	{
		id: "c2876de4-9ba3-4ef2-a53f-5b5292c895ce",
		image: SkillImg5,
	},
	{
		id: "749b2871-3648-44a3-bb39-32c4aa599c57",
		image: SkillImg6,
	},
	{
		id: "8b84283a-da73-4bd1-a931-d8c16e699063",
		image: SkillImg7,
	},
	{
		id: "44711e30-dcd0-4e72-aa93-f62b2eefc49d",
		image: SkillImg8,
	},
];

// contact
export const contact = [
	{
		id: "2de67389-16f2-41b6-b28e-6bd7519e154c",
		icon: <FiMail />,
		title: "Do you have any questions?",
		subtitle: "I am here to help you",
		description: "Email me with the form or by social media, please",
	},
	{
		id: "bb1e7777-9838-42b4-81a3-19ac65dbbad5",
		icon: <FiMapPin />,
		title: "Current Location",
		subtitle: "Mexico City, Mexico",
		description: "Working from 🏠",
	},
];

export function getCurrentDateTime() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();

	const amOrPm = hours < 12 ? "AM" : "PM";
	const formattedHours = hours % 12 || 12;
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const month = monthNames[now.getMonth()];
	const day = now.getDate();
	const year = now.getFullYear();

	const dateTimeString = `${formattedHours}:${formattedMinutes} ${amOrPm} - ${month} ${day}, ${year}`;

	return dateTimeString;
}
