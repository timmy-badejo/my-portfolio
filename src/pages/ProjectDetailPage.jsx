import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetailPage.css";

import ronzalko from "../assets/Ron Zalko web design.jpg";
import ronLogo from "../assets/Ron-Zalko-Logo.png";
import ronPoster from "../assets/Ron Zalko zoster.jpg";
import ronUserFlow from "../assets/User flow for ron zalko fitness web redesignn.png";
import ronSitemap from "../assets/Ui-Ux RonZalko-WebDesign_Page_16.jpg";
import ronBusinessCardFront from "../assets/ron-zalko-buisness-card-front.jpg";
import ronBusinessCardBack from "../assets/ron-zalko-buisness-card-back.jpg";
import ronInvoice from "../assets/ron zalko gym invoice.jpg";
import ronEnvelope from "../assets/Ron Zalko Mail Envelope-01.jpg";
import ronWire1 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_01.jpg";
import ronWire2 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_02.jpg";
import ronWire3 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_03.jpg";
import ronWire4 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_04.jpg";
import ronWire5 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_05.jpg";
import ronWire6 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_06.jpg";
import ronWire7 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_07.jpg";
import ronWire8 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_08.jpg";
import ronWire9 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_09.jpg";
import ronWire10 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_10.jpg";
import ronWire11 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_11.jpg";
import ronWire12 from "../assets/Ron-Zalko-Web-Design-Wireframe_Page_12.jpg";
import ronStyleGuidePdf from "../assets/Ron-zalko-style-guide.pdf";
import melodyBusinessCard1 from "../assets/melody-beats-buisness-card-1.jpg";
import melodyBusinessCard2 from "../assets/melody-beats-buisness-card-2.jpg";
import melodyBusinessCard4 from "../assets/melody-beats-buisness-card-4.jpg";
import melodyBusinessCard5 from "../assets/melody-beats-buisness-card-5.jpg";
import melodyBusinessCard6 from "../assets/melody-beats-buisness-card-6.jpg";
import melodyBusinessCard7 from "../assets/melody-beats-buisness-card-7.jpg";
import melodyBeatsItem from "../assets/Melody-beats-item.jpg";
import melodyPosterCard1 from "../assets/melody-beats-poster-card-1.jpg";
import melodyPosterCard2 from "../assets/melody-beats-poster-card-2.jpg";
import melodyPosterCard3 from "../assets/melody-beats-poster-card-3.jpg";
import melodyPosterCard4 from "../assets/melody-beats-poster-card-4.jpg";
import melodyPosterCard5 from "../assets/melody-beats-poster-card-5.jpg";
import melodyPosterCard6 from "../assets/melody-beats-poster-card-6.jpg";
import melodyPackageUnfolded from "../assets/Melody-beats-package-design-unfolded.jpg";
import melodyDoc1 from "../assets/melodyBeatsDocument_Page_01.jpg";
import melodyDoc2 from "../assets/melodyBeatsDocument_Page_02.jpg";
import melodyDoc3 from "../assets/melodyBeatsDocument_Page_03.jpg";
import melodyDoc4 from "../assets/melodyBeatsDocument_Page_04.jpg";
import melodyDoc5 from "../assets/melodyBeatsDocument_Page_05.jpg";
import melodyDoc6 from "../assets/melodyBeatsDocument_Page_06.jpg";
import melodyDoc7 from "../assets/melodyBeatsDocument_Page_07.jpg";
import melodyDoc9 from "../assets/melodyBeatsDocument_Page_09.jpg";
import melodyDoc10 from "../assets/melodyBeatsDocument_Page_10.jpg";
import melodyDoc11 from "../assets/melodyBeatsDocument_Page_11.jpg";
import melodyDoc12 from "../assets/melodyBeatsDocument_Page_12.jpg";
import melodyLogoSketch from "../assets/melody shape logo for melody.png";
import melodyLogoFinal from "../assets/Melody Logo 2 blue for melody.png";
import melodyPosterCard from "../assets/Melody Logo poster cards for melody.png";
import melodyProduct from "../assets/melody-beats-package-design-1.png";
import melodyProductBox from "../assets/melody-beats-package-design-2.jpg";
import melodyHeadphone from "../assets/Melody beats headphone.jpg";
import melodyBlueLogo from "../assets/melody blue for melody.png";
import timmyhaircare from "../assets/timmyhaircare4.jpg";
import timmyhaircare1 from "../assets/timmyhaircare1.jpg";
import timmyhaircare2 from "../assets/timmyhaircare2.jpg";
import timmyhaircare3 from "../assets/timmyhaircare3.jpg";
import timmyLogo from "../assets/Tc_logo.png";
import timmyProductPage from "../assets/Product Page for timmyhaircare.png";
import timmyWishlist from "../assets/Wishlist Screen for timmyhaircare.jpg";
import scwcharity from "../assets/scwcharitywebpage.png";
import scwLogo from "../assets/scw logo.png";
import scwPersona from "../assets/scw user persona 1.jpg";
import scwPersonaTwo from "../assets/scw user persona 2.jpg";
import scwSitemap from "../assets/scw-sitemap.png";
import scwFullDisplay from "../assets/scw-full-display.jpg";
import scwBrandSystemPdf from "../assets/SCW-BRAND-DESIGN-SYSTEM.pdf";
import scwWire1 from "../assets/SCW Charity Website Wireframe A 2_Page_01.jpg";
import scwWire2 from "../assets/SCW Charity Website Wireframe A 2_Page_02.jpg";
import scwWire3 from "../assets/SCW Charity Website Wireframe A 2_Page_03.jpg";
import scwWire4 from "../assets/SCW Charity Website Wireframe A 2_Page_04.jpg";
import scwWire5 from "../assets/SCW Charity Website Wireframe A 2_Page_05.jpg";
import scwWire6 from "../assets/SCW Charity Website Wireframe A 2_Page_06.jpg";
import scwWire7 from "../assets/SCW Charity Website Wireframe A 2_Page_07.jpg";
import scwWire8 from "../assets/SCW Charity Website Wireframe A 2_Page_08.jpg";
import scwWire9 from "../assets/SCW Charity Website Wireframe A 2_Page_09.jpg";
import scwWire10 from "../assets/SCW Charity Website Wireframe A 2_Page_10.jpg";
import scwWire11 from "../assets/SCW Charity Website Wireframe A 2_Page_11.jpg";
import scwWire12 from "../assets/SCW Charity Website Wireframe A 2_Page_12.jpg";
import scwWire13 from "../assets/SCW Charity Website Wireframe A 2_Page_13.jpg";
import astroPlaceholder from "../assets/AstorMatchlogo.jpg";
import astro1 from "../assets/astro-match-app_Page_0a.jpg";
import astro2 from "../assets/astro-match-app_Page_0b.jpg";
import astro3 from "../assets/astro-match-app_Page_0c.jpg";
import astro4 from "../assets/astro-match-app_Page_0d.jpg";
import astro5 from "../assets/astro-match-app_Page_0e.jpg";
import motionPlaceholder from "../assets/motion graphics.webp";
import motionGraphicVideo from "../assets/Jujitsu_Kaisen_Intro_Bumper_Timilehin Yomi-Badejo_Final comp.mp4";
import motionGraphicAudio from "../assets/jujitsu_kaisen_intro_Bumper-audio.mp3";
import kvdstLogo from "../assets/KVDST LOGO.png";
import kvdstStyleGuidePdf from "../assets/KVDST-record-label-style-guide.pdf";

const scwWireframes = [
  scwWire1,
  scwWire2,
  scwWire3,
  scwWire4,
  scwWire5,
  scwWire6,
  scwWire7,
  scwWire8,
  scwWire9,
  scwWire10,
  scwWire11,
  scwWire12,
  scwWire13,
];

const melodyBrandSystem = [
  { title: "Brand Style and Package", note: "Opening brand-system page", image: melodyDoc1 },
  { title: "Brand Values and Palette", note: "Voice, mood, and color direction", image: melodyDoc2 },
  { title: "Moodboard and Logo Sketches", note: "Early visual research and logo exploration", image: melodyDoc3 },
  { title: "Logo Sketch Development", note: "Hand-drawn logo direction", image: melodyDoc4 },
  { title: "Logo Variations", note: "Refined mark options", image: melodyDoc5 },
  { title: "Logo and Brand Story", note: "Primary mark and brand narrative", image: melodyDoc6 },
  { title: "Brand Overview and Type", note: "Identity rules and typography", image: melodyDoc7 },
  { title: "Palette and Pattern Design", note: "Color system and waveform pattern", image: melodyDoc9 },
  { title: "Package and Card Design", note: "Product box and business card system", image: melodyDoc10 },
  { title: "Postcard Design", note: "Poster-card applications", image: melodyDoc11 },
  { title: "Product Mockup and Final Logo", note: "Headphone product direction and final mark", image: melodyDoc12 },
];

const melodyLogoSystem = [
  melodyDoc3,
  melodyDoc4,
  melodyDoc5,
  melodyDoc6,
  melodyLogoSketch,
  melodyLogoFinal,
  melodyBlueLogo,
  melodyPosterCard,
];

const melodyBusinessCards = [
  melodyBusinessCard1,
  melodyBusinessCard2,
  melodyBusinessCard4,
  melodyBusinessCard5,
  melodyBusinessCard6,
  melodyBusinessCard7,
];

const melodyPostcards = [
  melodyPosterCard1,
  melodyPosterCard2,
  melodyPosterCard3,
  melodyPosterCard4,
  melodyPosterCard5,
  melodyPosterCard6,
];

const melodyProductDesign = [
  melodyProduct,
  melodyProductBox,
  melodyPackageUnfolded,
  melodyHeadphone,
  melodyBeatsItem,
];

const timmyCareScreens = [
  timmyhaircare,
  timmyhaircare1,
  timmyhaircare2,
  timmyhaircare3,
  timmyProductPage,
  timmyWishlist,
];

const astroMockups = [astroPlaceholder, astro1, astro2, astro3, astro4, astro5];
const ronBrandCollateral = [
  {
    title: "Business Card Front",
    image: ronBusinessCardFront,
    note: "Front-facing trainer contact card with logo-first hierarchy and strong black/red contrast.",
  },
  {
    title: "Business Card Back",
    image: ronBusinessCardBack,
    note: "Brand statement side built around the Unity, Balance, Power positioning.",
  },
  {
    title: "Mail Envelope",
    image: ronEnvelope,
    note: "Stationery system carrying the logo, address, and supporting brand pattern.",
  },
  {
    title: "Invoice Layout",
    image: ronInvoice,
    note: "Operational document template with branded table styling and payment hierarchy.",
  },
];

const astroUpgradeGroups = [
  {
    title: "App Shell",
    items: [
      "Rebuilt App.jsx with a web phone-frame layout, AppUiProvider, global toast host, online status banner, and new Beginner Guide and Subscription routes.",
      "Improved tab bar styling so the product feels more polished across the app shell.",
    ],
  },
  {
    title: "Results Screen",
    items: [
      "Added themed layouts, beginner guide support, loading skeletons, empty states, compatibility hero, insight tiles, compatible sign cards, and a sign comparison tool.",
      "Added live compatibility messaging, candidate match cards, shared favorite behavior, free favorite limit toasts, premium report content, and bottom actions.",
    ],
  },
  {
    title: "Discovery and Matching",
    items: [
      "Improved CompatibleUsers, FilteredUserList, and HomeScreen with better match ranking, sorting, element filters, match bars, saved tracking, online indicators, and faster FlatList rendering.",
      "Added discovery stats, profile funnel sections, and stronger empty states.",
    ],
  },
  {
    title: "Profile System",
    items: [
      "Added ethnicity, profile image personalization, completion progress, zodiac auto-detection preview, and beginner guide routing after profile creation.",
      "Rebuilt profile dashboards and user profiles with stats, saved activity, badges, quick actions, photo grids, compatibility breakdowns, astrology charts, conversation starters, and safety controls.",
    ],
  },
  {
    title: "Messaging and Favorites",
    items: [
      "Improved chat headers, avatars, online states, safety reminders, conversation starters, message bubbles, local sent toasts, and profile navigation.",
      "Added shared favorite profile service, saved people/signs behavior, removal toasts, tab-style organization, and stronger empty states.",
    ],
  },
  {
    title: "System and Build",
    items: [
      "Added beginner guide, subscription, EmptyState, GuideCard, LoadingSkeleton, OnlineStatusBanner, ScreenSection, ToastHost, UI context, premium status, storage, profile image, and favorite services.",
      "Updated themes with a premium light/dark palette, cleaner 8px-style cards, improved line heights, new element colors, profile assets, PWA metadata, docs, build output, and a Bluehost upload zip.",
    ],
  },
];

const caseStudyMetadata = {
  "1": {
    snapshot: ["Rebrand and website redesign", "Logo, cards, envelope, invoice, poster, wireframes, user flow, and prototype", "Deep crimson, black, and white fitness identity"],
    context: "Ron Zalko needed a stronger digital and brand presence that could carry both fitness intensity and yoga balance across web and print collateral.",
    process: ["Redesigned the logo around unity, balance, and power.", "Mapped the new website flow before moving into wireframes.", "Extended the identity into business cards, envelope, invoice, poster, and PDF style guide."],
    delivery: "Delivered a refreshed brand system, horizontal wireframe browser, Adobe XD prototype, and vertical style-guide preview.",
  },
  "2": {
    snapshot: ["Music brand identity system", "Logo sketches, final marks, business cards, poster cards, and package design", "Melody blue, coral, teal, green, purple, and warm gold palette"],
    context: "Melody Beats needed a cohesive music identity that could feel energetic on promotional pieces while still working across practical brand collateral and product packaging.",
    process: ["Explored logo sketches around waveforms, rhythm, motion, and the Melody name.", "Refined final logo directions and built a color system for blue, coral, teal, green, purple, and warm gold applications.", "Applied the identity across business cards, poster cards, headphone visuals, and product package mockups."],
    delivery: "Delivered a detailed brand-system case study with a slider for the full design system and grouped sections for logo work, business cards, poster cards, and package design.",
  },
  "3": {
    snapshot: ["Mobile app redesign", "Research artifacts, flows, personas, and high-fidelity screens", "Haircare shopping and wishlist experience"],
    context: "TimmyCare needed clearer mobile flows grounded in user research and product browsing behavior.",
    process: ["Mapped personas, empathy maps, scenarios, sitemap, journey map, and user flow.", "Separated low-fidelity planning from polished screen presentation.", "Kept the interface aligned to the TimmyCare palette."],
    delivery: "Delivered a cleaner mobile-first UI/UX case study with research support and screen gallery.",
  },
  "4": {
    snapshot: ["Charity website case study", "Personas, sitemap, wireframes, logo, full-page preview, and brand system", "Warm, accessible SCW visual language"],
    context: "SCW needed a warmer, clearer charity website structure that made audience needs, navigation, and brand consistency visible.",
    process: ["Built personas and sitemap before wireframes.", "Prepared the full-page website as the scrollable hero preview.", "Connected logo, color, and brand-system rules to the page UI."],
    delivery: "Delivered a full SCW case study with website preview, research artifacts, wireframes, and embedded brand design system PDF.",
  },
  "5": {
    snapshot: ["Live app upgrade", "React Native/Expo product UI", "Compatibility, discovery, profiles, messaging, favorites, guide, and subscription flows"],
    context: "AstroMatch moved from an app concept into a broader interactive product case study with real flows, states, navigation, and live preview.",
    process: ["Rebuilt the app shell and routes.", "Expanded Results, Discovery, Profile, Messaging, Favorites, Beginner Guide, and Subscription flows.", "Added shared services, state handling, themed components, assets, and PWA metadata."],
    delivery: "Delivered a live app preview and a complete UI/UX upgrade story across product, design system, and implementation layers.",
  },
  "6": {
    snapshot: ["Motion bumper", "After Effects and Premiere Pro", "Video-first case study with synced audio"],
    context: "The intro needed to feel intense while keeping typography readable and synchronized to sound.",
    process: ["Storyboarded timing beats.", "Animated type, impact frames, lighting, and camera movement.", "Prepared synced web playback."],
    delivery: "Delivered a focused motion showcase with final video and synchronized soundtrack.",
  },
  "7": {
    snapshot: ["Music label website redesign", "Front-end UI/UX with live + backup delivery path", "Black and KVDST blue visual system"],
    context: "KVDST needed stronger brand alignment, cleaner UX architecture, and a professional web presence connecting artists, events, merch, and label storytelling.",
    process: ["Reworked information architecture and page hierarchy around user intent.", "Aligned the visual language to the KVDST identity system.", "Added live deployment, backup code continuity, style-guide framing, and code evidence."],
    delivery: "Delivered a production-ready case study with professional structure, live preview access, fallback backup path, and implementation documentation.",
  },
};

const ronWireframes = [
  ronWire1,
  ronWire2,
  ronWire3,
  ronWire4,
  ronWire5,
  ronWire6,
  ronWire7,
  ronWire8,
  ronWire9,
  ronWire10,
  ronWire11,
  ronWire12,
];

const ronWireframeGallery = ronWireframes.map((image, index) => ({
  title: `High-Fidelity Wireframe ${String(index + 1).padStart(2, "0")}`,
  note: "Responsive website screen direction from the Ron Zalko redesign.",
  image,
}));

const ronScrollArtifacts = [
  { title: "Ron Zalko Logo", note: "Primary identity mark", image: ronLogo },
  { title: "Site Map", note: "Navigation and page-path planning", image: ronSitemap },
  ...ronWireframeGallery,
  { title: "Business Card Front", note: "Brand collateral", image: ronBusinessCardFront },
  { title: "Business Card Back", note: "Brand collateral", image: ronBusinessCardBack },
  { title: "Mail Envelope", note: "Stationery collateral", image: ronEnvelope },
  { title: "Invoice", note: "Business document styling", image: ronInvoice },
  { title: "Poster Ad", note: "Campaign direction", image: ronPoster },
];

const kvdstCodeSamples = {
  HTML: `<header class="site-header">
  <a class="brand" href="#home">KVDST</a>
  <nav>
    <a href="#artists">Artists</a>
    <a href="#events">Events</a>
    <a href="#merch">Merch</a>
  </nav>
</header>

<main class="label-shell">
  <section class="hero">
    <p>KVDST Record Label</p>
    <h1>Independent sound, releases, events, and culture.</h1>
  </section>
</main>`,
  CSS: `:root {
  --kvdst-blue: #29abe2;
  --kvdst-black: #020406;
}

.label-shell {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 10%, rgba(41,171,226,.22), transparent 32%), #020406;
  color: #f4fff1;
}

.hero {
  display: grid;
  gap: 1rem;
  padding: clamp(4rem, 8vw, 8rem);
}`,
  JavaScript: `const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});`,
};

const kvdstFramework = [
  {
    phase: "01",
    title: "Discovery and Audit",
    points: [
      "Reviewed page flow and navigation clarity across the original site.",
      "Mapped hierarchy gaps between artists, events, merch, and editorial content.",
    ],
  },
  {
    phase: "02",
    title: "UX Architecture",
    points: [
      "Rebuilt content architecture around user intent and faster path selection.",
      "Grouped high-value actions so visitors can move from discovery to action with less friction.",
    ],
  },
  {
    phase: "03",
    title: "UI and Brand System",
    points: [
      "Aligned the interface to KVDST's stage-black and electric-blue identity system.",
      "Standardized spacing, card rhythm, and contrast hierarchy for cleaner readability.",
    ],
  },
  {
    phase: "04",
    title: "Front-End Delivery",
    points: [
      "Prepared live deployment with a mirrored local backup path for reliability.",
      "Kept responsive behavior, hover states, and page transitions consistent.",
    ],
  },
];

const kvdstUxUpgrades = [
  "Clearer navigation hierarchy and stronger first-screen orientation.",
  "Improved information grouping for artists, events, merch, and updates.",
  "More consistent spacing and typography rhythm across long-form sections.",
  "Higher visual contrast and cleaner component states for legibility.",
  "Live-first delivery with local backup continuity when hosting is unavailable.",
];

const kvdstQualitySignals = [
  {
    title: "Live Availability",
    detail: "Primary public URL drives the embedded preview and direct-open action.",
  },
  {
    title: "Backup Reliability",
    detail: "Full static backup runs from `/kvdst-site/index.html` with linked assets preserved.",
  },
  {
    title: "System Consistency",
    detail: "Design language, style guide, and implementation evidence all align to one KVDST system.",
  },
];

const timmyCareResearch = {
  logo: timmyLogo,
  researchMaps: [
    { title: "Sitemap", type: "PDF" },
    { title: "Journey Map", type: "PDF" },
    { title: "Userflow", type: "PDF" },
  ],
  empathyMaps: [
    { title: "Empathy Map Direction", src: timmyhaircare1 },
    { title: "User Need Mapping", src: timmyhaircare2 },
  ],
  personas: [
    { title: "Persona Direction", src: timmyhaircare3 },
    { title: "TimmyCare Logo", src: timmyLogo },
  ],
  scenarios: [
    { title: "User Scenario Screen", src: timmyProductPage },
    { title: "Wishlist / Saved Care Flow", src: timmyWishlist },
  ],
  lowFi: [],
};

const projects = [
  {
    id: "1",
    title: "Ron Zalko Fitness - Rebrand & Website Redesign",
    category: "UI/UX",
    image: ronzalko,
    technicalInfo: "UI/UX Design • Logo Redesign • Website Redesign • Brand System",
    logo: ronLogo,
    overview: "A full rebrand and website redesign for Ron Zalko Fitness & Yoga. The work covered UI/UX strategy, logo redesign, website structure, wireframes, user flow, Adobe XD prototype, poster design, business cards, envelope, invoice, and a finished style guide.",
    challenges: "The original brand and website needed stronger cohesion, clearer navigation, better digital hierarchy, and a visual system that could work across both interface design and practical business collateral.",
    outcome: "A modernized Ron Zalko identity with a stronger logo, cleaner website redesign, clearer user journey, reusable brand assets, print-ready collateral, and a documented style-guide system.",
    details: [
      "Redesigned the Ron Zalko logo by combining strength, balance, and unity through a yoga pose, arm, and weight forming one unified mark.",
      "Created a poster ad using the new brand direction: Unity, Balance, Power.",
      "Extended the brand system into business cards, mail envelope, and invoice design so the identity works beyond the website.",
      "Rebuilt the website structure with improved navigation, clearer hierarchy, and a user-centered flow.",
      "Produced wireframes across 12 pages and a full Adobe XD prototype.",
      "Applied the Ron Zalko colour system, deep crimson, black, and white, across brand touchpoints.",
      "Documented the full project in a UI/UX style guide PDF covering research, competitive analysis, personas, and results.",
    ],
    scrollBrowseTitle: "Wireframe Browser",
    scrollBrowseText: "Scroll to view the Ron Zalko logo, sitemap, wireframes, and collateral sequence.",
    scrollImages: ronScrollArtifacts,
    oldSiteUrl: "https://ronzalko.com/",
    prototypeUrl: "https://xd.adobe.com/view/20f25a09-a9b7-4b46-a4cd-6158c74e6a52-75a1/",
    prototypeEmbedUrl: "https://xd.adobe.com/embed/20f25a09-a9b7-4b46-a4cd-6158c74e6a52-75a1/",
    styleGuidePdf: ronStyleGuidePdf,
    styleGuideFilename: "Ron zalko style-guide.pdf",
    isRon: true,
  },
  {
    id: "2",
    title: "Melody Beats Branding",
    category: "Visual Design",
    image: melodyBeatsItem,
    technicalInfo: "Brand Identity • Photoshop • Adobe After Effects",
    overview: "A Melody Beats brand identity case study for a music-focused product system. The work covers logo sketches and final designs, business cards, poster cards, product visuals, and package design.",
    challenges: "The challenge was making the identity feel sonic, energetic, and vibrant while still staying consistent across cards, poster layouts, brand documentation, and product packaging.",
    outcome: "The final brand system presents Melody Beats as a complete music identity with a clear waveform logo, flexible color palette, business card system, poster-card campaign direction, and package/product design.",
    details: [
      "Updated the case study slider into a brand-system design slider using the Melody Beats presentation pages.",
      "Grouped the project into logo sketches and final designs, business cards, poster cards, and product package design.",
      "Featured Melody Beats items as designed artifacts instead of relying on a click-to-open image preview gallery.",
      "Applied the Melody Beats palette across the case study page, project card, and light/dark themed treatments.",
    ],
    scrollBrowseTitle: "Melody Beats Brand System Slider",
    scrollBrowseText: "Browse the brand-system pages for logo development, color, typography, cards, poster cards, product mockups, and package design.",
    scrollImages: melodyBrandSystem,
    isMelody: true,
  },
  {
    id: "3",
    title: "TimmyCare App Redesign",
    category: "UI/UX",
    image: timmyhaircare,
    technicalInfo: "Mobile UI • App Redesign • UX Research",
    overview: "A mobile app redesign focused on usability, research, user flows, low-fidelity exploration, high-fidelity screens, and prototype clarity.",
    challenges: "The challenge was making the experience easier to use while grounding the interface decisions in research artifacts and user needs.",
    outcome: "The redesign created a stronger mobile-first product structure with research support, clearer flows, and more polished high-fidelity wireframes.",
    details: [
      "Added user personas, empathy maps, scenarios, sitemap, journey map, and userflow.",
      "Separated low-fidelity wireframes from the high-fidelity screen gallery.",
      "Used full-display image treatment so research artifacts are not cropped.",
      "Kept the TimmyCare burgundy/coral/blush theme across light and dark modes.",
    ],
    scrollBrowseTitle: "High-Fidelity Wireframe",
    scrollBrowseText: "A horizontal screen browser showing the polished TimmyCare app direction.",
    scrollImages: timmyCareScreens,
    isTimmyCare: true,
  },
  {
    id: "4",
    title: "SCW Charity Website",
    category: "Web",
    image: scwcharity,
    technicalInfo: "UX Research • Sitemap • Wireframes • Brand Identity",
    overview: "A responsive charity website case study with research artifacts, sitemap, user persona, low-fidelity wireframes, logo direction, and brand design system.",
    challenges: "The challenge was organizing charity information into a structure that felt clear, warm, accessible, and easy to navigate.",
    outcome: "The final structure supports storytelling, research-backed UX decisions, brand consistency, and a clearer visual system.",
    details: [
      "Restored the full-page website scroll preview using scwcharitywebpage.png.",
      "Added sitemap, user persona, SCW logo, and full logo display as research/brand artifacts.",
      "Added low-fidelity wireframes Page 01 through Page 13 as a separate section.",
      "Added the SCW Brand Design System PDF with preview, open-PDF action, color swatches, and brand-system highlights.",
      "Placed the sections in UX process order: final preview, overview, personas, sitemap, wireframes, logo, and brand system highlights.",
    ],
    brandGuidePdf: scwBrandSystemPdf,
    isScw: true,
  },
  {
    id: "5",
    title: "AstroMatch App",
    category: "UI/UX",
    image: astroPlaceholder,
    technicalInfo: "React Native • Expo • Product Design • UI/UX • App Upgrade",
    overview: "A live astrology dating app upgraded from concept into an interactive product shell with compatibility results, discovery, profiles, messaging, favorites, beginner guidance, subscription paths, shared services, and a theme-aware design system.",
    challenges: "The challenge was expanding the original idea into a usable app experience with stronger routes, richer states, saved-profile behavior, premium paths, onboarding support, live feedback, and light/dark UI consistency.",
    outcome: "AstroMatch now has a stronger product story, live app preview, upgraded screen flows, reusable components, shared hooks/utilities, profile personalization, and a more complete UI/UX delivery narrative.",
    details: [
      "Rebuilt the app shell with a web phone-frame layout, AppUiProvider, global toast host, online status banner, new Beginner Guide and Subscription routes, and improved tab styling.",
      "Upgraded Results with theme support, beginner guidance, loading skeletons, empty states, compatibility hero, score insights, sign cards, comparison tools, favorite limits, premium report content, and bottom actions.",
      "Improved Discovery and Matching with better ranking, sort controls, element filters, match score bars, saved profile tracking, online status indicators, discovery stats, and faster FlatList settings.",
      "Expanded Profile flows with ethnicity, image personalization, completion progress, zodiac auto-detection, profile dashboard stats, badges, quick actions, compatibility breakdowns, charts, starters, and safety controls.",
      "Improved Messaging and Favorites with richer chat headers, safety reminders, conversation starters, message sent toasts, saved people/signs behavior, removal toasts, and tab-style organization.",
      "Added shared components, hooks, utilities, premium status, favorite profile services, profile image assets, PWA metadata, build output, roadmap docs, and a Bluehost upload zip.",
      "Updated the design system with a premium light/dark palette, cleaner 8px-style cards, better line heights, updated element colors, and improved shadows.",
    ],
    scrollBrowseTitle: "Illustrator Mock-Up",
    scrollBrowseText: "A horizontal mock-up browser for the AstroMatch mobile app screens and product direction.",
    scrollImages: astroMockups,
    liveUrl: "http://website-b862f62d.pef.fai.mybluehost.me/",
    isAstro: true,
  },
  {
    id: "6",
    title: "Motion Graphic Intro",
    category: "Motion",
    image: motionPlaceholder,
    video: motionGraphicVideo,
    audio: motionGraphicAudio,
    technicalInfo: "After Effects • Premiere Pro • Motion Graphics",
    overview: "Produced a fast-paced anime-inspired intro bumper where the final motion piece is the main artifact, built around kinetic typography, impact frames, lighting, timing, and camera movement.",
    challenges: "Balancing legibility, speed, and visual intensity while syncing the edit to the music track and keeping the final export smooth for web playback.",
    outcome: "Delivered a focused video presentation with a synced soundtrack, making the case study feel like a motion showcase instead of an image gallery.",
    details: [
      "Storyboarded timing beats before moving into After Effects.",
      "Animated typography, impact cuts, lighting, and camera sweeps around the soundtrack.",
      "Prepared the video and soundtrack for synchronized browser playback.",
      "Removed repetitive image sections so the case study stays video-first.",
    ],
    motionProcess: [
      { label: "01", title: "Concept and Timing", description: "Built the intro around a short, high-energy anime bumper format with sharp timing beats and fast visual escalation." },
      { label: "02", title: "Kinetic Typography", description: "Used type movement, scale changes, and quick transitions to make the intro feel intense while keeping the main text readable." },
      { label: "03", title: "Impact Frames", description: "Layered flashes, cuts, lighting, and camera motion to create stronger rhythm and a more dramatic reveal." },
      { label: "04", title: "Sound Sync", description: "Matched movement and cuts to the music so the final bumper feels driven by the audio instead of simply sitting on top of it." },
    ],
    deliveryNotes: [
      "Edited and composited the final bumper in After Effects with supporting Premiere Pro export checks.",
      "Kept the final case study video as the primary artifact instead of turning the page into a static image gallery.",
      "Synced the motion piece with its audio track so it can be reviewed directly in the case study.",
    ],
    isMotion: true,
  },
  {
    id: "7",
    title: "KVDST-MUSIC-LABEL-site",
    category: "Front-End",
    image: kvdstLogo,
    logo: kvdstLogo,
    technicalInfo: "Front-End • UI/UX Redesign • Music Label Website",
    overview: "KVDST was redesigned as a complete label web experience with stronger UX architecture, cleaner content hierarchy, and a clearer path through artists, events, merchandise, and label stories.",
    challenges: "The initial direction lacked a professional UX foundation: inconsistent hierarchy, scattered page flow, weaker brand continuity, and no explicit reliability path when live hosting is unavailable.",
    outcome: "The project now presents KVDST at a professional case-study level with refined UI/UX structure, a cohesive brand system, live deployment, and a verified backup code route.",
    details: [
      "Rebuilt navigation, hero, and section flow around clearer user actions and faster wayfinding.",
      "Aligned visual direction to the KVDST brand system using stage-black surfaces and #29ABE2 accents.",
      "Organized artists, events, merch, and updates into clearer structural groups.",
      "Integrated live deployment (`https://timmybad.com/kvdst/`) with a mirrored local backup route (`/kvdst-site/index.html`).",
      "Added a full style-guide documentation section to support consistent implementation.",
      "Expanded implementation evidence with HTML, CSS, and JavaScript code structure.",
    ],
    liveUrl: "https://timmybad.com/kvdst/",
    previewUrl: "/kvdst-site/index.html",
    styleGuide: kvdstStyleGuidePdf,
    isKvdst: true,
  },
];

const projectRouteOrder = ["1", "2", "3", "4", "5", "6", "7"];

function getProjectDataById(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return undefined;

  return {
    ...project,
    caseStudy: caseStudyMetadata[id],
  };
}

function ScrollBrowse({ title, text, images, theme = "" }) {
  if (!images?.length) return null;

  return (
    <section className={`project-section scroll-browse-section ${theme}`}>
      <div className="scroll-browse-head">
        <div>
          <p className="project-kicker">{title}</p>
          <h2>{text}</h2>
        </div>
      </div>

      <div className="scroll-browse-track">
        {images.map((item, index) => {
          const image = typeof item === "string" ? item : item.image;
          const itemTitle = typeof item === "string" ? `Page ${index + 1}` : item.title;
          const itemNote = typeof item === "string" ? "Project screen / artifact preview." : item.note;

          return (
          <figure className="scroll-browse-frame" key={`${image}-${index}`}>
            <img src={image} alt={`${title} ${itemTitle}`} />
            <figcaption>
              <span>{itemTitle}</span>
              <p>{itemNote}</p>
            </figcaption>
          </figure>
          );
        })}
      </div>
    </section>
  );
}

function RonHeroBrowser({ images }) {
  return (
    <div className="ron-hero-browser" aria-label="Ron Zalko wireframes and design explorations">
      <div className="ron-hero-browser-head">
        <div className="ron-scroll-indicator">
          <span></span>
          <p>Scroll to View</p>
        </div>
        <div className="ron-hero-head-copy">
          <span>Horizontal case study browser</span>
          <p>Logo, sitemap, high-fidelity wireframes, business cards, envelope, invoice, and poster.</p>
        </div>
      </div>
      <div className="ron-hero-track">
        {images.map((item, index) => (
          <figure className="ron-hero-frame" key={`${item.image}-${index}`}>
            <div className="ron-hero-image-wrap">
              <img src={item.image} alt={`Ron Zalko ${item.title}`} />
            </div>
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.note ?? "Project artifact preview"}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function CaseStudyStructure({ projectData }) {
  const caseStudy = projectData.caseStudy;
  if (!caseStudy) return null;

  return (
    <section className="project-case-study-flow" aria-label="Shared case study structure">
      <article className="case-study-panel case-study-snapshot">
        <p className="project-kicker">Snapshot</p>
        <h2>What the project covers</h2>
        <div className="case-study-snapshot-grid">
          {caseStudy.snapshot.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>

      <article className="case-study-panel">
        <p className="project-kicker">Context</p>
        <h2>Why the work mattered</h2>
        <p>{caseStudy.context}</p>
      </article>

      <article className="case-study-panel">
        <p className="project-kicker">Process</p>
        <h2>How I approached it</h2>
        <ul>
          {caseStudy.process.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="case-study-panel case-study-delivery">
        <p className="project-kicker">Delivery</p>
        <h2>What was delivered</h2>
        <p>{caseStudy.delivery}</p>
      </article>
    </section>
  );
}

function StyleGuideSection({
  className = "",
  kicker,
  title,
  description,
  pdf,
  filename,
  swatches,
  notes,
}) {
  if (!pdf) return null;

  return (
    <section className={`project-section style-guide-section ${className}`}>
      <div className="style-guide-head">
        <div>
          <p className="project-kicker">{kicker}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <a href={pdf} target="_blank" rel="noreferrer" className="project-doc-link">
          Open PDF ↗
        </a>
      </div>

      <div className="style-guide-layout">
        <div className="style-guide-preview">
          <div className="style-guide-browser-bar">
            <span></span>
            <span></span>
            <span></span>
            <strong>{filename}</strong>
          </div>
          <iframe src={`${pdf}#toolbar=0&view=FitH`} title={filename} />
        </div>

        <aside className="style-guide-aside">
          <div className="style-guide-swatches">
            {swatches.map((swatch) => (
              <div className="style-guide-swatch" key={swatch.name}>
                <span style={{ background: swatch.color }}></span>
                <div>
                  <strong>{swatch.name}</strong>
                  <small>{swatch.color}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="style-guide-notes">
            {notes.map((note) => (
              <div className="style-guide-note" key={note}>
                <span></span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function MotionSyncPlayer({ videoSrc, audioSrc, poster }) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const pauseBoth = () => {
    videoRef.current?.pause();
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const resetBoth = () => {
    pauseBoth();

    if (videoRef.current) videoRef.current.currentTime = 0;
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const handleToggle = async () => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video || !audio) return;

    if (isPlaying) {
      pauseBoth();
      return;
    }

    audio.currentTime = video.currentTime;

    try {
      await Promise.all([video.play(), audio.play()]);
      setIsPlaying(true);
    } catch {
      pauseBoth();
    }
  };

  const handleVideoEnded = () => {
    resetBoth();
  };

  return (
    <div className="motion-video-frame">
      <video
        ref={videoRef}
        className="motion-hero-video"
        src={videoSrc}
        poster={poster}
        muted
        playsInline
        onEnded={handleVideoEnded}
      >
        Your browser does not support the video tag.
      </video>

      <audio ref={audioRef} src={audioSrc} preload="auto" onEnded={resetBoth} />

      <button className="motion-sync-button" type="button" onClick={handleToggle}>
        <span>{isPlaying ? "Pause" : "Play"}</span>
      </button>
    </div>
  );
}

function DetailCards({ projectData }) {
  const isKvdst = projectData.isKvdst;

  return (
    <section className={`cards-container ${isKvdst ? "kvdst-cards-container" : ""}`}>
      <article className="card">
        <p className="project-kicker">Overview</p>
        <h2>Project Overview</h2>
        <p>{projectData.overview}</p>
      </article>

      <article className="card">
        <p className="project-kicker">Challenge</p>
        <h2>Challenges Overcome</h2>
        <p>{projectData.challenges}</p>
      </article>

      <article className="card">
        <p className="project-kicker">Outcome</p>
        <h2>Outcome</h2>
        <p>{projectData.outcome}</p>
      </article>

      <article className={`card project-details-card ${isKvdst ? "kvdst-details-card" : ""}`}>
        <p className="project-kicker">Details</p>
        <h2>{isKvdst ? "What I redesigned and improved" : "Detailed project work"}</h2>
        <ul>
          {projectData.details.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
    </section>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectData = getProjectDataById(id);

  if (!projectData) {
    return (
      <main className="project-detail">
        <Link to="/work" className="back-library-indicator">
          <div className="back-library-line"></div>
          <div className="back-library-content">
            <span className="back-library-arrow">←</span>
            <p>Back to Project Library</p>
          </div>
        </Link>

        <section className="project-missing">
          <p className="project-kicker">Project Not Found</p>
          <h1>This project could not be found.</h1>
          <Link to="/work" className="project-doc-link">Return to Project Library</Link>
        </section>
      </main>
    );
  }

  const currentRouteIndex = projectRouteOrder.indexOf(projectData.id);
  const nextProjectId =
    currentRouteIndex >= 0
      ? projectRouteOrder[(currentRouteIndex + 1) % projectRouteOrder.length]
      : projectRouteOrder[0];

  const pageClass = [
    "project-detail",
    projectData.isKvdst ? "project-detail-kvdst" : "",
    projectData.isMotion ? "project-detail-motion" : "",
    projectData.isTimmyCare ? "project-detail-timmycare" : "",
    projectData.isScw ? "project-detail-scw" : "",
    projectData.isMelody ? "project-detail-melody" : "",
    projectData.isRon ? "project-detail-ron" : "",
    projectData.isAstro ? "project-detail-astro" : "",
  ].join(" ").trim();

  return (
    <main className={pageClass}>
      <nav className="project-floating-nav" aria-label="Project navigation controls">
        <Link to="/work" className="project-nav-indicator project-library-indicator">
          <div className="project-nav-line"></div>
          <div className="project-nav-content">
            <span className="project-nav-arrow">↑</span>
            <p>Return to Project Library</p>
          </div>
        </Link>

        <Link to="/#work" className="project-nav-indicator project-work-indicator">
          <div className="project-nav-line"></div>
          <div className="project-nav-content">
            <span className="project-nav-arrow">↑</span>
            <p>Return to Work Section</p>
          </div>
        </Link>

        <Link to={`/projects/${nextProjectId}`} className="project-nav-indicator project-next-indicator">
          <div className="project-nav-line"></div>
          <div className="project-nav-content">
            <span className="project-nav-arrow">→</span>
            <p>View Next Project</p>
          </div>
        </Link>
      </nav>

      <section className="project-hero">
        <div className="project-title-block">
          <p className="project-kicker">Project Case Study</p>

          <div className={[
            projectData.isKvdst ? "kvdst-title-lockup" : "",
            projectData.isRon ? "ron-title-lockup" : "",
          ].join(" ").trim()}>
            {projectData.isKvdst && <img src={projectData.logo} alt="KVDST logo" />}
            {projectData.isRon && <img src={projectData.logo} alt="Ron Zalko logo" />}
            <h1>{projectData.title}</h1>
          </div>

          {!projectData.isKvdst && !projectData.isRon && <h1>{projectData.title}</h1>}

          <div className="project-detail-meta">
            <span>{projectData.category}</span>
            <span>{projectData.technicalInfo}</span>
            <span>Case Study</span>
          </div>
        </div>

        {projectData.isKvdst ? (
          <div className="kvdst-hero-stage">
            <div className="kvdst-record">
              <img src={projectData.logo} alt="KVDST logo" />
            </div>
            <div className="kvdst-eq">
              {Array.from({ length: 16 }, (_, i) => <span key={i}></span>)}
            </div>
          </div>
        ) : projectData.isRon ? (
          <RonHeroBrowser images={projectData.scrollImages} />
        ) : projectData.isMotion ? (
          <div className="motion-video-hero">
            <MotionSyncPlayer
              videoSrc={projectData.video}
              audioSrc={projectData.audio}
              poster={projectData.image}
            />
            <div className="motion-video-caption">
              <span>Video-first case study</span>
              <p>Press play to watch the bumper with the synced audio track.</p>
            </div>
          </div>
        ) : projectData.isScw ? (
          <div className="scw-scroll-preview">
            <p className="scw-scroll-hint">Scroll to explore the project file</p>
            <div className="scw-scroll-browser">
              <img src={scwcharity} alt="SCW Charity Website full page preview" />
            </div>
          </div>
        ) : (
          <div className="project-hero-image-wrap">
            <img src={projectData.image} alt={projectData.title} className="project-image" />
          </div>
        )}
      </section>

      <DetailCards projectData={projectData} />

      <CaseStudyStructure projectData={projectData} />

      {projectData.isScw && (
        <>
          <section className="project-section scw-artifacts scw-persona-section">
            <p className="project-kicker">User Personas</p>
            <h2>Audience needs before page layout.</h2>
            <div className="scw-artifact-grid">
              {[
                { title: "Persona 01", img: scwPersona },
                { title: "Persona 02", img: scwPersonaTwo },
              ].map((item) => (
                <figure className="scw-artifact-card" key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="project-section scw-artifacts scw-sitemap-section">
            <p className="project-kicker">Sitemap and Facets</p>
            <h2>Navigation structure and homepage priorities.</h2>
            <div className="scw-artifact-grid scw-single-artifact">
              <figure className="scw-artifact-card">
                <img src={scwSitemap} alt="SCW sitemap and homepage facets" />
                <figcaption>Sitemap and homepage facets</figcaption>
              </figure>
            </div>
          </section>

          <section className="project-section scw-wireframes">
            <p className="project-kicker">Low-Fidelity Wireframes</p>
            <h2>Page 01 through Page 13.</h2>
            <div className="scw-wireframe-grid">
              {scwWireframes.map((wire, index) => (
                <figure className="scw-wireframe-card" key={wire}>
                  <img src={wire} alt={`SCW low-fidelity wireframe page ${index + 1}`} />
                  <figcaption>Page {index + 1}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="project-section scw-artifacts scw-logo-section">
            <p className="project-kicker">Logo and Identity</p>
            <h2>The SCW Warrior visual anchor.</h2>
            <div className="scw-artifact-grid">
              {[
                { title: "SCW Logo", img: scwLogo },
                { title: "Full Logo Display", img: scwFullDisplay },
              ].map((item) => (
                <figure className="scw-artifact-card" key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <StyleGuideSection
            className="scw-brand-system"
            kicker="Brand Design System"
            title="SCW visual rules behind the website."
            description="The SCW Brand Design System connects the charity tone, logo usage, colors, and reusable visual rules behind the website experience."
            pdf={projectData.brandGuidePdf}
            filename="SCW-BRAND-DESIGN-SYSTEM.pdf"
            swatches={[
              { name: "Warrior Plum", color: "#690b22" },
              { name: "Warm Cream", color: "#fff3e8" },
              { name: "Peach Accent", color: "#ffb38e" },
              { name: "Mint Support", color: "#9bcfc2" },
            ]}
            notes={[
              "Warm maroon/plum, cream, peach, and mint accents support a compassionate charity tone.",
              "The brand system connects logo direction, audience needs, sitemap structure, and the full-page website.",
              "Reusable guidance keeps campaign, website, and outreach materials visually consistent.",
            ]}
          />
        </>
      )}

      {projectData.isTimmyCare && (
        <section className="project-section timmycare-research">
          <p className="project-kicker">UX Research Foundation</p>
          <h2>Research artifacts before the prototype.</h2>

          <div className="timmycare-logo-panel">
            <img src={timmyCareResearch.logo} alt="TimmyHairCare logo" />
            <p>Research, structure, and wireframes supporting the TimmyHairCare app redesign.</p>
          </div>

          <div className="timmycare-pdf-grid">
            {timmyCareResearch.researchMaps.map((doc) => (
              <article className="timmycare-pdf-card" key={doc.title}>
                <h3>{doc.title}</h3>
                {doc.src ? (
                  <>
                    <iframe src={doc.src} title={doc.title}></iframe>
                    <a href={doc.src} target="_blank" rel="noreferrer">Open PDF ↗</a>
                  </>
                ) : (
                  <p className="timmycare-file-note">
                    The original {doc.title.toLowerCase()} PDF is not currently present in this restored workspace.
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="timmycare-image-grid">
            {[...timmyCareResearch.empathyMaps, ...timmyCareResearch.personas, ...timmyCareResearch.scenarios].map((item) => (
              <figure className="timmycare-research-card" key={item.title}>
                <img src={item.src} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>

          {timmyCareResearch.lowFi.length > 0 && (
            <div className="timmycare-lowfi-grid">
              {timmyCareResearch.lowFi.map((item) => (
                <figure className="timmycare-lowfi-card" key={item.title}>
                  <img src={item.src} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      )}

      {projectData.isRon && (
        <>
          <section className="project-section ron-artifact-section">
            <p className="project-kicker">Logo Redesign</p>
            <h2>Strength, balance, and unity, one unified mark.</h2>
            <p className="ron-section-note">
              The new Ron Zalko logo brings together a yoga pose, a weighted arm,
              and a unity symbol, forming a single identity that captures what the
              brand stands for: Unity, Balance, Power.
            </p>
            <div className="ron-logo-showcase">
              <div className="ron-logo-card">
                <img src={ronLogo} alt="New Ron Zalko logo" />
                <span>New Ron Zalko Logo - 2024 Rebrand</span>
              </div>
              <div className="ron-logo-compare">
                <a
                  href={projectData.oldSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ron-old-site-link"
                >
                  View Old Website & Logo ↗
                </a>
                <p>
                  The previous identity lacked cohesion and modern fitness brand
                  presence. The redesign unifies all three brand values into a
                  single logo mark.
                </p>
              </div>
            </div>
          </section>

          <section className="project-section ron-wireframe-section">
            <div className="ron-section-headline">
              <div>
                <p className="project-kicker">Wireframes and Mockups</p>
                <h2>High-fidelity website screens from Page 01 through Page 12.</h2>
              </div>
              <p>
                The mockup sequence translates the sitemap into a complete web experience:
                hero messaging, programs, pricing, product touchpoints, newsletter capture,
                and contact flow are all presented as a cohesive responsive system.
              </p>
            </div>

            <div className="ron-wireframe-grid">
              {ronWireframeGallery.map((item) => (
                <figure className="ron-wireframe-card" key={item.title}>
                  <img src={item.image} alt={`Ron Zalko ${item.title}`} />
                  <figcaption>
                    <span>{item.title}</span>
                    <p>{item.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="project-section ron-artifact-section">
            <p className="project-kicker">Poster Ad Design</p>
            <h2>Unity. Balance. Power. in print.</h2>
            <div className="ron-poster-showcase">
              <figure className="ron-poster-card">
                <img src={ronPoster} alt="Ron Zalko poster ad design" />
                <figcaption>Ron Zalko Fitness - Personal Trainer Poster Ad</figcaption>
              </figure>
              <div className="ron-poster-copy">
                <p>
                  The poster applies the new brand direction at full scale. The
                  Ron Zalko logo sits within a dynamic wave layout with Unity,
                  Balance, Power leading the message and the fitness brand
                  photography grounding it.
                </p>
                <ul>
                  <li>Brand colour system applied across the wave composition</li>
                  <li>Logo placed within a real-world print context</li>
                  <li>Movement line wave mirrors the website redesign direction</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="project-section ron-collateral-section">
            <div className="ron-section-headline">
              <div>
                <p className="project-kicker">Brand Collateral</p>
                <h2>Cards, stationery, and operational brand touchpoints.</h2>
              </div>
              <p>
                The collateral system turns the refreshed identity into practical
                deliverables staff can use every day: trainer contact cards,
                client-facing stationery, branded invoices, and campaign material.
              </p>
            </div>
            <div className="ron-insight-grid">
              <article>
                <span>01</span>
                <h3>Recognition</h3>
                <p>Repeated logo placement and red/black contrast make the brand easy to identify across every item.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Consistency</h3>
                <p>The same typography rhythm, wave motif, and spacing language connect print and digital assets.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Utility</h3>
                <p>Business cards, invoice, and envelope support real communication needs beyond the website launch.</p>
              </article>
            </div>
            <div className="ron-collateral-grid">
              {ronBrandCollateral.map((item) => (
                <figure className="ron-collateral-card" key={item.title}>
                  <img src={item.image} alt={`Ron Zalko ${item.title}`} />
                  <figcaption>
                    <span>{item.title}</span>
                    <p>{item.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="project-section ron-artifact-section">
            <div className="ron-section-headline">
              <div>
                <p className="project-kicker">User Flow</p>
                <h2>How users move from discovery to membership action.</h2>
              </div>
              <p>
                The flow defines a clearer journey for new visitors and returning
                members, connecting homepage orientation, program discovery,
                pricing evaluation, and final sign-up moments.
              </p>
            </div>
            <figure className="ron-userflow-card">
              <img src={ronUserFlow} alt="Ron Zalko user flow diagram" />
              <figcaption>User flow - from homepage landing to membership decision</figcaption>
            </figure>
            <div className="ron-insight-grid ron-userflow-insights">
              <article>
                <span>Entry</span>
                <h3>Clear first decision</h3>
                <p>Homepage pathways guide users toward programs, classes, pricing, or contact without forcing a long search.</p>
              </article>
              <article>
                <span>Explore</span>
                <h3>Better evaluation</h3>
                <p>Program and trainer pages help visitors compare options before they commit to a trial or membership.</p>
              </article>
              <article>
                <span>Convert</span>
                <h3>Direct action path</h3>
                <p>Pricing and sign-up actions stay close to the content that builds confidence and intent.</p>
              </article>
            </div>
          </section>

          <section className="live-site-section ron-prototype-section">
            <div className="live-site-head">
              <div>
                <p className="project-kicker">Adobe XD Prototype</p>
                <h2>Prototype of the redesigned Ron Zalko website.</h2>
                <p className="live-site-note">
                  The prototype shows the full redesigned experience: improved
                  navigation, modern layout, and the new brand system in action.
                </p>
              </div>
              <a href={projectData.prototypeUrl} target="_blank" rel="noreferrer" className="project-doc-link">
                Open Prototype ↗
              </a>
            </div>
            <iframe
              src={projectData.prototypeEmbedUrl}
              title="Ron Zalko Adobe XD prototype"
              className="project-live-frame"
              allowFullScreen
            />
          </section>

          <StyleGuideSection
            className="ron-pdf-section"
            kicker="Style Guide"
            title="Ron zalko style-guide.pdf"
            description="The vertical PDF preview documents the redesign process: brief, problem analysis, research, competitive analysis, personas, empathy map, journey map, user flow, redesign goals, wireframes, collateral, and results."
            pdf={projectData.styleGuidePdf}
            filename={projectData.styleGuideFilename}
            swatches={[
              { name: "Ron Crimson", color: "#c41e3a" },
              { name: "Deep Red", color: "#8b1a1a" },
              { name: "Fitness Black", color: "#0a0a0a" },
              { name: "Clean White", color: "#ffffff" },
            ]}
            notes={[
              "Logo redesign unifies strength, balance, and unity in one mark.",
              "The website redesign improves navigation, hierarchy, and membership decision flow.",
              "Cards, envelope, invoice, poster, and PDF documentation keep the identity consistent across touchpoints.",
            ]}
          />
        </>
      )}

      {projectData.isMelody && (
        <section className="project-section melody-brand-sections">
          <p className="project-kicker">Melody Beats Items</p>
          <h2>Logo, business cards, poster cards, and package design.</h2>
          <div className="melody-section-grid">
            {[
              {
                title: "Logo Sketches and Final Designs",
                tool: "Designed in Photoshop",
                description: "Sketch exploration, waveform concepts, logo variations, and final Melody Beats marks.",
                images: melodyLogoSystem,
              },
              {
                title: "Business Card System",
                tool: "Designed in Photoshop",
                description: "Front and back card applications using the Melody blue, coral, teal, and warm gold palette.",
                images: melodyBusinessCards,
              },
              {
                title: "Poster Card System",
                tool: "Designed in Photoshop",
                description: "Promotional poster cards for the headphone/music campaign and postcard-style brand touchpoints.",
                images: melodyPostcards,
              },
              {
                title: "Product Package Design",
                tool: "Designed with Adobe After Effects",
                description: "Headphone product visuals, package mockups, unfolded box artwork, and final branded items.",
                images: melodyProductDesign,
              },
            ].map((section) => (
              <article className="melody-item-card" key={section.title}>
                <div className="melody-item-images">
                  {section.images.map((image) => (
                    <img src={image} alt={section.title} key={image} />
                  ))}
                </div>
                <p className="project-kicker">{section.tool}</p>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {projectData.isAstro && projectData.liveUrl && (
        <>
          <section className="project-section astro-upgrade-section">
            <p className="project-kicker">Upgrade Summary</p>
            <h2>What changed across the AstroMatch product.</h2>
            <div className="astro-upgrade-grid">
              {astroUpgradeGroups.map((group) => (
                <article className="astro-upgrade-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="live-site-section astro-live-section">
            <div className="live-site-head">
              <div>
                <p className="project-kicker">Live App Display</p>
                <h2>Interact with the AstroMatch app build.</h2>
                <p className="live-site-note">The live preview shows the upgraded product experience and lets visitors explore the app directly.</p>
              </div>
              <a href={projectData.liveUrl} target="_blank" rel="noreferrer" className="project-doc-link">
                Open Live App ↗
              </a>
            </div>
            <iframe src={projectData.liveUrl} title="AstroMatch live app" className="project-live-frame" />
          </section>
        </>
      )}

      {projectData.scrollImages && !projectData.isRon && (
        <ScrollBrowse
          title={projectData.scrollBrowseTitle}
          text={projectData.scrollBrowseText}
          images={projectData.scrollImages}
          theme={projectData.isTimmyCare ? "timmycare-scroll" : ""}
        />
      )}

      {projectData.isMotion && (
        <>
          <section className="motion-process-section">
            <div className="motion-process-head">
              <p className="motion-section-kicker">Motion Process</p>
              <h2>How the intro bumper was built.</h2>
            </div>

            <div className="motion-process-grid">
              {projectData.motionProcess.map((item) => (
                <article className="motion-process-card" key={item.title}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="motion-delivery-section">
            <p className="motion-section-kicker">Technical Delivery</p>
            <h2>Final video prepared for web playback.</h2>
            <div className="motion-delivery-grid">
              {projectData.deliveryNotes.map((note) => (
                <div className="motion-delivery-note" key={note}>
                  <span></span>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {projectData.isKvdst && (
        <>
          <section className="live-site-section kvdst-live-section">
            <div className="live-site-head">
              <div>
                <p className="project-kicker">Live Preview</p>
                <h2>KVDST live site preview.</h2>
                <p className="live-site-note">
                  The iframe uses the live URL first. The local code backup is included and can be opened if the live host is down.
                </p>
              </div>

              <div className="kvdst-live-actions">
                <a href={projectData.liveUrl} target="_blank" rel="noreferrer" className="project-doc-link">
                  Open Live Site ↗
                </a>
                {projectData.previewUrl && (
                  <a href={projectData.previewUrl} target="_blank" rel="noreferrer" className="project-doc-link kvdst-backup-link">
                    Open Backup Code Site ↗
                  </a>
                )}
              </div>
            </div>

            {projectData.liveUrl || projectData.previewUrl ? (
              <iframe src={projectData.liveUrl || projectData.previewUrl} title={projectData.title} className="project-live-frame" />
            ) : (
              <div className="kvdst-live-placeholder">
                <img src={projectData.logo} alt="KVDST logo" />
                <p>Preview files are not currently present in this restored workspace.</p>
              </div>
            )}
          </section>

          <section className="project-section kvdst-process-section">
            <p className="project-kicker">Case Study Framework</p>
            <h2>KVDST redesign from strategy to delivery.</h2>
            <div className="kvdst-framework-layout">
              <div className="kvdst-framework-grid">
                {kvdstFramework.map((item) => (
                  <article key={item.title}>
                    <span>{item.phase}</span>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <aside className="kvdst-ux-panel">
                <p className="project-kicker">UX Upgrades</p>
                <h3>What was improved in the experience</h3>
                <ul>
                  {kvdstUxUpgrades.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          <StyleGuideSection
            className="kvdst-pdf-section"
            kicker="Style Guide"
            title="KVDST record label style guide."
            description="The KVDST style-guide preview frames the record-label identity with the same document treatment used for the SCW brand-system section."
            pdf={projectData.styleGuide}
            filename="KVDST-record-label-style-guide.pdf"
            swatches={[
              { name: "KVDST Blue", color: "#29abe2" },
              { name: "Stage Black", color: "#020406" },
              { name: "Electric Cyan", color: "#d8f5ff" },
              { name: "Soft White", color: "#f4fff1" },
            ]}
            notes={[
              "Black and blue create a stage-like identity that matches the music label direction.",
              "The PDF section now includes a framed preview, document bar, open-PDF button, and brand swatches.",
              "The case study keeps the live-site link, code showcase, and brand documentation in one flow.",
            ]}
          />

          <section className="project-section kvdst-code-section">
            <p className="project-kicker">Implementation</p>
            <h2>Code structure and backup architecture.</h2>
            <p className="kvdst-code-note">
              The implementation model supports public live hosting and a mirrored local backup build for continuity.
            </p>
            <div className="kvdst-code-grid">
              {["HTML", "CSS", "JavaScript"].map((label) => (
                <article className="kvdst-code-card" key={label}>
                  <h3>{label}</h3>
                  <pre><code>{kvdstCodeSamples[label]}</code></pre>
                </article>
              ))}
            </div>
          </section>

          <section className="project-section kvdst-quality-section">
            <p className="project-kicker">Delivery Quality</p>
            <h2>Professional release signals.</h2>
            <div className="kvdst-quality-grid">
              {kvdstQualitySignals.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      <footer className="project-detail-footer">
        <div>
          <p className="project-kicker">Next Step</p>
          <h2>Keep exploring the work.</h2>
          <p>
            Move through the project library, view another case study, or reach
            out if the work connects with what you’re building.
          </p>
        </div>

        <div className="project-footer-actions">
          <Link to="/work">Back to Project Library</Link>
          <Link to={`/projects/${nextProjectId}`}>Next Project →</Link>
          <Link to="/contact" className="tb-btn tb-btn-primary">
            Let’s Work Together ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}
