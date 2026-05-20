import ronzalko from "../assets/Ron Zalko web design.jpg";
import melodycard1 from "../assets/MelodyCard1.jpg";
import timmyhaircare1 from "../assets/timmyhaircare1.jpg";
import scwcharity from "../assets/scwcharitywebpage.png";
import astroPlaceholder from "../assets/AstorMatchlogo.jpg";
import motionPlaceholder from "../assets/motion graphics.webp";
import kvdstThumb from "../assets/KVDST LOGO.png";
import eventSetup from "../assets/EventSetup.jpeg";

export const projectsData = [
  {
    id: "1",
    title: "Ron Zalko Fitness Website Redesign",
    category: "UI/UX",
    description: "UX redesign focused on navigation, accessibility, and clearer booking flow.",
    image: ronzalko,
    software: ["Figma", "HTML", "CSS", "JavaScript"],
    link: "/projects/1",
    featured: true,
  },
  {
    id: "2",
    title: "Melody Beats Branding",
    category: "Visual Design",
    description: "Brand identity, logo exploration, and business card system.",
    image: melodycard1,
    software: ["Illustrator", "Photoshop", "InDesign"],
    link: "/projects/2",
    featured: true,
  },
  {
    id: "3",
    title: "TimmyCare App Redesign",
    category: "UI/UX",
    description: "Mobile app redesign focused on usability, flow, and visual clarity.",
    image: timmyhaircare1,
    software: ["Figma", "React Native"],
    link: "/projects/3",
    featured: true,
  },
  {
    id: "4",
    title: "SCW Charity Website",
    category: "Web",
    description: "Responsive charity website built for storytelling and community engagement.",
    image: scwcharity,
    software: ["WordPress", "Elementor"],
    link: "/projects/4",
    featured: true,
  },
  {
    id: "5",
    title: "AstroMatch App",
    category: "UI/UX",
    description: "Astrology dating app concept with compatibility-based matching.",
    image: astroPlaceholder,
    software: ["Product Design", "UI/UX", "Prototyping"],
    link: "/projects/5",
    featured: false,
  },
  {
    id: "6",
    title: "Motion Graphic Intro",
    category: "Motion",
    description: "Anime-inspired kinetic typography intro bumper.",
    image: motionPlaceholder,
    software: ["After Effects", "Premiere Pro"],
    link: "/projects/6",
    featured: false,
  },
  {
    id: "7",
    title: "KVDST Social Media Marketing Site",
    category: "Front-End",
    description: "Collaborative campaign site built with GitHub workflow and web design structure.",
    image: kvdstThumb,
    software: ["HTML", "CSS", "JavaScript", "GitHub"],
    link: "/projects/7",
    liveUrl: "https://kvdst.danielkolpakov.com/index.html",
    featured: false,
  },
  {
    id: "8",
    title: "BCRPA Internship Experience",
    category: "Internship",
    description: "Visual communication, event design, signage, print collateral, and Symposium support.",
    image: eventSetup,
    software: ["Print Design", "Brand Systems", "Event Design"],
    link: "/bcrpa",
    featured: false,
  },
];
