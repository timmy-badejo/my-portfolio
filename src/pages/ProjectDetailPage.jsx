import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetailPage.css";

import ronzalko from "../assets/Ron Zalko web design.jpg";
import melodycard1 from "../assets/MelodyCard1.jpg";
import timmyhaircare from "../assets/timmyhaircare4.jpg";
import scwcharity from "../assets/scwcharitywebpage.png";
import scwLogo from "../assets/scw logo.png";
import scwPersona from "../assets/scw user persona 1.jpg";
import scwSitemap from "../assets/scw-sitemap.png";
import astroPlaceholder from "../assets/AstorMatchlogo.jpg";
import motionPlaceholder from "../assets/motion graphics.webp";
import motionGraphicVideo from "../assets/Jujitsu_Kaisen_Intro_Bumper_Timilehin Yomi-Badejo_Final comp.mp4";
import motionGraphicAudio from "../assets/jujitsu_kaisen_intro_Bumper-audio.mp3";
import kvdstLogo from "../assets/KVDST LOGO.png";

const scwFullLogo = scwLogo;

const scwWireframes = Array.from({ length: 13 }, (_, index) =>
  `/scw-wireframes/SCW Charity Website Wireframe A 2_Page_${String(index + 1).padStart(2, "0")}.jpg`
);

const timmyCareResearch = {
  logo: "/timmycare-research/timmyhaircare-logo.png",
  researchMaps: [
    { title: "Sitemap", type: "PDF", src: "/timmycare-research/sitemap-for-timmyhaircare.pdf" },
    { title: "Journey Map", type: "PDF", src: "/timmycare-research/journey-map-for-timmyhaircare.pdf" },
    { title: "Userflow", type: "PDF", src: "/timmycare-research/userflow-for-timmyhaircare.pdf" },
  ],
  empathyMaps: [
    { title: "Maya Empathy Map", src: "/timmycare-research/maya-empathy-map.jpg" },
    { title: "Timmy Empathy Map", src: "/timmycare-research/timmy-empathy-map.jpg" },
  ],
  personas: [
    { title: "Maya Persona", src: "/timmycare-research/maya-user-persona.jpg" },
    { title: "Timmy Persona", src: "/timmycare-research/timmy-user-persona.jpg" },
  ],
  scenarios: [
    { title: "Maya User Scenario", src: "/timmycare-research/maya-user-scenario.jpg" },
    { title: "Timmy User Scenario", src: "/timmycare-research/timmy-user-scenario.jpg" },
  ],
  lowFi: Array.from({ length: 6 }, (_, index) => ({
    title: `Low-Fidelity Wireframe ${index + 1}`,
    src: `/timmycare-research/low-fidelity-wireframe-${index + 1}.jpg`,
  })),
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
    scrollBrowseText: "A case-study style browser for Ron Zalko page views and redesign direction.",
    scrollImages: [ronzalko, ronzalko, ronzalko],
  },
  {
    id: "2",
    title: "Melody Beats Branding",
    category: "Visual Design",
    image: melodycard1,
    technicalInfo: "Brand Identity • Visual Design • Print Design",
    overview: "A brand identity project focused on creating a strong visual direction and business card system for a music-related brand.",
    challenges: "The challenge was creating a visual identity that felt creative, memorable, and useful across brand touchpoints.",
    outcome: "The final direction created a cleaner and more recognizable brand presence with practical print-ready applications.",
    details: [
      "Designed business card concepts.",
      "Explored visual identity direction.",
      "Worked with layout, typography, and brand presentation.",
      "Created a polished brand application for print.",
    ],
    scrollBrowseTitle: "Scroll to Browse",
    scrollBrowseText: "A brand-system style browser for Melody Beats identity assets.",
    scrollImages: [melodycard1, melodycard1, melodycard1],
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
    scrollImages: [timmyhaircare, timmyhaircare, timmyhaircare],
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
      "Placed the sections in UX process order: final preview, overview, persona, sitemap, wireframes, logo, brand system.",
    ],
    isScw: true,
  },
  {
    id: "5",
    title: "AstroMatch App",
    category: "UI/UX",
    image: astroPlaceholder,
    technicalInfo: "Product Design • UI/UX • App Concept",
    overview: "An astrology-based dating app concept built around compatibility, user profiles, and a playful mobile experience.",
    challenges: "The challenge was turning a fun concept into a structured app experience with clear flows, strong visuals, and useful features.",
    outcome: "The concept created a strong foundation for a mobile product with personality, compatibility logic, and engaging interaction points.",
    details: [
      "Designed app concept and user flow.",
      "Explored compatibility-based matching.",
      "Created mobile-first interface direction.",
      "Connected visual style with product idea.",
    ],
    scrollBrowseTitle: "Scroll to Browse",
    scrollBrowseText: "A Melody Beats-style horizontal browser for AstroMatch app mockups.",
    scrollImages: [astroPlaceholder, astroPlaceholder, astroPlaceholder],
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
    previewUrl: "/kvdst-site/index.html",
    styleGuide: "/kvdst-record-label-style-guide.pdf",
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

      {isKvdst && (
        <article className="card kvdst-details-card">
          <p className="project-kicker">Details</p>
          <h2>What I redesigned and improved</h2>
          <ul>
            {projectData.details.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      )}
    </section>
  );
}

export default function ProjectDetailPage() {
  const { id, projectId } = useParams();
  const projectData = getProjectDataById(id || projectId);

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
  ].join(" ").trim();

  return (
    <main className={pageClass}>
      <Link to="/work" className="back-library-indicator">
        <div className="back-library-line"></div>
        <div className="back-library-content">
          <span className="back-library-arrow">←</span>
          <p>Back to Project Library</p>
        </div>
      </Link>

      <nav className="project-page-controls" aria-label="Project navigation controls">
        <Link to="/work">Return to Projects</Link>
        <Link to="/#work">Return to Work Section</Link>
        <Link to={`/projects/${nextProjectId}`}>View Next Project</Link>
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

      {!projectData.isKvdst && !projectData.isMotion && (
        <section className="project-section">
          <p className="project-kicker">Process Notes</p>
          <h2>Key things I worked through</h2>
          <div className="project-detail-list">
            {projectData.details.map((item) => (
              <div className="project-detail-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {projectData.isScw && (
        <>
          <section className="project-section scw-artifacts">
            <p className="project-kicker">Research & Brand Artifacts</p>
            <h2>User personas, sitemap, and logo direction.</h2>
            <div className="scw-artifact-grid">
              {[
                { title: "User Persona", img: scwPersona },
                { title: "Sitemap", img: scwSitemap },
                { title: "SCW Logo", img: scwLogo },
                { title: "Full Logo Display", img: scwFullLogo },
              ].map((item) => (
                <figure className="scw-artifact-card" key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
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
                <iframe src={doc.src} title={doc.title}></iframe>
                <a href={doc.src} target="_blank" rel="noreferrer">Open PDF ↗</a>
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

          <div className="timmycare-lowfi-grid">
            {timmyCareResearch.lowFi.map((item) => (
              <figure className="timmycare-lowfi-card" key={item.title}>
                <img src={item.src} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
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
                <h2>Preview the KVDST site inside the portfolio.</h2>
                <p className="live-site-note">
                  This iframe uses the provided static site files copied into public/kvdst-site/.
                </p>
              </div>

              <a href={projectData.liveUrl} target="_blank" rel="noreferrer" className="project-doc-link">
                Open Live Site ↗
              </a>
            </div>

            <iframe src={projectData.previewUrl} title={projectData.title} className="project-live-frame" />
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
            <p className="project-kicker">Project Files</p>
            <h2>KVDST record label style guide.</h2>
            <div className="kvdst-marquee-track">
              <a href={projectData.styleGuide} target="_blank" rel="noreferrer">KVDST-record-label-style-guide.pdf ↗</a>
              <a href={projectData.styleGuide} target="_blank" rel="noreferrer">KVDST-record-label-style-guide.pdf ↗</a>
              <a href={projectData.styleGuide} target="_blank" rel="noreferrer">KVDST-record-label-style-guide.pdf ↗</a>
            </div>
          </section>

          <section className="project-section kvdst-code-section">
            <p className="project-kicker">View Code</p>
            <h2>HTML, CSS, and JavaScript structure.</h2>
            <div className="kvdst-code-grid">
              {["HTML", "CSS", "JavaScript"].map((label) => (
                <article className="kvdst-code-card" key={label}>
                  <h3>{label}</h3>
                  <pre><code>{`// ${label} sample\n// Replace this with your current KVDST code snippet.`}</code></pre>
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
          <Link to="/contact">Let’s Work Together ↗</Link>
        </div>
      </footer>
    </main>
  );
}
