import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetailPage.css";

import ronzalko from "../assets/Ron Zalko web design.jpg";
import ronLogo from "../assets/Ron-Zalko-Logo.png";
import ronPoster from "../assets/Ron Zalko zoster.jpg";
import ronUserFlow from "../assets/User flow for ron zalko fitness web redesignn.png";
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
import melodyBusinessCard3 from "../assets/melody-beats-buisness-card-3.jpg";
import melodyBusinessCard4 from "../assets/melody-beats-buisness-card-4.jpg";
import melodyBusinessCard5 from "../assets/melody-beats-buisness-card-5.jpg";
import melodyBusinessCard6 from "../assets/melody-beats-buisness-card-6.jpg";
import melodyBusinessCardMain1 from "../assets/Melody-Beats- Buisness-Card-Main-1.jpg";
import melodyBusinessCardMain2 from "../assets/Melody-Beats- Buisness-Card-Main-2.jpg";
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
import melodyLogoSketchesConcept from "../assets/melody-beats-logo-sketches-concept.jpg";
import melodyLogoBlue from "../assets/melody-beats-logo-blue.png";
import melodyLogoBlueAlt from "../assets/melody-beats-logo-blue-2.png";
import melodyLogoOrange from "../assets/melody-beats-logo-orange-1.png";
import melodyLogoOrangeAlt from "../assets/melody-beats-logo-Orange-2.png";
import melodyLogoTextOption1 from "../assets/melody-beats-logo-text-option-1.png";
import melodyLogoTextOption2 from "../assets/melody-beats-logo-text-option-2.png";
import melodyPackageDesign from "../assets/melody-beats-package-design-1.png";
import melodyProductBox from "../assets/melody-beats-package-design-2.jpg";
import melodyHeadphoneItem from "../assets/Melody-beats-headphone-item-1.jpg";
import melodyPlushieItem from "../assets/melody-beats-plushie-item-2.jpg";
import timmyhaircare from "../assets/timmyhaircare4.jpg";
import timmyhaircare1 from "../assets/timmyhaircare1.jpg";
import timmyhaircare2 from "../assets/timmyhaircare2.jpg";
import timmyhaircare3 from "../assets/timmyhaircare3.jpg";
import timmyLogo from "../assets/Tc_logo.png";
import timmyProductPage from "../assets/Product Page for timmyhaircare.png";
import timmyWishlist from "../assets/Wishlist Screen for timmyhaircare.jpg";
import timmyJourneyMapPdf from "../assets/timmyhaircare-journeymap.pdf";
import timmySitemapPdf from "../assets/timmycare-sitemap.pdf";
import timmyUserFlowPdf from "../assets/timmycare-userflow.pdf";
import timmyEmpathyMaya from "../assets/timmyhaircare-empathy map for maya.jpg";
import timmyEmpathyTimmy from "../assets/timmyhaircare-empathy map for timmy.jpg";
import timmyGrayBlackLogo from "../assets/timmyhaircare-gray and black.png";
import timmyLowFi1 from "../assets/timmyhaircare-low fidelity-mockup-1.jpg";
import timmyLowFi2 from "../assets/timmyhaircare-low fidelity-mockup-2.jpg";
import timmyLowFi3 from "../assets/timmyhaircare-low fidelity-mockup-3.jpg";
import timmyLowFi4 from "../assets/timmyhaircare-low fidelity-mockup-4.jpg";
import timmyLowFi5 from "../assets/timmyhaircare-low fidelity-mockup-5.jpg";
import timmyLowFi6 from "../assets/timmyhaircare-low fidelity-mockup-6.jpg";
import timmyPersona1 from "../assets/timmyhaircare-user persona-1.jpg";
import timmyPersona2 from "../assets/timmyhaircare-user persona-2.jpg";
import timmyBrandGuide1 from "../assets/timicare-hair-brand-2_Page_01.jpg";
import timmyBrandGuide2 from "../assets/timicare-hair-brand-2_Page_02.jpg";
import timmyBrandGuide3 from "../assets/timicare-hair-brand-2_Page_03.jpg";
import timmyBrandGuide4 from "../assets/timicare-hair-brand-2_Page_04.jpg";
import timmyBrandGuide5 from "../assets/timicare-hair-brand-2_Page_05.jpg";
import timmyBrandGuide6 from "../assets/timicare-hair-brand-2_Page_06.jpg";
import timmyBrandGuide7 from "../assets/timicare-hair-brand-2_Page_07.jpg";
import timmyBrandGuide8 from "../assets/timicare-hair-brand-2_Page_08.jpg";
import timmyBrandGuide9 from "../assets/timicare-hair-brand-2_Page_09.jpg";
import timmyBrandGuide10 from "../assets/timicare-hair-brand-2_Page_10.jpg";
import timmyBrandGuide11 from "../assets/timicare-hair-brand-2_Page_11.jpg";
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
import astroGuideA from "../assets/astro-match-app_Page_0a.jpg";
import astroGuideB from "../assets/astro-match-app_Page_0b.jpg";
import astroGuideC from "../assets/astro-match-app_Page_0c.jpg";
import astroGuideD from "../assets/astro-match-app_Page_0d.jpg";
import astroGuideE from "../assets/astro-match-app_Page_0e.jpg";
import astroGuideF from "../assets/astro-match-app_Page_0f.jpg";
import astroGuideG from "../assets/astro-match-app_Page_0g.jpg";
import astroGuideH from "../assets/astro-match-app_Page_0h.jpg";
import astroGuideI from "../assets/astro-match-app_Page_0i.jpg";
import astroGuideJ from "../assets/astro-match-app_Page_0j.jpg";
import astroGuideK from "../assets/astro-match-app_Page_0k.jpg";
import astroHighFi1 from "../assets/Astro-Match-App_Page_1.jpg";
import astroHighFi2 from "../assets/Astro-Match-App_highfideliity-wireframe_2.jpg";
import astroHighFi3 from "../assets/Astro-Match-App_highfideliity-wireframe_3.jpg";
import astroHighFi4 from "../assets/Astro-Match-App_highfideliity-wireframe_4.jpg";
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
  melodyLogoSketchesConcept,
  melodyDoc3,
  melodyDoc4,
  melodyDoc5,
  melodyDoc6,
  melodyLogoBlue,
  melodyLogoBlueAlt,
  melodyLogoOrange,
  melodyLogoOrangeAlt,
  melodyLogoTextOption1,
  melodyLogoTextOption2,
];

const melodyBusinessCards = [
  melodyBusinessCardMain1,
  melodyBusinessCardMain2,
  melodyBusinessCard1,
  melodyBusinessCard2,
  melodyBusinessCard3,
  melodyBusinessCard4,
  melodyBusinessCard5,
  melodyBusinessCard6,
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
  melodyPackageDesign,
  melodyProductBox,
  melodyPackageUnfolded,
  melodyHeadphoneItem,
  melodyPlushieItem,
];

const timmyCareBrandGuide = [
  { title: "Cover", note: "TimmyCare brand guide opening page.", image: timmyBrandGuide1 },
  { title: "Welcome", note: "Brand mission and visual introduction.", image: timmyBrandGuide2 },
  { title: "Values", note: "Brand values and identity applications.", image: timmyBrandGuide3 },
  { title: "Audience", note: "Target audience and product positioning.", image: timmyBrandGuide4 },
  { title: "Team", note: "Designer and project background.", image: timmyBrandGuide5 },
  { title: "Competitive Analysis", note: "Product concept strengths and gaps.", image: timmyBrandGuide6 },
  { title: "Typography", note: "Type hierarchy and brand font system.", image: timmyBrandGuide7 },
  { title: "Logo", note: "Logo construction and usage rules.", image: timmyBrandGuide8 },
  { title: "Color Palette", note: "Burgundy, coral, green, and blush palette.", image: timmyBrandGuide9 },
  { title: "App Screens", note: "High-fidelity mobile app presentation.", image: timmyBrandGuide10 },
  { title: "Thank You", note: "Closing brand-guide page.", image: timmyBrandGuide11 },
];

const timmyCareLowFi = [
  { title: "Low-Fidelity Home", src: timmyLowFi1 },
  { title: "Low-Fidelity Cart", src: timmyLowFi2 },
  { title: "Low-Fidelity Product Grid", src: timmyLowFi3 },
  { title: "Low-Fidelity Checkout", src: timmyLowFi4 },
  { title: "Low-Fidelity Product Detail", src: timmyLowFi5 },
  { title: "Low-Fidelity Wishlist", src: timmyLowFi6 },
];

const timmyCareFinalScreens = [
  { title: "Home and Brand Entry", src: timmyhaircare },
  { title: "Product Detail", src: timmyhaircare1 },
  { title: "Product List", src: timmyhaircare2 },
  { title: "Checkout Flow", src: timmyhaircare3 },
];

const astroHighFidelityMockups = [
  {
    title: "Launch and Horoscope Entry",
    note: "Illustrator high-fidelity direction showing the logo, zodiac set, and primary app feature labels.",
    image: astroHighFi1,
  },
  {
    title: "Create Account Flow",
    note: "High-fidelity onboarding form direction for profile setup and personal information capture.",
    image: astroHighFi2,
  },
  {
    title: "Feed Card Direction",
    note: "A content card exploration for zodiac tags, author hierarchy, comments, and reactions.",
    image: astroHighFi3,
  },
  {
    title: "Daily Horoscope Feed",
    note: "Scrollable feed direction showing repeated horoscope posts, engagement counts, and action controls.",
    image: astroHighFi4,
  },
];

const astroProjectGuide = [
  { title: "Project Overview", note: "Concept opening, logo direction, and presentation context.", image: astroGuideA },
  { title: "Audience and Value", note: "Target audience and value proposition for the astrology dating experience.", image: astroGuideB },
  { title: "Monetization Strategy", note: "Freemium model, premium subscription, in-app ads, and partnership thinking.", image: astroGuideC },
  { title: "App Features", note: "Core feature set including zodiac matching, profiles, compatibility, and horoscopes.", image: astroGuideD },
  { title: "User Workflows", note: "Onboarding and repeat-use path from sign-up to profile engagement.", image: astroGuideE },
  { title: "Wireframes and Prototype", note: "Early app screen planning and development lifecycle framing.", image: astroGuideF },
  { title: "Competitive Space", note: "Dating and horoscope app comparison with market positioning.", image: astroGuideG },
  { title: "App Details", note: "Onboarding approach, primary views, and navigation pattern planning.", image: astroGuideH },
  { title: "Data Requirements", note: "Birthdate, zodiac, preferences, and astrology API requirements.", image: astroGuideI },
  { title: "Team Requirements", note: "Project roles needed across development, design, astrology, marketing, and product.", image: astroGuideJ },
  { title: "Development Approach", note: "First iteration plan from validation through launch preparation.", image: astroGuideK },
];

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
    snapshot: ["Music brand identity system", "Logo sketches, final marks, business cards, postal cards, and package design", "Deep blue, coral, teal, olive, and pink Melody palette"],
    context: "Melody Beats needed a cohesive music identity that could feel energetic on promotional pieces while still working across practical brand collateral and product packaging.",
    process: ["Explored logo sketches around waveforms, rhythm, motion, and the Melody name.", "Refined final logo directions and built a color system for deep blue, coral, teal, olive, pink, and orange applications.", "Applied the identity across business cards, postal cards, headphone visuals, branded items, and product package mockups."],
    delivery: "Delivered a detailed brand-system case study with a slider for the full design system and grouped sections for logo work, business cards, postal cards, and product/package design.",
  },
  "3": {
    snapshot: ["Mobile app redesign", "Brand guide, UX research, sitemap, user flow, and low-fidelity wireframes", "Burgundy, coral, green, cream, and blush TimmyCare palette"],
    context: "TimmyCare needed a clearer haircare shopping experience for African Americans in Vancouver, supported by research, brand direction, and a mobile-first product flow.",
    process: ["Mapped personas, empathy maps, scenarios, journey map, sitemap, and user flow.", "Moved from low-fidelity wireframes into final mobile screens.", "Connected the brand guide, research structure, and interface presentation through the TimmyCare palette."],
    delivery: "Delivered a complete app redesign case study with a brand-guide browser, research artifacts, sitemap, user flow, low-fidelity wireframes, and final screens.",
  },
  "4": {
    snapshot: ["Charity website case study", "Personas, sitemap, wireframes, logo, full-page preview, and brand system", "Warm, accessible SCW visual language"],
    context: "SCW needed a warmer, clearer charity website structure that made audience needs, navigation, and brand consistency visible.",
    process: ["Built personas and sitemap before wireframes.", "Prepared the full-page website as the scrollable hero preview.", "Connected logo, color, and brand-system rules to the page UI."],
    delivery: "Delivered a full SCW case study with website preview, research artifacts, wireframes, and embedded brand design system PDF.",
  },
  "5": {
    snapshot: ["Astrology dating app", "Illustrator high-fidelity mockups, product guide, and live app UI", "Compatibility, discovery, profiles, messaging, favorites, guide, and subscription flows"],
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
  { title: "Site Map", note: "Navigation and page-path planning", image: ronUserFlow },
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
  alternateLogo: timmyGrayBlackLogo,
  researchMaps: [
    { title: "Sitemap", type: "PDF", src: timmySitemapPdf },
    { title: "Journey Map", type: "PDF", src: timmyJourneyMapPdf },
    { title: "User Flow", type: "PDF", src: timmyUserFlowPdf },
  ],
  empathyMaps: [
    { title: "Empathy Map for Maya", src: timmyEmpathyMaya },
    { title: "Empathy Map for Timmy", src: timmyEmpathyTimmy },
  ],
  personas: [
    { title: "User Persona 01", src: timmyPersona1 },
    { title: "User Persona 02", src: timmyPersona2 },
  ],
  scenarios: [
    { title: "Product Page Scenario", src: timmyProductPage },
    { title: "Wishlist Scenario", src: timmyWishlist },
  ],
  lowFi: timmyCareLowFi,
  finalScreens: timmyCareFinalScreens,
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
    scrollBrowseTitle: "Redesign System",
    scrollBrowseText: "Scroll through the visual system.",
    scrollBrowseSubtext: "Logo, sitemap, wireframes, and collateral.",
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
    image: melodyProductBox,
    technicalInfo: "Brand Identity • Photoshop • Adobe After Effects",
    overview: "A Melody Beats branding project case study for a music-focused product system. The work covers logo sketches and final designs, business cards, postal cards, branded items, and product/package design.",
    challenges: "The challenge was making the identity feel sonic, energetic, and vibrant while still staying consistent across practical collateral, campaign cards, brand documentation, and product packaging.",
    outcome: "The final brand system presents Melody Beats as a complete music identity with a waveform logo, deep blue/coral/teal/olive/pink palette, business card system, postal-card campaign direction, and package/product design.",
    details: [
      "Replaced the older Melody document/gallery treatment with a brand-system design slider for the case study flow.",
      "Grouped the project into Logo System, Business Cards, Postal Cards, and Product/Package Design sections.",
      "Featured the Melody Beats logo, business cards, campaign cards, package artwork, headphone visual, and branded item directly on the page.",
      "Applied the Melody Beats deep blue, coral, teal, olive, and pink palette across the case study page, project card, and light/dark theme treatments.",
    ],
    scrollBrowseTitle: "Brand System",
    scrollBrowseText: "Scroll through the visual system.",
    scrollBrowseSubtext: "Logo, color, typography, cards, and packaging.",
    scrollBrowseAction: "Browse system →",
    scrollImages: melodyBrandSystem,
    isMelody: true,
  },
  {
    id: "3",
    title: "TimmyCare App Redesign",
    category: "UI/UX",
    image: timmyhaircare,
    technicalInfo: "Mobile UI • UX Research • Brand Guide",
    overview: "A mobile app redesign for a haircare shopping experience, combining brand direction, research artifacts, sitemap, user flow, low-fidelity wireframes, and final screens.",
    challenges: "The challenge was turning research needs into a clearer shopping flow while keeping the interface warm, usable, and consistent with the TimmyCare identity.",
    outcome: "The case study now presents TimmyCare as a fuller UX project: brand guide, empathy maps, personas, journey map, sitemap, user flow, low-fidelity wireframes, and final app screens.",
    details: [
      "Replaced the old generic project-file treatment with a TimmyCare brand-guide browser.",
      "Added empathy maps, user personas, user scenarios, journey map, sitemap, and user flow support.",
      "Added six low-fidelity wireframes and four final mobile app screens as dedicated visual sections.",
      "Removed the Adobe XD prototype embed so the section can be replaced with the code-based app demonstration.",
      "Applied TimmyCare cream, blush, burgundy, coral, and green styling across light and dark modes.",
    ],
    scrollBrowseTitle: "Brand Guide",
    scrollBrowseText: "Scroll through the TimmyCare brand guide.",
    scrollBrowseSubtext: "Identity, audience, values, typography, color, and app direction.",
    scrollBrowseAction: "Browse guide →",
    scrollImages: timmyCareBrandGuide,
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
      "Reworked the low-fidelity wireframes into a tab/card presentation with a direct image frame.",
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
      "Added Illustrator high-fidelity mockups and the full project guide assets as dedicated presentation sections.",
    ],
    liveUrl: "http://website-b862f62d.pef.fai.mybluehost.me/",
    highFidelityMockups: astroHighFidelityMockups,
    projectGuide: astroProjectGuide,
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

function ProjectSectionNav({ projectData }) {
  const sharedItems = [
    { href: "#overview", label: "Overview" },
    { href: "#project-details", label: "Details" },
    { href: "#case-study", label: "Process" },
  ];

  const projectItems = {
    "1": [
      { href: "#redesign-system", label: "System" },
      { href: "#logo", label: "Logo" },
      { href: "#wireframes", label: "Wireframes" },
      { href: "#collateral", label: "Collateral" },
      { href: "#user-flow", label: "User Flow" },
      { href: "#prototype", label: "Prototype" },
      { href: "#style-guide", label: "Style Guide" },
    ],
    "2": [
      { href: "#brand-system", label: "Brand System" },
      { href: "#deliverables", label: "Deliverables" },
    ],
    "3": [
      { href: "#brand-guide", label: "Brand Guide" },
      { href: "#ux-research", label: "Research" },
      { href: "#sitemap", label: "Sitemap" },
      { href: "#user-flow", label: "User Flow" },
      { href: "#wireframes", label: "Wireframes" },
      { href: "#final-screens", label: "Final Screens" },
      { href: "#prototype", label: "Prototype" },
    ],
    "4": [
      { href: "#personas", label: "Personas" },
      { href: "#sitemap", label: "Sitemap" },
      { href: "#wireframes", label: "Wireframes" },
      { href: "#logo", label: "Logo" },
      { href: "#brand-system", label: "Brand System" },
    ],
    "5": [
      { href: "#high-fidelity", label: "Mockups" },
      { href: "#project-guide", label: "Guide" },
      { href: "#upgrades", label: "Upgrades" },
      { href: "#live-app", label: "Live App" },
    ],
    "6": [
      { href: "#motion-process", label: "Process" },
      { href: "#technical-delivery", label: "Delivery" },
    ],
    "7": [
      { href: "#live-preview", label: "Live Preview" },
      { href: "#framework", label: "Framework" },
      { href: "#style-guide", label: "Style Guide" },
      { href: "#implementation", label: "Code" },
      { href: "#quality", label: "Quality" },
    ],
  };

  const items = [...sharedItems, ...(projectItems[projectData.id] ?? []), { href: "#contact", label: "Contact" }];

  return (
    <nav className="project-page-nav" aria-label={`${projectData.title} section navigation`}>
      {items.map((item) => (
        <a href={item.href} key={`${projectData.id}-${item.href}`}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function ScrollBrowse({ id, title, text, subtext, actionLabel, images, theme = "" }) {
  if (!images?.length) return null;

  return (
    <section className={`project-section scroll-browse-section ${theme}`} id={id}>
      <div className="scroll-browse-head">
        <div>
          <p className="project-kicker">{title}</p>
          <h2>{text}</h2>
          {subtext && <p className="scroll-browse-subtext">{subtext}</p>}
        </div>
        {actionLabel && <span className="scroll-browse-action">{actionLabel}</span>}
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

function ScwWireframeTabs({ wireframes }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWireframe = wireframes[activeIndex];

  return (
    <div className="scw-wireframe-tabs">
      <div className="scw-wireframe-tab-list" role="tablist" aria-label="SCW low-fidelity wireframe pages">
        {wireframes.map((wire, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            key={wire}
          >
            Wireframe {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      <figure className="scw-wireframe-feature-card">
        <img src={activeWireframe} alt={`SCW low-fidelity wireframe ${activeIndex + 1}`} />
        <figcaption>
          <span>Selected Wireframe</span>
          <h3>Screen structure {String(activeIndex + 1).padStart(2, "0")}</h3>
          <p>Low-fidelity layout card focused on page structure, hierarchy, and content flow.</p>
        </figcaption>
      </figure>
    </div>
  );
}

function RonHeroBrowser({ images }) {
  return (
    <div className="ron-hero-browser" id="redesign-system" aria-label="Ron Zalko wireframes and design explorations">
      <div className="ron-hero-browser-head">
        <div className="ron-scroll-indicator">
          <span></span>
          <p>Browse →</p>
        </div>
        <div className="ron-hero-head-copy">
          <span>Redesign System</span>
          <p>Scroll through the visual system.</p>
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
    <section className="project-case-study-flow" id="case-study" aria-label="Shared case study structure">
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
  id,
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
    <section className={`project-section style-guide-section ${className}`} id={id}>
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
    <section className={`cards-container ${isKvdst ? "kvdst-cards-container" : ""}`} id="project-details">
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

        <Link to={`/projects/${nextProjectId}`} className="project-nav-indicator project-next-indicator">
          <div className="project-nav-line"></div>
          <div className="project-nav-content">
            <span className="project-nav-arrow">→</span>
            <p>View Next Project</p>
          </div>
        </Link>
      </nav>

      <ProjectSectionNav projectData={projectData} />

      <section className="project-hero" id="overview">
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

      {projectData.isMelody && projectData.scrollImages && (
        <ScrollBrowse
          id="brand-system"
          title={projectData.scrollBrowseTitle}
          text={projectData.scrollBrowseText}
          subtext={projectData.scrollBrowseSubtext}
          actionLabel={projectData.scrollBrowseAction}
          images={projectData.scrollImages}
          theme="melody-scroll-showcase"
        />
      )}

      {projectData.isTimmyCare && projectData.scrollImages && (
        <ScrollBrowse
          id="brand-guide"
          title={projectData.scrollBrowseTitle}
          text={projectData.scrollBrowseText}
          subtext={projectData.scrollBrowseSubtext}
          actionLabel={projectData.scrollBrowseAction}
          images={projectData.scrollImages}
          theme="timmycare-scroll"
        />
      )}

      <DetailCards projectData={projectData} />

      <CaseStudyStructure projectData={projectData} />

      {projectData.isScw && (
        <>
          <section className="project-section scw-artifacts scw-persona-section" id="personas">
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

          <section className="project-section scw-artifacts scw-sitemap-section" id="sitemap">
            <p className="project-kicker">Sitemap and Facets</p>
            <h2>Navigation structure and homepage priorities.</h2>
            <div className="scw-artifact-grid scw-single-artifact">
              <figure className="scw-artifact-card">
                <img src={scwSitemap} alt="SCW sitemap and homepage facets" />
                <figcaption>Sitemap and homepage facets</figcaption>
              </figure>
            </div>
          </section>

          <section className="project-section scw-wireframes" id="wireframes">
            <p className="project-kicker">Low-Fidelity Wireframes</p>
            <h2>Low-fidelity screen structure and page flow.</h2>
            <p className="scw-wireframe-intro">
              Select a wireframe tab to review the early page layout without the mobile-device presentation frame.
            </p>
            <ScwWireframeTabs wireframes={scwWireframes} />
          </section>

          <section className="project-section scw-artifacts scw-logo-section" id="logo">
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
            id="brand-system"
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
        <>
          <section className="project-section timmycare-research" id="ux-research">
            <p className="project-kicker">UX Research Foundation</p>
            <h2>Research, structure, and wireframes before the prototype.</h2>

            <div className="timmycare-logo-panel">
              <img src={timmyCareResearch.logo} alt="TimmyCare primary logo" />
              <img src={timmyCareResearch.alternateLogo} alt="TimmyCare gray and black logo direction" />
              <p>TimmyCare combines a warm haircare identity with a practical mobile shopping flow for browsing, comparing, saving, and checking out.</p>
            </div>

            <div className="timmycare-section-head">
              <p className="project-kicker">Maps and Flow</p>
              <h3>Sitemap, journey map, and user flow.</h3>
            </div>
            <div className="timmycare-pdf-grid">
              {timmyCareResearch.researchMaps.map((doc) => (
                <article
                  className="timmycare-pdf-card"
                  id={doc.title === "Sitemap" ? "sitemap" : doc.title === "User Flow" ? "user-flow" : undefined}
                  key={doc.title}
                >
                  <h3>{doc.title}</h3>
                  <iframe src={doc.src} title={doc.title}></iframe>
                  <a href={doc.src} target="_blank" rel="noreferrer">Open PDF ↗</a>
                </article>
              ))}
            </div>

            <div className="timmycare-section-head">
              <p className="project-kicker">Empathy and Personas</p>
              <h3>User needs behind the shopping flow.</h3>
            </div>
            <div className="timmycare-image-grid">
              {[...timmyCareResearch.empathyMaps, ...timmyCareResearch.personas].map((item) => (
                <figure className="timmycare-research-card" key={item.title}>
                  <img src={item.src} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>

            <div className="timmycare-section-head">
              <p className="project-kicker">User Scenario</p>
              <h3>Key shopping and saved-care moments.</h3>
            </div>
            <div className="timmycare-image-grid">
              {timmyCareResearch.scenarios.map((item) => (
                <figure className="timmycare-research-card" key={item.title}>
                  <img src={item.src} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>

            <div className="timmycare-section-head" id="wireframes">
              <p className="project-kicker">Low-Fidelity Wireframes</p>
              <h3>Six early mobile screens used to shape the app flow.</h3>
            </div>
            <div className="timmycare-lowfi-grid">
              {timmyCareResearch.lowFi.map((item) => (
                <figure className="timmycare-lowfi-card" key={item.title}>
                  <img src={item.src} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>

            <div className="timmycare-section-head" id="final-screens">
              <p className="project-kicker">Final App Screens</p>
              <h3>Four polished screens from the redesigned mobile app.</h3>
            </div>
            <div className="timmycare-lowfi-grid timmycare-final-grid">
              {timmyCareResearch.finalScreens.map((item) => (
                <figure className="timmycare-lowfi-card" key={item.title}>
                  <img src={item.src} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="live-site-section timmycare-prototype-section" id="prototype">
            <div className="live-site-head">
              <div>
                <p className="project-kicker">Interactive Prototype</p>
                <h2>Code-based TimmyCare demo placeholder.</h2>
                <p className="live-site-note">
                  The Adobe prototype implementation has been removed. This section is ready to be replaced with the code-based sample app demonstration when it is provided.
                </p>
              </div>
            </div>
            <div className="timmycare-prototype-placeholder">
              <span>Coming next</span>
              <h3>Interactive sample app demonstration</h3>
              <p>
                The next version of this area will host the code-based TimmyCare app demo instead of an Adobe XD iframe.
              </p>
            </div>
            <div className="timmycare-swatch-row">
              {[
                { name: "Cream", color: "#fff8f1" },
                { name: "Blush", color: "#f8d8d2" },
                { name: "Burgundy", color: "#5a1c2b" },
                { name: "Coral", color: "#ff7043" },
                { name: "Green", color: "#388e3c" },
              ].map((swatch) => (
                <span key={swatch.name}>
                  <i style={{ background: swatch.color }}></i>
                  {swatch.name}
                </span>
              ))}
            </div>
          </section>
        </>
      )}

      {projectData.isRon && (
        <>
          <section className="project-section ron-artifact-section" id="logo">
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

          <section className="project-section ron-wireframe-section" id="wireframes">
            <div className="ron-section-headline">
              <div>
                <p className="project-kicker">Wireframes and Mockups</p>
                <h2>Website screen system.</h2>
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

          <section className="project-section ron-collateral-section" id="collateral">
            <div className="ron-section-headline">
              <div>
                <p className="project-kicker">Brand Collateral</p>
                <h2>Essential brand touchpoints.</h2>
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

          <section className="project-section ron-artifact-section" id="user-flow">
            <div className="ron-section-headline">
              <div>
                <p className="project-kicker">User Flow</p>
                <h2>From discovery to active membership.</h2>
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

          <section className="live-site-section ron-prototype-section" id="prototype">
            <div className="live-site-head">
              <div>
                <p className="project-kicker">Adobe XD Prototype</p>
                <h2>New Ron Zalko prototype.</h2>
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
            id="style-guide"
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
        <section className="project-section melody-brand-sections" id="deliverables">
          <p className="project-kicker">Melody Beats Items</p>
          <h2>Brand deliverables organized by touchpoint.</h2>
          <p className="melody-deliverables-intro">
            The deliverables are grouped into clearer presentation cards so each system has its own hierarchy, lead visual, and supporting image set.
          </p>
          <div className="melody-deliverables-stack">
            {[
              {
                title: "Logo System",
                tool: "Designed in Photoshop",
                description: "Sketch exploration, waveform concepts, logo variations, and final Melody Beats marks.",
                images: melodyLogoSystem,
                feature: melodyLogoBlue,
              },
              {
                title: "Business Cards",
                tool: "Designed in Photoshop",
                description: "Front and back card applications using the Melody blue, coral, teal, and warm gold palette.",
                images: melodyBusinessCards,
                feature: melodyBusinessCardMain1,
              },
              {
                title: "Postal Cards",
                tool: "Designed in Photoshop",
                description: "Promotional postal cards for the headphone/music campaign and postcard-style brand touchpoints.",
                images: melodyPostcards,
                feature: melodyPosterCard1,
              },
              {
                title: "Product/Package Design",
                tool: "Designed with Adobe After Effects",
                description: "Headphone product visuals, package mockups, unfolded box artwork, and final branded items.",
                images: melodyProductDesign,
                feature: melodyProductBox,
              },
            ].map((section) => (
              <article className="melody-item-card" key={section.title}>
                <div className="melody-item-copy">
                  <p className="project-kicker">{section.tool}</p>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
                <div className="melody-item-feature">
                  <img src={section.feature} alt={`${section.title} featured design`} />
                </div>
                <div className="melody-item-images" aria-label={`${section.title} supporting assets`}>
                  {section.images
                    .filter((image) => image !== section.feature)
                    .map((image, index) => (
                      <img src={image} alt={`${section.title} supporting asset ${index + 1}`} key={image} />
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {projectData.isAstro && projectData.liveUrl && (
        <>
          <section className="project-section astro-highfi-section" id="high-fidelity">
            <p className="project-kicker">High-Fidelity Mockups</p>
            <h2>Illustrator mockups and supporting app screens.</h2>
            <div className="astro-highfi-grid">
              {projectData.highFidelityMockups.map((item) => (
                <figure className="astro-highfi-card" key={item.title}>
                  <img src={item.image} alt={`AstroMatch ${item.title}`} />
                  <figcaption>
                    <span>{item.title}</span>
                    <p>{item.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <ScrollBrowse
            id="project-guide"
            title="Project Guide"
            text="AstroMatch guide assets."
            subtext="Concept, value proposition, monetization, feature planning, data needs, and development approach."
            actionLabel="Browse guide →"
            images={projectData.projectGuide}
            theme="astro-guide-scroll"
          />

          <section className="project-section astro-upgrade-section" id="upgrades">
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

          <section className="live-site-section astro-live-section" id="live-app">
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

      {projectData.scrollImages && !projectData.isRon && !projectData.isMelody && !projectData.isTimmyCare && !projectData.isAstro && (
        <ScrollBrowse
          id="project-gallery"
          title={projectData.scrollBrowseTitle}
          text={projectData.scrollBrowseText}
          subtext={projectData.scrollBrowseSubtext}
          actionLabel={projectData.scrollBrowseAction}
          images={projectData.scrollImages}
          theme={projectData.isTimmyCare ? "timmycare-scroll" : ""}
        />
      )}

      {projectData.isMotion && (
        <>
          <section className="motion-process-section" id="motion-process">
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

          <section className="motion-delivery-section" id="technical-delivery">
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
          <section className="live-site-section kvdst-live-section" id="live-preview">
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

          <section className="project-section kvdst-process-section" id="framework">
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
            id="style-guide"
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

          <section className="project-section kvdst-code-section" id="implementation">
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

          <section className="project-section kvdst-quality-section" id="quality">
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

      <footer className="project-detail-footer" id="contact">
        <div>
          <p className="project-kicker">Let's Connect</p>
          <h2>Let’s work together.</h2>
          <p>
            Reach out if this case study connects with the kind of design,
            interface, or front-end work you want to build.
          </p>
        </div>

        <div className="project-footer-actions">
          <Link to="/contact" className="tb-btn tb-btn-primary">
            Let’s Work Together ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}
