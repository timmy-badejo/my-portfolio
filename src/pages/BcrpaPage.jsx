import React from "react";
import { Link } from "react-router-dom";
import "./BcrpaPage.css";

import bcrpaLogo from "../assets/BCRPA midnight naive blue logo.png";
import bcrpaVideo from "../assets/BCRPASYPOSUM.mp4";
import eventSetup from "../assets/EventSetup.jpeg";
import printWork from "../assets/PrintWork.jpeg";
import signage from "../assets/Signage.jpeg";

import registrationBanner from "../assets/BCRPA REGISTRATION BANNER FINAL.png";
import welcomeSign from "../assets/BCRPA SYMPOSIUM WELCOME SIGN drafts-03.jpg";
import delegateBagOne from "../assets/BCRPA SYMPOSSIUM BAG asset-1-01.png";
import delegateBagTwo from "../assets/BCRPA SYMPOSSIUM BAG asset-1-02.png";
import aquaticsAward from "../assets/Aquatics Award For Bcrpa Sysmposium.png";
import letterheadOne from "../assets/BCRPA LETTERHEAD FINAL-01.png";
import letterheadTwo from "../assets/BCRPA LETTERHEAD FINAL-02.png";
import certificateOne from "../assets/BCRPA_certificate letter 2026-01.png";
import certificateTwo from "../assets/BCRPA_certificate letter 2026-02.png";
import patchDesign from "../assets/BCRPA-Patch Design -02.png";
import fitnessBanner from "../assets/BCRPA FITNESS REGISTRY WEB BANNER FINAL.jpg";
import eLearningOne from "../assets/E-learning fitness workshop final-01.jpg";
import eLearningTwo from "../assets/E-learning fitness workshop final-02.jpg";
import thankYouA from "../assets/BCRPA THANK YOU CARD_Thank You Card Option A.jpg";
import thankYouA2 from "../assets/BCRPA THANK YOU CARD_Thank You Card Option A2.jpg";

import katieCardFront from "../assets/BCRPA Business Card Final_Katie .png";
import katieCardBack from "../assets/BCRPA Business Card Final_katie 2.png";
import kellyCardFront from "../assets/BCRPA Business Card Final_Kelly .png";
import kellyCardBack from "../assets/BCRPA Business Card Final_Kelly 2.png";
import leslieCardFront from "../assets/BCRPA Business Card Final_Leslie.png";
import leslieCardBack from "../assets/BCRPA Business Card Final_Leslie 2.png";
import noelleCardFront from "../assets/BCRPA Business Card Final_Noelle.png";
import noelleCardBack from "../assets/BCRPA Business Card Final_Noelle 2.png";

import registrationDraft from "../assets/BCRPA FITNESS REGISTERY BANNER DRAFT-01.jpg";
import registrationDraftAlt from "../assets/BCRPA FITNESS REGISTERY BANNER DRAFT-05.jpg";
import welcomeDraft from "../assets/BCRPA SYMPOSIUM WELCOME SIGN drafts-01.jpg";
import healthyLivingDraft from "../assets/Healthy-Living-Banner-BCRPA-Primary-Draft-05.jpg";
import healthyLivingFinal from "../assets/Healthy-Living-Banner-BCRPA-Primary-Final-Draft-01.jpg";
import eLearningDraft from "../assets/E-learning fitness workshop drafts-05.jpg";
import patchTemplate from "../assets/BCRPA-Patch Design _template.png";

const supervisors = [
  {
    name: "Kat / Kathryn Tindale",
    role: "Supervisor and first design review",
    url: "https://www.linkedin.com/in/kathryn-tindale-385a28171/",
  },
  {
    name: "Leslie Dickout",
    role: "Director, Communications & Engagement",
    url: "https://www.linkedin.com/in/lesliedickout",
  },
  {
    name: "Katie Fenn",
    role: "Final review and organizational leadership context",
  },
];

const referenceMaterials = [
  "BCRPA brand guidelines and refreshed brand asset library",
  "Logo files, colour systems, typography rules, and movement-line assets",
  "Timmy’s asset list, previous-year files, SharePoint working files, and source examples",
  "Provincial Awards, Symposium, website, and 2025 event photo libraries",
  "Print dimensions, production notes, sponsor logo updates, and final review requirements",
];

const completedScope = [
  {
    title: "Symposium Print Assets",
    text: "Updated thank-you cards, business cards, delegate bag graphics, registration banner, welcome signage, table runner direction, and event support materials.",
  },
  {
    title: "Brand Launch Assets",
    text: "Created and adapted letterhead backgrounds, certificate templates, patch/sticker directions, program banners, and reusable digital applications.",
  },
  {
    title: "Fitness & E-Learning",
    text: "Supported fitness pop-up banner work, Registry banner updates, e-learning slide redesigns, intro/outro slides, and supporting graphics.",
  },
  {
    title: "Production Constraints",
    text: "Worked with real dimensions, visibility needs, sponsor updates, brand colour restrictions, typography rules, and approval checkpoints.",
  },
];

const finalDeliverables = [
  {
    title: "Registration Banner",
    type: "Wayfinding / Signage",
    text: "A 6 ft by 3 ft registration banner designed for visibility over black event curtains using BCRPA logo hierarchy and movement-line styling.",
    image: registrationBanner,
    wide: true,
  },
  {
    title: "Symposium Welcome Sign",
    type: "Event Signage",
    text: "A refreshed welcome sign direction using the new BCRPA identity to support arrival, wayfinding, and event atmosphere.",
    image: welcomeSign,
  },
  {
    title: "Delegate Bag Asset",
    type: "Symposium Collateral",
    text: "A simple Symposium bag direction using the Lake Blue logo, Healthier, Together tagline, conference dates, and sponsor placement planning.",
    image: delegateBagOne,
  },
  {
    title: "Sponsor Bag Back",
    type: "Sponsor Layout",
    text: "Sponsor logo layout prepared to support evolving sponsor lists while keeping the bag clean and brand-focused.",
    image: delegateBagTwo,
  },
  {
    title: "DB Perks Aquatics Award",
    type: "Award Template",
    text: "A template-ready recognition layout for the DB Perks Young Professional Aquatics Award with updated BCRPA branding.",
    image: aquaticsAward,
    tall: true,
  },
  {
    title: "Letterhead System",
    type: "Brand Template",
    text: "Light, movement-focused letterhead backgrounds designed to support future CEO seasonal messages, announcements, and program updates.",
    image: letterheadOne,
    tall: true,
  },
  {
    title: "Letterhead Variation",
    type: "Template Direction",
    text: "A second direction testing logo and tagline placement while preserving open space for Midnight Navy body copy.",
    image: letterheadTwo,
    tall: true,
  },
  {
    title: "Certificate Template",
    type: "Recognition Design",
    text: "Certificate artwork updated with new logo placement, Midnight Navy border treatment, Meadow Green accenting, and revised type hierarchy.",
    image: certificateOne,
    tall: true,
  },
  {
    title: "Certificate Variation",
    type: "Digital Template",
    text: "Additional certificate direction for reusable recognition applications across BCRPA programming.",
    image: certificateTwo,
    tall: true,
  },
  {
    title: "Patch / Sticker Direction",
    type: "Brand System",
    text: "Round patch direction using Pale Lime and Midnight Navy while adapting the message to Shaping Healthier Futures.",
    image: patchDesign,
  },
  {
    title: "Fitness Registry Banner",
    type: "Digital Banner",
    text: "Registry banner update using the BCRPA Fitness mark, Ice Blue, and updated headline-font direction.",
    image: fitnessBanner,
    wide: true,
  },
  {
    title: "E-Learning Intro Slide",
    type: "Slide System",
    text: "Intro/outro slide direction using Midnight Navy, Ice Blue, Pale Lime, updated fonts, and e-learning icon placement.",
    image: eLearningOne,
  },
  {
    title: "E-Learning Outro Slide",
    type: "Learning Asset",
    text: "A companion slide direction for video workshops, maintaining consistency across title, presenter, and Good Luck messaging.",
    image: eLearningTwo,
  },
  {
    title: "Thank You Card Front",
    type: "Print Design",
    text: "Foldable 5 in by 7 in card direction using Thank You copy and BCRPA line-pattern inspiration.",
    image: thankYouA,
  },
  {
    title: "Thank You Card Back",
    type: "Print Production",
    text: "Secondary-logo and contact-detail treatment using BCRPA PO box and general phone information.",
    image: thankYouA2,
  },
];

const businessCards = [
  { name: "Katie Fenn", role: "CEO", front: katieCardFront, back: katieCardBack },
  { name: "Kelly Kieu", role: "Partnerships & Events Coordinator", front: kellyCardFront, back: kellyCardBack },
  { name: "Leslie Dickout", role: "Director, Communications & Engagement", front: leslieCardFront, back: leslieCardBack },
  { name: "Noelle Virtue", role: "Director, Strategic Initiatives & Programs", front: noelleCardFront, back: noelleCardBack },
];

const processImages = [
  {
    title: "Registration Visibility Exploration",
    note: "Testing large-type visibility, logo scale, pale background options, and line movement for a banner viewed from distance.",
    image: registrationDraft,
  },
  {
    title: "Registration Refinement",
    note: "Refining the relationship between wayfinding text, BCRPA mark, and brand movement elements.",
    image: registrationDraftAlt,
  },
  {
    title: "Welcome Sign Draft",
    note: "Exploring the new brand language in a guest-facing Symposium sign before choosing a cleaner final direction.",
    image: welcomeDraft,
  },
  {
    title: "Healthy Living Banner Draft",
    note: "Testing program-mark composition, colour hierarchy, and motion-line balance for brand launch assets.",
    image: healthyLivingDraft,
  },
  {
    title: "Healthy Living Final Direction",
    note: "A more resolved program-banner direction shaped around the refreshed BCRPA identity system.",
    image: healthyLivingFinal,
  },
  {
    title: "E-Learning Slide Exploration",
    note: "Testing Midnight Navy, Ice Blue, Pale Lime, icon opacity, and workshop slide structure.",
    image: eLearningDraft,
  },
  {
    title: "Patch Template Exploration",
    note: "Adapting circular type and compact mark usage for a round patch/sticker format.",
    image: patchTemplate,
  },
];

const workflowSteps = [
  "Discuss the design task with Kat and confirm purpose, audience, dimensions, source files, and production needs.",
  "Create first draft explorations once the BCRPA brand requirements and task direction are clear.",
  "Send first drafts to Kat for review, then refine hierarchy, layout, colour, and asset usage based on feedback.",
  "After Kat signs off, send the updated design to Katie for final review before delivery or production handoff.",
];

export default function BcrpaPage() {
  return (
    <main className="bcrpa-page">
      <Link to="/" className="bcrpa-back-indicator">
        <div className="bcrpa-back-line"></div>
        <div className="bcrpa-back-content">
          <span className="bcrpa-back-arrow">↑</span>
          <p>Return to Landing Page</p>
        </div>
      </Link>

      <nav className="bcrpa-page-nav" aria-label="BCRPA page navigation">
        <a href="#overview">Overview</a>
        <a href="#finals">Finals</a>
        <a href="#process">Process</a>
        <a href="#workflow">Workflow</a>
        <a href="#reflection">Reflection</a>
      </nav>

      <section className="bcrpa-hero" id="overview">
        <div className="bcrpa-hero-copy">
          <img src={bcrpaLogo} alt="BCRPA logo" className="bcrpa-hero-logo" />
          <p className="bcrpa-kicker">Internship Experience</p>
          <h1>BCRPA Visual Communication & Event Design</h1>
          <p>
            A dedicated case study for my BCRPA internship, covering event setup,
            signage, print systems, brand collateral, Symposium support, and
            production-ready design work.
          </p>

          <div className="bcrpa-hero-pills">
            <span>Student: Timmy Badejo</span>
            <span>Organization: BCRPA</span>
            <span>Supervisors: Kat, Leslie, Katie</span>
          </div>
        </div>

        <div className="bcrpa-hero-media">
          <video src={bcrpaVideo} autoPlay muted loop playsInline controls />
          <span>BCRPA Symposium Video Glimpse</span>
        </div>
      </section>

      <section className="bcrpa-snapshot">
        <article>
          <p className="bcrpa-kicker">Role</p>
          <h2>Communications Intern</h2>
          <span>Visual design, print collateral, signage, event materials, template systems, and on-site support.</span>
        </article>

        <article>
          <p className="bcrpa-kicker">Core Direction</p>
          <h2>Brand Launch Support</h2>
          <span>Midnight Navy, Pale Lime, Ice Blue, Meadow Green, White, and movement-based brand elements.</span>
        </article>

        <article>
          <p className="bcrpa-kicker">Output</p>
          <h2>Real Touchpoints</h2>
          <span>Banners, cards, awards, letterheads, certificates, slide systems, bags, patches, and event graphics.</span>
        </article>
      </section>

      <section className="bcrpa-media-strip">
        <img src={eventSetup} alt="BCRPA event setup" />
        <img src={printWork} alt="BCRPA print materials" />
        <img src={signage} alt="BCRPA signage" />
      </section>

      <section className="bcrpa-section bcrpa-brief">
        <div className="bcrpa-section-head split">
          <div>
            <p className="bcrpa-kicker">Project Brief</p>
            <h2>Updating Symposium and brand-launch assets with production in mind.</h2>
          </div>
          <p>
            The work covered event-ready print materials and reusable digital
            templates, with first review through Kat and final review through Katie.
          </p>
        </div>

        <div className="bcrpa-brief-grid">
          <article>
            <h3>Reference Materials Used</h3>
            <ul>
              {referenceMaterials.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article>
            <h3>Core Brand Direction</h3>
            <p>
              Most designs followed BCRPA’s refreshed brand system: Midnight
              Navy for authority, Pale Lime and Ice Blue for freshness and
              movement, Meadow Green for support, and White for production
              clarity. The goal was to keep each asset active and brand-aligned
              without overloading it with too many colours.
            </p>
          </article>
        </div>

        <div className="bcrpa-scope-grid">
          {completedScope.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bcrpa-section" id="finals">
        <div className="bcrpa-section-head split">
          <div>
            <p className="bcrpa-kicker">Featured Final Deliverables</p>
            <h2>Polished assets across event, print, digital, and brand systems.</h2>
          </div>
          <p>
            Final work leads the page because these pieces show production
            quality, consistency, and the finished level of the internship output.
          </p>
        </div>

        <div className="bcrpa-deliverables-grid">
          {finalDeliverables.map((item) => (
            <article
              className={`bcrpa-deliverable ${item.wide ? "wide" : ""} ${item.tall ? "tall" : ""}`}
              key={item.title}
            >
              <div className="bcrpa-deliverable-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>

              <div className="bcrpa-deliverable-copy">
                <p>{item.type}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bcrpa-section bcrpa-card-system">
        <div className="bcrpa-section-head">
          <p className="bcrpa-kicker">Brand Collateral System</p>
          <h2>Business cards built as a repeatable staff identity system.</h2>
        </div>

        <div className="bcrpa-business-grid">
          {businessCards.map((card) => (
            <article className="bcrpa-business-card" key={card.name}>
              <div className="bcrpa-business-images">
                <img src={card.front} alt={`${card.name} business card front`} loading="lazy" />
                <img src={card.back} alt={`${card.name} business card back`} loading="lazy" />
              </div>

              <p>{card.role}</p>
              <h3>{card.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bcrpa-section bcrpa-process" id="process">
        <div className="bcrpa-section-head split">
          <div>
            <p className="bcrpa-kicker">Process & Exploration</p>
            <h2>Selected drafts that show iteration, not every file.</h2>
          </div>
          <p>
            These drafts are curated to show design thinking: layout testing,
            typography hierarchy, brand movement, production constraints, and
            feedback-driven refinement.
          </p>
        </div>

        <div className="bcrpa-process-gallery">
          {processImages.map((item) => (
            <article className="bcrpa-process-card" key={`${item.title}-${item.image}`}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bcrpa-section bcrpa-collaboration" id="workflow">
        <div>
          <p className="bcrpa-kicker">Review Workflow</p>
          <h2>How work moved from request to production-ready design.</h2>
        </div>

        <div className="bcrpa-workflow">
          {workflowSteps.map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>

        <div className="bcrpa-collab-note">
          <h3>Professional Context</h3>
          <p>
            I worked within BCRPA’s communications environment, supporting real
            staff needs and real event deadlines while keeping visual decisions
            aligned with the organization’s brand direction.
          </p>
        </div>
      </section>

      <section className="bcrpa-section bcrpa-supervisors">
        <div className="bcrpa-section-head">
          <p className="bcrpa-kicker">Supervision</p>
          <h2>Collaborating inside a real communications review structure.</h2>
        </div>

        <div className="bcrpa-supervisor-grid">
          {supervisors.map((person) => (
            <article key={person.name}>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              {person.url && (
                <a href={person.url} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bcrpa-section bcrpa-reflection" id="reflection">
        <div>
          <p className="bcrpa-kicker">Reflection</p>
          <h2>Real-world design taught me production thinking.</h2>
        </div>
        <p>
          The strongest part of this experience was learning how design moves
          through a real review process: exploring directions, responding to
          feedback, tightening hierarchy, and preparing final assets for use
          beyond the screen. Each task had to respect the new brand system while
          remaining practical for print, digital, staff use, and event environments.
        </p>
      </section>

      <footer className="bcrpa-footer">
        <div>
          <p className="bcrpa-kicker">Real Experience</p>
          <h2>Professional design work in a real organization.</h2>
          <p>
            This internship became one of my strongest examples of visual
            communication, production design, brand adaptation, and event-based
            design execution.
          </p>
        </div>

        <div className="bcrpa-footer-actions">
          <Link to="/work">View More Work ↗</Link>
          <Link to="/contact" className="tb-btn tb-btn-primary">
            Let’s Work Together ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}
