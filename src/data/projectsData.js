import ronzalko from "../assets/Ron Zalko web design.jpg";
import melodycard1 from "../assets/MelodyCard1.jpg";
import timmyhaircare from "../assets/timmyhaircare4.jpg";
import scwcharity from "../assets/scwcharitywebpage.png";
import scwLogo from "../assets/scw logo.png";
import astroPlaceholder from "../assets/AstorMatchlogo.jpg";
import motionPlaceholder from "../assets/motion graphics.webp";
import motionCardAudio from "../assets/sukuna-domain-theme.mp3";
import kvdstLogo from "../assets/KVDST LOGO.png";
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
    description: "Haircare app redesign with research, flows, wireframes, personas, and prototype structure.",
    image: timmyhaircare,
    software: ["Figma", "Adobe XD", "UI/UX"],
    link: "/projects/3",
    featured: true,
  },
  {
    id: "4",
    title: "SCW Charity Website",
    category: "Web",
    description: "Charity website case study with research artifacts, sitemap, low-fidelity wireframes, and brand identity.",
    image: scwcharity || scwLogo,
    software: ["UX Research", "Wireframes", "Branding"],
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
    description: "Anime-inspired kinetic typography bumper, optimized for web playback.",
    image: motionPlaceholder,
    software: ["After Effects", "Premiere Pro"],
    link: "/projects/6",
    cardTheme: "motion",
    audio: motionCardAudio,
    featured: false,
  },
  {
    id: "7",
    title: "KVDST-MUSIC-LABEL-site",
    category: "Front-End",
    description: "Music label website redesign with refreshed UI/UX, live preview, style guide, and code showcase.",
    image: kvdstLogo,
    logo: kvdstLogo,
    software: ["HTML", "CSS", "JavaScript", "GitHub"],
    link: "/projects/7",
    liveUrl: "http://kvdst.timmybad.com/",
    previewUrl: "/kvdst-site/index.html",
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
