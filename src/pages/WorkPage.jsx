import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import './WorkPage.css';
import ronZalko from '../assests/Ron Zalko web design.jpg';
import timmyCare from '../assests/timmyhaircare4.jpg';
import scwCharity from '../assests/scwcharitywebpage.png';
import ideaIcon from '../assests/idea.svg';
import smartWorkIcon from '../assests/smart_work.svg';
import codingIcon from '../assests/coding & development.svg';
import collaborationIcon from '../assests/collaboration.svg';
import ronWire1 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_01.jpg';
import ronWire2 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_02.jpg';
import ronWire3 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_03.jpg';
import ronWire4 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_04.jpg';
import ronWire5 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_05.jpg';
import ronWire6 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_06.jpg';
import ronWire7 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_07.jpg';
import ronWire8 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_08.jpg';
import ronWire9 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_09.jpg';
import ronWire10 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_10.jpg';
import ronWire11 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_11.jpg';
import ronWire12 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_12.jpg';
import timmyHairCare1 from '../assests/timmyhaircare1.jpg';
import timmyHairCare2 from '../assests/timmyhaircare2.jpg';
import timmyHairCare3 from '../assests/timmyhaircare3.jpg';
import scwWire1 from '../assests/SCW Charity Website Wireframe A 2_Page_01.jpg';
import scwWire2 from '../assests/SCW Charity Website Wireframe A 2_Page_02.jpg';
import scwWire3 from '../assests/SCW Charity Website Wireframe A 2_Page_03.jpg';
import scwWire4 from '../assests/SCW Charity Website Wireframe A 2_Page_04.jpg';
import scwWire5 from '../assests/SCW Charity Website Wireframe A 2_Page_05.jpg';
import scwWire6 from '../assests/SCW Charity Website Wireframe A 2_Page_06.jpg';
import scwWire7 from '../assests/SCW Charity Website Wireframe A 2_Page_07.jpg';
import scwWire8 from '../assests/SCW Charity Website Wireframe A 2_Page_08.jpg';
import scwWire9 from '../assests/SCW Charity Website Wireframe A 2_Page_09.jpg';
import scwWire10 from '../assests/SCW Charity Website Wireframe A 2_Page_10.jpg';
import scwWire11 from '../assests/SCW Charity Website Wireframe A 2_Page_11.jpg';
import scwWire12 from '../assests/SCW Charity Website Wireframe A 2_Page_12.jpg';
import scwWire13 from '../assests/SCW Charity Website Wireframe A 2_Page_13.jpg';
import melodyBeats from '../assests/MelodyCard1.jpg';
import melody3d from '../assests/3D for melody.png';
import melodyBeatsLogo from '../assests/Beats for melody.png';
import melodyBusiness from '../assests/Buisness name for melody.png';
import melodyEntertainment from '../assests/Entertainment Text Layer for melody.png';
import melodyLogoBlue from '../assests/Melody Logo 2 blue for melody.png';
import melodyLogoPoster from '../assests/Melody Logo poster cards for melody.png';
import melodyBeatsAlt from '../assests/MelodyCard2.jpg';
import melodyPdf1 from '../assests/melodyBeatsDocument_Page_01.jpg';
import melodyPdf2 from '../assests/melodyBeatsDocument_Page_02.jpg';
import melodyPdf3 from '../assests/melodyBeatsDocument_Page_03.jpg';
import melodyPdf4 from '../assests/melodyBeatsDocument_Page_04.jpg';
import melodyPdf5 from '../assests/melodyBeatsDocument_Page_05.jpg';
import melodyPdf6 from '../assests/melodyBeatsDocument_Page_06.jpg';
import melodyPdf7 from '../assests/melodyBeatsDocument_Page_07.jpg';
import melodyPdf8 from '../assests/melodyBeatsDocument_Page_08.jpg';
import melodyPdf9 from '../assests/melodyBeatsDocument_Page_09.jpg';
import melodyPdf10 from '../assests/melodyBeatsDocument_Page_10.jpg';
import melodyPdf11 from '../assests/melodyBeatsDocument_Page_11.jpg';
import melodyPdf12 from '../assests/melodyBeatsDocument_Page_12.jpg';
import melodyCard1 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card for melody.jpg';
import melodyCard2 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card2 for melody.jpg';
import melodyCard3 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card3 for melody.jpg';
import melodyCard4 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card4 for melody.jpg';
import melodyCard5 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card5 for melody.jpg';
import melodyCard6 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card6 for melody.jpg';
import melodyPost1 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards for melody.jpg';
import melodyPost2 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards2 for melody.jpg';
import melodyPost3 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards3 for melody.jpg';
import melodyPost4 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards4 for melody.jpg';
import melodyPost5 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards5 for melody.jpg';
import melodyPost6 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards6 for melody.jpg';
import melodyBlue from '../assests/melody blue for melody.png';
import melodyHeadphones from '../assests/melody head phones for melody.png';
import melodyShape from '../assests/melody shape logo for melody.png';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const cardsRef = useRef([]);
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const processRefs = useRef([]);

  const workItems = [
    {
      title: 'Ron Zalko Web Redesign',
      desc: 'UX refresh with annotated wireframes and case-study-ready prototype.',
      image: ronZalko,
      tags: ['UX/UI', 'Web', 'Case Study'],
      link: '/projects/1',
    },
    {
      title: 'TimmyCare App Redesign',
      desc: 'Mobile flows, usability findings, and interactive prototype.',
      image: timmyCare,
      tags: ['Product', 'React Native', 'Prototype'],
      link: '/projects/3',
    },
    {
      title: 'SCW Charity Website',
      desc: 'Responsive layouts, storytelling deck, and accessible patterns.',
      image: scwCharity,
      tags: ['Web', 'Accessibility', 'CMS'],
      link: '/projects/4',
    },
  ];

  const galleryImages = [
    ronWire1, ronWire2, ronWire3, ronWire4, ronWire5, ronWire6, ronWire7, ronWire8, ronWire9, ronWire10, ronWire11, ronWire12,
    timmyCare, timmyHairCare1, timmyHairCare2, timmyHairCare3,
    scwWire1, scwWire2, scwWire3, scwWire4, scwWire5, scwWire6, scwWire7, scwWire8, scwWire9, scwWire10, scwWire11, scwWire12, scwWire13,
    melodyBeats, melody3d, melodyBeatsLogo, melodyBusiness, melodyEntertainment, melodyLogoBlue, melodyLogoPoster, melodyBeatsAlt,
    melodyPdf1, melodyPdf2, melodyPdf3, melodyPdf4, melodyPdf5, melodyPdf6, melodyPdf7, melodyPdf8, melodyPdf9, melodyPdf10, melodyPdf11, melodyPdf12,
    melodyCard1, melodyCard2, melodyCard3, melodyCard4, melodyCard5, melodyCard6,
    melodyPost1, melodyPost2, melodyPost3, melodyPost4, melodyPost5, melodyPost6,
    melodyBlue, melodyHeadphones, melodyShape,
  ];

  const processSteps = [
    {
      title: 'Discover',
      desc: 'Clarify the problem, audience, and constraints. Align on goals and success signals.',
      badge: 'Step 1',
      visual: ideaIcon,
    },
    {
      title: 'Define & Plan',
      desc: 'Map flows, scope the deliverables, and pick the right fidelity for prototypes.',
      badge: 'Step 2',
      visual: smartWorkIcon,
    },
    {
      title: 'Design & Prototype',
      desc: 'Create visuals, motion cues, and interactive prototypes with quick feedback loops.',
      badge: 'Step 3',
      visual: collaborationIcon,
    },
    {
      title: 'Validate & Ship',
      desc: 'Usability checks, polish, and handoff—or implement directly with React/GSAP.',
      badge: 'Step 4',
      visual: codingIcon,
    },
  ];

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }

    if (!cardsRef.current.length) return;
    gsap.set(cardsRef.current, { opacity: 0, y: 30, scale: 0.96 });
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.work-grid',
        start: 'top 75%',
      },
    });

    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current.querySelectorAll('.work-gallery-card'),
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.work-gallery',
            start: 'top 75%',
          },
        }
      );
    }

    if (processRefs.current.length) {
      gsap.set(processRefs.current, (card, i) => ({
        y: i * 22,
        scale: 1 - i * 0.04,
        opacity: 0,
        rotateX: -6,
      }));
      gsap.to(processRefs.current, {
        opacity: 1,
        rotateX: 0,
        y: (i) => i * 10,
        scale: (i) => 1 - i * 0.02,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-process',
          start: 'top 75%',
        },
      });
    }
  }, []);

  return (
    <div className="work-page">
      <section className="work-hero" ref={heroRef}>
        <div>
          <p className="work-kicker">Selected Work</p>
          <h1>Case studies & shipped pieces</h1>
          <p className="work-sub">
            A snapshot of coursework and client projects with prototypes, motion, and UX artifacts.
          </p>
        </div>
        <div className="work-hero-pill">
          <span>UX</span>
          <span>Front-end</span>
          <span>Motion</span>
        </div>
      </section>

      <section className="work-grid">
        {workItems.map((item, idx) => (
          <Tilt key={item.title} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.2}>
            <a
              href={item.link}
              className="work-card"
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <div className="work-image-wrap">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="work-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="work-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </Tilt>
        ))}
      </section>

      <section className="work-process">
        <div className="work-process-head">
          <h2>My Process</h2>
          <p>How I move from brief to shipped deliverables.</p>
        </div>
        <div className="work-process-stack">
          {processSteps.map((step, idx) => (
            <div
              className="work-process-card"
              key={step.title}
              ref={(el) => (processRefs.current[idx] = el)}
            >
              <div className="work-process-pip pip-top">
                <img src={step.visual} alt="" />
              </div>
              <div className="work-process-top">
                <span className="work-process-badge">{step.badge}</span>
                <span className="work-process-title">{step.title}</span>
              </div>
              <p>{step.desc}</p>
              <div className="work-process-pip pip-bottom">
                <img src={step.visual} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="work-gallery" ref={galleryRef}>
        <div className="work-gallery-head">
          <h2>Featured Project Gallery</h2>
          <p>Every gallery image from the featured projects, sequenced together.</p>
        </div>
        <div className="work-gallery-grid">
          {galleryImages.map((img, idx) => (
            <div className="work-gallery-card" key={idx}>
              <img src={img} alt={`Featured gallery ${idx + 1}`} />
              <span className="work-gallery-label">Slide {idx + 1}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
