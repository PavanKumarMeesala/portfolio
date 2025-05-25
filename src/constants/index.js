import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  tecnis,
  nutridiet,
  vechile,
  spring,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "git", icon: git },
  { name: "Spring Boot", icon: spring },
];

export const experiences = [
  {
    title: "Trainee",
    company_name: "Tecnis Integrated Technologies Pvt. Lmt.", 
    icon: tecnis,
    iconBg: "#161329",
    date: "Dec 2022 - June 2023",
    points: [ "Achieved strong growth in Computer Science fundamentals and Programming languages with hands-on experi-ence in different technologies from front-end to back-end along with data structures and algorithms."
    ],
  },
];

export const projects = [
  {
    name: "Nutri diet: Enchance Living",
    description:
      "Developed a dietary analysis web application using ReactJS (frontend) and Spring Boot (backend). Nutri-diet includes features such as as BMI Index, Daily weight lojounery,ery, and personalized tasks.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Spring boot", color: "pink-text-gradient" },
      { name: "MySQL", color: "yellow-text-gradient" },
    ],
    image: nutridiet,
    source_code_link: "https://nutri-diet-git-master-pavankumarmeesalas-projects.vercel.app/",
  },
  {
    name: "Vechile Assistant",
    description:
     "A problem solving innovation towards road safety and sudden vehicle breakdown. We developed an Android application to locate the nearby Mechanics and Service team that can help them.",
     tags:[
      { name: "Android", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
     ],
    image: vechile,
    source_code_link: "",
  },
];
