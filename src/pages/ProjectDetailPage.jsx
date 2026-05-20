import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetailPage.css";

import ronzalko from "../assets/Ron Zalko web design.jpg";
import ronLogo from "../assets/Ron-Zalko-Logo.png";
import ronPoster from "../assets/Ron Zalko zoster.jpg";
import ronUserFlow from "../assets/User flow for ron zalko fitness web redesignn.png";
import ronCardOne from "../assets/ron zalko gym card.jpg";
import ronCardTwo from "../assets/ron zalko gym card 2.jpg";
import ronInvoice from "../assets/ron zalko gym invoice.jpg";
import melodycard1 from "../assets/MelodyCard1.jpg";
import melodycard2 from "../assets/MelodyCard2.jpg";
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
  melodyDoc1,
  melodyDoc2,
  melodyDoc3,
  melodyDoc4,
  melodyDoc5,
  melodyDoc6,
  melodyDoc7,
  melodyDoc9,
  melodyDoc10,
  melodyDoc11,
  melodyDoc12,
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
    title: "Ron Zalko Fitness Website Redesign",
    category: "UI/UX",
    image: ronzalko,
    technicalInfo: "UI/UX Design • Website Redesign • User Flow",
    overview: "A website redesign focused on improving structure, clarity, navigation, and the overall user experience for a fitness brand.",
    challenges: "The main challenge was making the site easier to understand while improving how users move through the experience.",
    outcome: "The redesign direction created a cleaner user journey, stronger hierarchy, and a more polished digital presence.",
    details: [
      "Improved page structure and visual hierarchy.",
      "Focused on clearer navigation and stronger user flow.",
      "Explored layout updates for a more modern fitness brand experience.",
      "Balanced visual design with usability.",
    ],
    scrollBrowseTitle: "Scroll to Browse",
    scrollBrowseText: "A Melody-style browser for Ron Zalko website screens, user flow, and redesign assets.",
    scrollImages: [ronzalko, ronUserFlow, ronCardOne, ronCardTwo, ronInvoice],
    oldSiteUrl: "https://ronzalko.com/",
    prototypeUrl: "https://xd.adobe.com/view/20f25a09-a9b7-4b46-a4cd-6158c74e6a52-75a1/",
    prototypeEmbedUrl: "https://xd.adobe.com/embed/20f25a09-a9b7-4b46-a4cd-6158c74e6a52-75a1/",
    isRon: true,
  },
  {
    id: "2",
    title: "Melody Beats Branding",
    category: "Visual Design",
    image: melodycard1,
    technicalInfo: "Brand Identity • Photoshop • Print & Package Design",
    overview: "A brand identity project focused on a music brand system: logo exploration, final identity direction, business cards, postal cards, and package/product design.",
    challenges: "The challenge was making the identity feel energetic and music-focused while still working across practical print and product applications.",
    outcome: "The final brand system presents Melody Beats as a more complete identity, with clear logo direction, card systems, promotional pieces, and product packaging.",
    details: [
      "Built a brand-system slider using the strongest Melody Beats document pages.",
      "Separated the work into logo system, business cards, postal cards, and product/package design.",
      "Used full-display image treatment so artwork is presented instead of cropped.",
      "Applied the Melody palette to the case study and card treatment.",
    ],
    scrollBrowseTitle: "Scroll to Browse the Melody Beats Brand System",
    scrollBrowseText: "A full-display brand-system slider showing the identity, card, poster, and product design direction.",
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
      "Placed the sections in UX process order: final preview, overview, personas, sitemap, wireframes, logo, and brand system highlights.",
    ],
    isScw: true,
  },
  {
    id: "5",
    title: "AstroMatch App",
    category: "UI/UX",
    image: astroPlaceholder,
    technicalInfo: "Product Design • UI/UX • App Concept",
    overview: "A live astrology dating app concept upgraded into a more complete interactive product with compatibility results, profiles, discovery, favorites, messaging, beginner guidance, and subscription pathways.",
    challenges: "The challenge was turning the original concept into a usable app experience with richer flows, clearer states, saved-profile behavior, better onboarding, and a theme-aware interface.",
    outcome: "The upgraded app now presents a stronger product case study with a live app preview, clearer feature story, and more detailed UI/UX evidence.",
    details: [
      "Upgraded Results, Discovery, Profile, Messaging, Favorites, Beginner Guide, and Subscription flows.",
      "Added loading skeletons, empty states, online status, toast feedback, favorite limits, and premium report direction.",
      "Improved match cards, compatibility score bars, saved profiles, profile dashboards, and conversation starters.",
      "Updated the design system with a premium light/dark palette and tighter card styling.",
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
    overview: "I took the KVDST music label project and redesigned the interface to feel more aligned with a modern record label: stronger hero presence, cleaner navigation, clearer content sections, and sharper visual hierarchy.",
    challenges: "The original structure needed more polish, stronger brand alignment, better spacing, clearer page flow, and a UI direction that felt connected to music, artists, events, merch, and label storytelling.",
    outcome: "The updated direction gives KVDST a stronger visual identity, improved UX structure, live preview support, project-specific page styling, and a more complete front-end case study presentation.",
    details: [
      "Reworked the navigation, hero, content flow, and visual hierarchy.",
      "Aligned the case study to the KVDST brand with a black/neon stage, #29ABE2 accents, grid texture, record-style visual, and equalizer motion.",
      "Added a live preview iframe using the copied static website at /kvdst-site/index.html.",
      "Kept the external live-site button pointing to http://kvdst.timmybad.com/.",
      "Added the KVDST record label style guide PDF section with right-to-left horizontal movement.",
      "Added code showcase sections for HTML, CSS, and JavaScript.",
    ],
    liveUrl: "http://kvdst.timmybad.com/",
    previewUrl: null,
    styleGuide: null,
    isKvdst: true,
  },
];

const projectRouteOrder = ["1", "2", "3", "4", "5", "6", "7"];

function getProjectDataById(id) {
  return projects.find((project) => project.id === id);
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
        {images.map((image, index) => (
          <figure className="scroll-browse-frame" key={`${image}-${index}`}>
            <img src={image} alt={`${title} ${index + 1}`} />
            <figcaption>
              <span>Page {index + 1}</span>
              <p>Project screen / artifact preview.</p>
            </figcaption>
          </figure>
        ))}
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

          <div className={projectData.isKvdst ? "kvdst-title-lockup" : ""}>
            {projectData.isKvdst && <img src={projectData.logo} alt="KVDST logo" />}
            <h1>{projectData.title}</h1>
          </div>

          {!projectData.isKvdst && <h1>{projectData.title}</h1>}

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

          <section className="project-section scw-brand-system">
            <p className="project-kicker">Brand Design System</p>
            <h2>SCW visual rules behind the website.</h2>
            <div className="scw-system-notes">
              {[
                "Warm maroon/plum, cream, peach, and mint accents support a compassionate charity tone.",
                "The brand system connects logo direction, audience needs, sitemap structure, and the full-page website.",
                "Reusable guidance keeps campaign, website, and outreach materials visually consistent.",
              ].map((note) => (
                <div className="scw-system-note" key={note}>
                  <span></span>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </section>
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
            <p className="project-kicker">Logo Redesign and Brand Assets</p>
            <h2>Strength, balance, and unity translated into a fitness identity.</h2>
            <div className="ron-artifact-grid">
              {[
                { title: "New Ron Zalko Logo", img: ronLogo },
                { title: "Poster Ad Design", img: ronPoster },
                { title: "User Flow", img: ronUserFlow },
              ].map((item) => (
                <figure className="ron-artifact-card" key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="live-site-section ron-prototype-section">
            <div className="live-site-head">
              <div>
                <p className="project-kicker">Adobe XD Prototype</p>
                <h2>Prototype of the redesigned Ron Zalko website.</h2>
                <p className="live-site-note">The prototype replaces the generic gallery and keeps the case study focused on interaction and site structure.</p>
              </div>
              <a href={projectData.prototypeUrl} target="_blank" rel="noreferrer" className="project-doc-link">
                Open Prototype ↗
              </a>
            </div>
            <iframe src={projectData.prototypeEmbedUrl} title="Ron Zalko Adobe XD prototype" className="project-live-frame" />
          </section>
        </>
      )}

      {projectData.isMelody && (
        <section className="project-section melody-brand-sections">
          <p className="project-kicker">Melody Beats Items</p>
          <h2>Logo, business cards, postal cards, and product package design.</h2>
          <div className="melody-section-grid">
            {[
              { title: "Logo Sketches and Final Designs", tool: "Designed in Photoshop", images: [melodyLogoSketch, melodyLogoFinal] },
              { title: "Business Card System", tool: "Designed in Photoshop", images: [melodycard1, melodycard2] },
              { title: "Postal Card System", tool: "Designed in Photoshop", images: [melodyPosterCard, melodyDoc10] },
              { title: "Product / Package Design", tool: "Designed with Adobe After Effects", images: [melodyProduct, melodyDoc12] },
            ].map((section) => (
              <article className="melody-item-card" key={section.title}>
                <div className="melody-item-images">
                  {section.images.map((image) => (
                    <img src={image} alt={section.title} key={image} />
                  ))}
                </div>
                <p className="project-kicker">{section.tool}</p>
                <h3>{section.title}</h3>
              </article>
            ))}
          </div>
        </section>
      )}

      {projectData.isAstro && projectData.liveUrl && (
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
      )}

      {projectData.scrollImages && (
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
                  The live URL is set to the new KVDST domain. The site can be opened directly once the domain is live.
                </p>
              </div>

              <a href={projectData.liveUrl} target="_blank" rel="noreferrer" className="project-doc-link">
                Open Live Site ↗
              </a>
            </div>

            {projectData.previewUrl ? (
              <iframe src={projectData.previewUrl} title={projectData.title} className="project-live-frame" />
            ) : (
              <div className="kvdst-live-placeholder">
                <img src={projectData.logo} alt="KVDST logo" />
                <p>Preview files are not currently present in this restored workspace.</p>
              </div>
            )}
          </section>

          <section className="project-section kvdst-process-section">
            <p className="project-kicker">Redesign Structure</p>
            <h2>How I aligned the page to the KVDST brand.</h2>
            <div className="kvdst-process-grid">
              {[
                ["Navigation / Hero", "Strengthened first impression, logo presence, and label storytelling."],
                ["Artist / Event Flow", "Improved content hierarchy so users can understand the music-label structure faster."],
                ["Merch / News", "Organized supporting content so it feels connected instead of scattered."],
                ["Front-End Polish", "Tightened spacing, responsiveness, hover states, and visual consistency."],
              ].map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="project-section kvdst-pdf-marquee">
            <p className="project-kicker">Style Guide</p>
            <h2>KVDST record label style guide.</h2>
            {projectData.styleGuide ? (
              <div className="kvdst-marquee-track">
                <a href={projectData.styleGuide} target="_blank" rel="noreferrer">KVDST-record-label-style-guide.pdf ↗</a>
                <a href={projectData.styleGuide} target="_blank" rel="noreferrer">KVDST-record-label-style-guide.pdf ↗</a>
                <a href={projectData.styleGuide} target="_blank" rel="noreferrer">KVDST-record-label-style-guide.pdf ↗</a>
              </div>
            ) : (
              <p className="kvdst-file-note">
                The style guide PDF is not currently present in this restored workspace.
              </p>
            )}
          </section>

          <section className="project-section kvdst-code-section">
            <p className="project-kicker">View Code</p>
            <h2>HTML, CSS, and JavaScript structure.</h2>
            <div className="kvdst-code-grid">
              {["HTML", "CSS", "JavaScript"].map((label) => (
                <article className="kvdst-code-card" key={label}>
                  <h3>{label}</h3>
                  <pre><code>{kvdstCodeSamples[label]}</code></pre>
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
