import React from "react";
import { Link } from "react-router-dom";
import "./BcrpaPage.css";

import bcrpaLogo from "../assets/BCRPA-primary-logo.png";
import bcrpaVideo from "../assets/optimized/bcrpa-loop-mobile.mp4";
import eventSetup from "../assets/optimized/event-setup-mobile.jpg";
import printWork from "../assets/optimized/print-work-mobile.jpg";
import signage from "../assets/optimized/signage-mobile.jpg";

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

import healthyDraft01 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-01.jpg";
import healthyDraft02 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-02.jpg";
import healthyDraft03 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-03.jpg";
import healthyDraft04 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-04.jpg";
import healthyDraft05 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-05.jpg";
import healthyDraft06 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-06.jpg";
import healthyDraft07 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-07.jpg";
import healthyDraft08 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-08.jpg";
import healthyDraft09 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-09.jpg";
import healthyDraft10 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Draft-10.jpg";
import healthyFinal01 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Final-Draft-01.jpg";
import healthyFinal02 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Final-Draft-02.jpg";
import healthyFinal03 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Final-Draft-03.jpg";
import healthyFinal04 from "../assets/bcrpa/internship/Healthy-Living-Banner-BCRPA-Primary-Final-Draft-04.jpg";

import registryDraft01 from "../assets/bcrpa/internship/BCRPA FITNESS REGISTERY BANNER DRAFT-01.jpg";
import registryDraft02 from "../assets/bcrpa/internship/BCRPA FITNESS REGISTERY BANNER DRAFT-02.jpg";
import registryDraft03 from "../assets/bcrpa/internship/BCRPA FITNESS REGISTERY BANNER DRAFT-03.jpg";
import registryDraft04 from "../assets/bcrpa/internship/BCRPA FITNESS REGISTERY BANNER DRAFT-04.jpg";
import registryDraft05 from "../assets/bcrpa/internship/BCRPA FITNESS REGISTERY BANNER DRAFT-05.jpg";
import registryFinal from "../assets/bcrpa/internship/BCRPA FITNESS REGISTRY WEB BANNER FINAL.jpg";

import workshopDraft01 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-01.jpg";
import workshopDraft02 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-02.jpg";
import workshopDraft03 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-03.jpg";
import workshopDraft04 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-04.jpg";
import workshopDraft05 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-05.jpg";
import workshopDraft06 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-06.jpg";
import workshopDraft07 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-07.jpg";
import workshopDraft08 from "../assets/bcrpa/internship/E-learning fitness workshop drafts-08.jpg";
import workshopFinal01 from "../assets/bcrpa/internship/E-learning fitness workshop final-01.jpg";
import workshopFinal02 from "../assets/bcrpa/internship/E-learning fitness workshop final-02.jpg";

import thankYouOptionA from "../assets/bcrpa/internship/BCRPA THANK YOU CARD_Thank You Card Option A.jpg";
import thankYouOptionA2 from "../assets/bcrpa/internship/BCRPA THANK YOU CARD_Thank You Card Option A2.jpg";
import thankYouOptionB from "../assets/bcrpa/internship/BCRPA THANK YOU CARD_Thank You Card Option B.jpg";
import thankYouOptionB2 from "../assets/bcrpa/internship/BCRPA THANK YOU CARD_Thank You Card Option B2.jpg";

import welcomeDraft01 from "../assets/bcrpa/internship/BCRPA SYMPOSIUM WELCOME SIGN drafts-01.jpg";
import welcomeDraft02 from "../assets/bcrpa/internship/BCRPA SYMPOSIUM WELCOME SIGN drafts-02.jpg";
import welcomeDraft03 from "../assets/bcrpa/internship/BCRPA SYMPOSIUM WELCOME SIGN drafts-03.jpg";

import ambassadorButton01 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-01.jpg";
import ambassadorButton02 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-02.jpg";
import ambassadorButton03 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-03.jpg";
import ambassadorButton04 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-04.jpg";
import ambassadorButton05 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-05.jpg";
import ambassadorButton06 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-06.jpg";
import ambassadorButton07 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-07.jpg";
import ambassadorButton08 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-08.jpg";
import ambassadorButton09 from "../assets/bcrpa/internship/BCRPA Ambassador Buttons-09.jpg";

// Registration banner drafts (newly uploaded)
import regBannerDraftRed from "../assets/BCRPA registration banner Draft_Red design 2.png";
import regBannerDraft1 from "../assets/BCRPA registration banner Draft_Reg design 1.png";
import regBannerDraft3 from "../assets/BCRPA registration banner Draft_Reg design 3.png";
import regBannerDraft4 from "../assets/BCRPA registration banner Draft_Reg design 4.png";
import regBannerDraft5 from "../assets/BCRPA registration banner Draft_Reg design 5.png";
import regBannerDraft6 from "../assets/BCRPA registration banner Draft_Reg design 6.png";
import regBannerDraft7 from "../assets/BCRPA registration banner Draft_Reg design 7.png";
import regBannerDraft8 from "../assets/BCRPA registration banner Draft_Reg design 8.png";
import fitnessBannerDraft from "../assets/bcrpa fitness banner-01-compressed.jpg";

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
  "Timmy's asset list, previous-year files, SharePoint working files, and source examples",
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
    title: "Fitness Registry Banner",
    type: "Digital Banner",
    text: "Registry banner update using the BCRPA Fitness mark, Ice Blue, and updated headline-font direction.",
    image: fitnessBanner,
    wide: true,
  },
  {
    title: "Symposium Welcome Sign",
    type: "Event Signage",
    text: "A refreshed welcome sign direction using the new BCRPA identity to support arrival, wayfinding, and event atmosphere.",
    image: welcomeSign,
  },
  {
    title: "Delegate Bag",
    type: "Symposium Collateral",
    text: "Front shows logo, tagline, and conference dates. Back holds the evolving sponsor layout while keeping the bag brand-focused.",
    paired: [delegateBagOne, delegateBagTwo],
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
    text: "Two letterhead directions — movement-focused backgrounds designed to support CEO messages, announcements, and program updates.",
    paired: [letterheadOne, letterheadTwo],
    tall: true,
  },
  {
    title: "Certificate Templates",
    type: "Recognition Design",
    text: "Two certificate directions with updated logo placement, Midnight Navy border, Meadow Green accenting, and revised type hierarchy.",
    paired: [certificateOne, certificateTwo],
    tall: true,
  },
  {
    title: "Patch / Sticker Direction",
    type: "Brand System",
    text: "Round patch direction using Pale Lime and Midnight Navy while adapting the message to Shaping Healthier Futures.",
    image: patchDesign,
  },
  {
    title: "E-Learning Slides",
    type: "Slide System",
    text: "Intro and outro slide directions using Midnight Navy, Ice Blue, Pale Lime, updated fonts, and e-learning icon placement.",
    paired: [eLearningOne, eLearningTwo],
  },
  {
    title: "Thank You Card",
    type: "Print Design — Option A",
    text: "Foldable 5 in by 7 in card. Front uses Thank You copy and BCRPA line-pattern inspiration; back shows secondary logo and contact details.",
    paired: [thankYouA, thankYouA2],
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

const brandColours = [
  { name: "Midnight Navy", value: "#253058", use: "Primary type, deep backgrounds, logo applications" },
  { name: "Pale Lime", value: "#e5edbe", use: "Fresh brand fields, highlights, optimistic contrast" },
  { name: "Ice Blue", value: "#dceff0", use: "Fitness and learning support colour" },
  { name: "Meadow Green", value: "#28542d", use: "Grounding accent, borders, movement-line support" },
  { name: "Coral Energy", value: "#ee6f57", use: "Warm accent, focus states, motion detail" },
  { name: "White", value: "#ffffff", use: "Production space, clarity, print-friendly layouts" },
];

const healthyLivingAssets = [
  { label: "Draft 01", image: healthyDraft01 },
  { label: "Draft 02", image: healthyDraft02 },
  { label: "Draft 03", image: healthyDraft03 },
  { label: "Draft 04", image: healthyDraft04 },
  { label: "Draft 05", image: healthyDraft05 },
  { label: "Draft 06", image: healthyDraft06 },
  { label: "Draft 07", image: healthyDraft07 },
  { label: "Draft 08", image: healthyDraft08 },
  { label: "Draft 09", image: healthyDraft09 },
  { label: "Draft 10", image: healthyDraft10 },
  { label: "Final Direction 01", image: healthyFinal01 },
  { label: "Final Direction 02", image: healthyFinal02 },
  { label: "Final Direction 03", image: healthyFinal03 },
  { label: "Final Direction 04", image: healthyFinal04 },
];

const registrationBannerDrafts = [
  { label: "Draft 1", image: regBannerDraft1 },
  { label: "Draft 2 — Red Direction", image: regBannerDraftRed },
  { label: "Draft 3", image: regBannerDraft3 },
  { label: "Draft 4", image: regBannerDraft4 },
  { label: "Draft 5", image: regBannerDraft5 },
  { label: "Draft 6", image: regBannerDraft6 },
  { label: "Draft 7", image: regBannerDraft7 },
  { label: "Draft 8", image: regBannerDraft8 },
];

const registryAssets = [
  { label: "Draft 01", image: registryDraft01 },
  { label: "Draft 02", image: registryDraft02 },
  { label: "Draft 03", image: registryDraft03 },
  { label: "Draft 04", image: registryDraft04 },
  { label: "Draft 05", image: registryDraft05 },
  { label: "Final Web Banner", image: registryFinal },
  { label: "Compressed Pop-up Banner", image: fitnessBannerDraft },
];

const workshopAssets = [
  { label: "Draft 01", image: workshopDraft01 },
  { label: "Draft 02", image: workshopDraft02 },
  { label: "Draft 03", image: workshopDraft03 },
  { label: "Draft 04", image: workshopDraft04 },
  { label: "Draft 05", image: workshopDraft05 },
  { label: "Draft 06", image: workshopDraft06 },
  { label: "Draft 07", image: workshopDraft07 },
  { label: "Draft 08", image: workshopDraft08 },
  { label: "Final 01", image: workshopFinal01 },
  { label: "Final 02", image: workshopFinal02 },
];

const welcomeAssets = [
  { label: "Welcome Sign Draft 01", image: welcomeDraft01 },
  { label: "Welcome Sign Draft 02", image: welcomeDraft02 },
  { label: "Welcome Sign Draft 03", image: welcomeDraft03 },
];

const ambassadorAssets = [
  { label: "Ambassador Button 01", image: ambassadorButton01, square: true },
  { label: "Ambassador Button 02", image: ambassadorButton02, square: true },
  { label: "Ambassador Button 03", image: ambassadorButton03, square: true },
  { label: "Ambassador Button 04", image: ambassadorButton04, square: true },
  { label: "Ambassador Button 05", image: ambassadorButton05, square: true },
  { label: "Ambassador Button 06", image: ambassadorButton06, square: true },
  { label: "Ambassador Button 07", image: ambassadorButton07, square: true },
  { label: "Ambassador Button 08", image: ambassadorButton08, square: true },
  { label: "Ambassador Button 09", image: ambassadorButton09, square: true },
];

const expandedCampaigns = [
  {
    title: "Healthy Living Matters",
    type: "Brand Launch / Digital Direction",
    text: "Program banner explorations testing BCRPA movement lines, logo hierarchy, colour balance, and final campaign direction.",
    feature: { label: "Final direction 04", image: healthyFinal04 },
    rail: healthyLivingAssets,
  },
  {
    title: "Registration Banner Drafts",
    type: "Wayfinding / Signage Exploration",
    text: "Eight registration banner directions exploring logo scale, type visibility, movement-line positioning, colour, and background treatments for a 6 ft by 3 ft event banner.",
    feature: { label: "Draft 2 — Red direction", image: regBannerDraftRed, wide: true },
    rail: registrationBannerDrafts,
  },
  {
    title: "Fitness Registry Banner",
    type: "Fitness Brand / Web Banner",
    text: "Registry banner drafts and final execution using the BCRPA Fitness mark, strong readability, and Ice Blue/Midnight Navy hierarchy.",
    feature: { label: "Final Registry web banner", image: registryFinal },
    rail: registryAssets,
  },
  {
    title: "E-learning Fitness Workshop",
    type: "Learning Template / Slide System",
    text: "Intro and outro slide directions for video workshops, exploring icon opacity, workshop titles, Good Luck messaging, and brand consistency.",
    feature: { label: "Final workshop slide", image: workshopFinal02 },
    rail: workshopAssets,
  },
  {
    title: "Thank You Card",
    type: "Print Card / Front and Back System",
    text: "Foldable card options shown as complete front and back pairs. Option A and Option B each presented together so the full card reads as one piece.",
    feature: { label: "Option A — front", image: thankYouOptionA, compact: true },
    rail: [
      { label: "Option A — front & back", images: [thankYouOptionA, thankYouOptionA2] },
      { label: "Option B — front & back", images: [thankYouOptionB, thankYouOptionB2] },
    ],
  },
  {
    title: "Symposium Welcome Sign",
    type: "Event Signage / On-site Context",
    text: "Welcome sign explorations supported arrival, wayfinding, and event atmosphere. The event setup photo shows the sign work in full real-world context.",
    feature: { label: "Event setup — full view", image: eventSetup, photo: true, contain: true },
    rail: welcomeAssets,
  },
  {
    title: "Ambassador Buttons",
    type: "Campaign Button Options",
    text: "Button concepts explored short connection prompts, circular type, BCRPA icon placement, and Pale Lime/Ice Blue variations on Midnight Navy.",
    feature: { label: "Featured ambassador button", image: ambassadorButton07, square: true },
    rail: ambassadorAssets,
  },
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
        <a href="#expanded">Expanded</a>
        <a href="#process">Process</a>
        <a href="#workflow">Workflow</a>
        <a href="#reflection">Reflection</a>
      </nav>

      <section className="bcrpa-hero" id="overview">
        <div className="bcrpa-hero-copy">
          <img src={bcrpaLogo} alt="BCRPA logo" className="bcrpa-hero-logo" decoding="async" />
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
          <video src={bcrpaVideo} muted loop playsInline controls preload="metadata" poster={eventSetup} />
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
        <img src={eventSetup} alt="BCRPA event setup" style={{ objectPosition: "center 30%" }} loading="lazy" decoding="async" />
        <img src={printWork} alt="BCRPA print materials" loading="lazy" decoding="async" />
        <img src={signage} alt="BCRPA signage" style={{ objectPosition: "center 40%" }} loading="lazy" decoding="async" />
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
              Most designs followed BCRPA's refreshed brand system: Midnight
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

      <section className="bcrpa-section bcrpa-colour-system">
        <div className="bcrpa-section-head split">
          <div>
            <p className="bcrpa-kicker">BCRPA Colour System</p>
            <h2>A production palette built around movement, clarity, and trust.</h2>
          </div>
          <p>
            I used the refreshed BCRPA colours as a practical system: navy for
            authority, pale and cool tones for freshness, green for grounding,
            coral for energy, and white for production-ready breathing room.
          </p>
        </div>

        <div className="bcrpa-colour-grid">
          {brandColours.map((colour) => (
            <article key={colour.name}>
              <span style={{ background: colour.value }} aria-hidden="true"></span>
              <h3>{colour.name}</h3>
              <p>{colour.use}</p>
              <small>{colour.value}</small>
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
                {item.paired ? (
                  <div className={`bcrpa-deliverable-paired ${item.tall ? "stacked" : ""}`}>
                    {item.paired.map((img, i) => (
                      <img
                        src={img}
                        alt={`${item.title} ${i === 0 ? "front" : "back"}`}
                        loading="lazy"
                        key={i}
                      />
                    ))}
                  </div>
                ) : (
                  <img src={item.image} alt={item.title} loading="lazy" />
                )}
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

      <section className="bcrpa-section bcrpa-expanded-work" id="expanded">
        <div className="bcrpa-section-head split">
          <div>
            <p className="bcrpa-kicker">Expanded Internship Work</p>
            <h2>Campaign tracks showing final direction and selected exploration.</h2>
          </div>
          <p>
            This section keeps the work organized by campaign so the page shows
            breadth without turning into an unfiltered asset dump.
          </p>
        </div>

        <div className="bcrpa-campaign-stack">
          {expandedCampaigns.map((track) => (
            <article className="bcrpa-campaign" key={track.title}>
              <div className="bcrpa-campaign-copy">
                <p className="bcrpa-campaign-type">{track.type}</p>
                <h3>{track.title}</h3>
                <span>{track.text}</span>
              </div>

              <div
                className={[
                  "bcrpa-campaign-feature",
                  track.feature.compact ? "compact" : "",
                  track.feature.square ? "square" : "",
                  track.feature.photo ? "photo" : "",
                  track.feature.contain ? "contain" : "",
                  track.feature.wide ? "wide-feature" : "",
                ].filter(Boolean).join(" ")}
              >
                <img
                  src={track.feature.image}
                  alt={`${track.title} — ${track.feature.label}`}
                  loading="lazy"
                />
                <span>{track.feature.label}</span>
              </div>

              <div className="bcrpa-asset-rail" aria-label={`${track.title} assets`}>
                {track.rail.map((item) => (
                  <article
                    className={`bcrpa-asset-card ${item.images ? "paired" : ""} ${item.square ? "square" : ""}`}
                    key={`${track.title}-${item.label}`}
                  >
                    <div className="bcrpa-asset-frame">
                      {item.images ? (
                        <div className="bcrpa-paired-assets">
                          {item.images.map((image, idx) => (
                            <img
                              src={image}
                              alt={`${item.label} ${idx === 0 ? "front" : "back"}`}
                              loading="lazy"
                              key={`${item.label}-${idx}`}
                            />
                          ))}
                        </div>
                      ) : (
                        <img src={item.image} alt={`${track.title} — ${item.label}`} loading="lazy" />
                      )}
                    </div>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
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
            I worked within BCRPA's communications environment, supporting real
            staff needs and real event deadlines while keeping visual decisions
            aligned with the organization's brand direction.
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
            Let's Work Together ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}
