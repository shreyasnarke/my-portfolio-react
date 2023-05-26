import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
import profile from "./assets/profile.jpg";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "SHREYAS NARKE",
  tagline: "I build things for web",
  img: profile,
  about: ``,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `PraiseArray`,
    Location: "Pune",
    Type: "Part Time",
    Duration: "",
  },
  
];

export const eduDetails = [
  {
    Position: "Master in Computer Application",
    Company: "Haribhai V. Desai,Pune University",
    Location: "Pune",
    Type: "Full Time",
    Duration: "Dec 2022 - Present",
  },
  {
    Position: "Bachelor in Computer Application",
    Company: `Haribhai V. Desai,Pune University`,
    Location: "Pune",
    Type: "Full Time",
    Duration: "July 2019 - Oct 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const projectDetails = [
  {
    title: "Spotify music-clone",
    image: projectImage1,
    description: `The Spotify Music App Clone project aims to recreate the popular music streaming platform using HTML and CSS. 
    this project will provide users with a familiar and immersive music streaming experience.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shreyasnarke/smusic-spotify-clone-",
  },
  {
    title: "Calculator-react",
    image: projectImage2,
    description: `The Calculator App project implemented using React aims to create a fully functional calculator with an intuitive user interface. 
    This app will allow users to perform basic arithmetic operations like addition, subtraction, multiplication, and division`,
    techstack: "HTML/CSS, JavaScript ,React",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shreyasnarke/calculator-react",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

export const contactDetails = {
  email: "narkeshreyas44@gmail.com",
  phone: "+91 9767710596",
};