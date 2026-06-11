import ronzalko from "../assets/Ron Zalko web design.jpg";
import melodyPackageDesign from "../assets/melody-beats-package-design-2.jpg";
import timmyhaircare from "../assets/timmyhaircare4.jpg";
import scwcharity from "../assets/scwcharitywebpage.png";
import scwLogo from "../assets/scw logo.png";
import astroPlaceholder from "../assets/AstorMatchlogo.jpg";
import motionPlaceholder from "../assets/motion graphics.webp";
import motionCardAudio from "../assets/sukuna-domain-theme.mp3";
import kvdstLogo from "../assets/KVDST LOGO.png";
import bcrpaLogo from "../assets/BCRPA-primary-logo.png";
import triumphStridePackage from "../assets/truimphstride_package design.jpg";

export const projectsData = [
  {
    id: "1",
    title: "Ron Zalko Fitness - Rebrand & Website Redesign",
    category: "UI/UX",
    description: "Rebrand, logo redesign, wireframes, user flow, poster ad, and Adobe XD website prototype.",
    image: ronzalko,
    software: ["Adobe XD", "UI/UX", "Brand System"],
    link: "/projects/1",
    cardTheme: "ron",
    featured: true,
  },
  {
    id: "2",
    title: "Melody Beats Branding",
    category: "Visual Design",
    description: "Brand identity system with logo development, business cards, postal cards, package design, and branded product items.",
    image: melodyPackageDesign,
    software: ["Photoshop", "Adobe After Effects", "Brand System"],
    link: "/projects/2",
    cardTheme: "melody",
    featured: true,
  },
  {
    id: "3",
    title: "TimmyCare App Redesign",
    category: "UI/UX",
    description: "Haircare app redesign with brand guide, UX research, sitemap, user flow, low-fidelity wireframes, and final mobile screens.",
    image: timmyhaircare,
    software: ["UX Research", "Mobile UI", "Brand Guide"],
    link: "/projects/3",
    cardTheme: "timmycare",
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
    cardTheme: "scw",
    featured: true,
  },
  {
    id: "5",
    title: "AstroMatch App",
    category: "UI/UX",
    description: "Live astrology dating app upgrade with compatibility results, discovery, profiles, messaging, favorites, beginner guidance, and premium flows.",
    image: astroPlaceholder,
    software: ["React Native", "Expo", "Product Design", "UI/UX", "Design System"],
    link: "/projects/5",
    liveUrl: "http://website-b862f62d.pef.fai.mybluehost.me/",
    cardTheme: "astro",
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
    liveUrl: "https://timmybad.com/kvdst/",
    previewUrl: "/kvdst-site/index.html",
    cardTheme: "kvdst",
    featured: false,
  },
  {
    id: "8",
    title: "BCRPA Internship Experience",
    category: "Internship",
    description: "Visual communication, event design, signage, print collateral, and Symposium support.",
    image: bcrpaLogo,
    software: ["Print Design", "Brand Systems", "Event Design"],
    link: "/bcrpa",
    cardTheme: "bcrpa",
    featured: false,
  },
  {
    id: "9",
    title: "TriumphStride - Brand Identity & Business Assets",
    category: "Brand Identity / Visual Design",
    description: "A complete brand identity and business collateral system featuring logo design, cheque layout, invoice design, product list/menu, and product packaging assets.",
    image: triumphStridePackage,
    software: ["Brand Identity", "Visual Design", "Packaging"],
    link: "/projects/9",
    cardTheme: "triumph",
    featured: false,
  },
];
