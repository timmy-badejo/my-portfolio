import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesPage.css';
import designIcon from '../assests/designservice.svg';
import collabIcon from '../assests/collaboration.svg';
import codeIcon from '../assests/webdev.svg';
import motionIcon from '../assests/idea.svg';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: 'Product & UX Design',
      desc: 'Flows, wireframes, and prototypes with user testing baked into the process.',
      visual: designIcon,
      tags: ['Figma', 'User Flows', 'Usability'],
    },
    {
      title: 'Brand & Visual Systems',
      desc: 'Logos, palettes, typography, and UI kits that stay cohesive across touchpoints.',
      visual: collabIcon,
      tags: ['Brand Kits', 'UI Libraries', 'Guidelines'],
    },
    {
      title: 'Front-end Implementation',
      desc: 'React/JS builds for landing pages, portfolios, and prototypes with motion.',
      visual: codeIcon,
      tags: ['React', 'GSAP', 'Responsive'],
    },
    {
      title: 'Motion & Microinteractions',
      desc: 'Delightful transitions, scroll cues, and web-ready motion assets.',
      visual: motionIcon,
      tags: ['After Effects', 'Lottie', 'GSAP'],
    },
  ];

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
    if (!cardsRef.current.length) return;
    gsap.set(cardsRef.current, { opacity: 0, y: 30, scale: 0.95 });
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
      },
    });
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero" ref={heroRef}>
        <p className="services-kicker">Services</p>
        <h1>How I can help</h1>
        <p className="services-sub">
          From research to prototypes, visual systems to front-end builds here’s how I partner on projects.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service, idx) => (
          <div
            className="service-card"
            key={service.title}
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <div className="service-top">
              <img src={service.visual} alt={service.title} className="service-visual" />
              <span className="service-pill">Featured</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
