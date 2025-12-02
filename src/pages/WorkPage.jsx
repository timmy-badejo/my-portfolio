import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import './WorkPage.css';
import ronZalko from '../assests/Ron Zalko web design.jpg';
import timmyCare from '../assests/timmyhaircare4.jpg';
import scwCharity from '../assests/scwcharitywebpage.png';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const cardsRef = useRef([]);
  const heroRef = useRef(null);

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
    </div>
  );
};

export default WorkPage;
