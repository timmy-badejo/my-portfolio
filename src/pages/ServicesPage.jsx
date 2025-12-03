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
  const processRefs = useRef([]);
  const whyRefs = useRef([]);
  const toolsRefs = useRef([]);

  const services = [
    {
      title: '🎨 Graphic Design',
      desc: 'Clean, bold visuals that communicate and stop the scroll.',
      visual: designIcon,
      tags: ['Brand identity & logos', 'Print-ready assets', 'Social packs', 'Packaging'],
      offers: [
        'Brand identity & logo design',
        'Digital flyers & posters',
        'Social media design packs',
        'Print-ready marketing assets',
        'Packaging design',
      ],
    },
    {
      title: '💻 Web Design & Development',
      desc: 'Responsive, modern sites with smooth interactions and a clear purpose.',
      visual: collabIcon,
      tags: ['React/WordPress', 'Responsive', 'UX flows', 'Figma UI'],
      offers: [
        'Portfolio websites',
        'Business landing pages',
        'Fully responsive React or WordPress sites',
        'UI/UX design in Figma',
        'Website redesigns & optimization',
      ],
    },
    {
      title: '🧠 UI/UX Design',
      desc: 'Research + wireframes + testing = designs that work for people.',
      visual: codeIcon,
      tags: ['Flows', 'Prototypes', 'Design systems', 'App UI'],
      offers: [
        'Wireframes and prototypes',
        'User flows & journey mapping',
        'Design systems & style guides',
        'App interface design',
        'Interactive prototypes',
      ],
    },
    {
      title: '🎬 Motion + Visual Content',
      desc: 'Motion that grabs attention and keeps viewers engaged.',
      visual: motionIcon,
      tags: ['Logo anims', 'Motion graphics', 'UI anims', 'Video edits'],
      offers: [
        'Logo animations',
        'Short motion graphics',
        'UI animations',
        'Video editing for social media',
      ],
    },
    {
      title: '🚀 Brand & Creative Strategy',
      desc: 'Ideas backed by design thinking and user insight.',
      visual: collabIcon,
      tags: ['Positioning', 'Storytelling', 'Content systems'],
      offers: [
        'Brand positioning',
        'Style direction',
        'Content systems',
        'Visual storytelling',
      ],
    },
  ];

  const process = [
    {
      title: 'Discover',
      desc: 'We talk goals, audience, and brand direction.',
      visual: designIcon,
    },
    {
      title: 'Design / Prototype',
      desc: 'Sketches, wireframes, visuals, and mockups.',
      visual: motionIcon,
    },
    {
      title: 'Build',
      desc: 'Clean code and responsive layouts.',
      visual: codeIcon,
    },
    {
      title: 'Deliver',
      desc: 'Launch, files, and support after deployment.',
      visual: collabIcon,
    },
  ];

  const whyMe = [
    {
      title: 'Creative + Technical',
      desc: 'I bridge design and development—your visuals and site stay aligned.',
    },
    {
      title: 'Fast, Reliable, Easy',
      desc: 'Clear communication, quick turnarounds, and real collaboration.',
    },
    {
      title: 'User-First',
      desc: 'Every color, line, and interaction serves a purpose.',
    },
    {
      title: 'Clean. Modern. Impactful.',
      desc: 'A simple, bold style focused on telling your story right.',
    },
  ];

  const tools = ['Figma', 'React / React Native', 'JavaScript', 'HTML & CSS', 'Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'];

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

    if (processRefs.current.length) {
      gsap.set(processRefs.current, { opacity: 0, y: 30, scale: 0.95 });
      gsap.to(processRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-process',
          start: 'top 75%',
        },
      });
    }

    if (whyRefs.current.length) {
      gsap.set(whyRefs.current, { opacity: 0, y: 24 });
      gsap.to(whyRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-why',
          start: 'top 80%',
        },
      });
    }

    if (toolsRefs.current.length) {
      gsap.set(toolsRefs.current, { opacity: 0, y: 12 });
      gsap.to(toolsRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-tools',
          start: 'top 85%',
        },
      });
    }
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero" ref={heroRef}>
        <p className="services-kicker">What I Do</p>
        <h1>Design + Build digital experiences</h1>
        <p className="services-sub">
          I design and build digital experiences that feel smooth, modern, and unforgettable. My work blends graphic design,
          web development, animation, UI/UX, and a bit of my own creative flavor — clean, bold, and always user-focused.
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
            <ul className="service-offers">
              {service.offers?.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="services-why">
        <h2>Why work with me?</h2>
        <div className="services-why-grid">
          {whyMe.map((item, idx) => (
            <div
              key={item.title}
              className="service-why-card"
              ref={(el) => (whyRefs.current[idx] = el)}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="services-process-head">
          <h2>Process</h2>
          <p>How we move from brief to shipped design and code.</p>
        </div>
        <div className="services-process-grid">
          {process.map((step, idx) => (
            <div
              className="service-process-card"
              key={step.title}
              ref={(el) => (processRefs.current[idx] = el)}
            >
              <div className="service-process-top">
                <img src={step.visual} alt={step.title} className="service-visual" />
                <span className="service-pill">Step {idx + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Let’s Build Something Amazing</h2>
        <p>Ready to start a project? Reach out at <a href="mailto:hello@timmybad.com">hello@timmybad.com</a> or use the contact form.</p>
        <a className="services-btn" href="mailto:hello@timmybad.com">Email me</a>
      </section>

      <section className="services-tools">
        <h2>Tools & Technologies</h2>
        <div className="services-tools-grid">
          {tools.map((tool, idx) => (
            <div
              key={tool}
              className="service-tool"
              ref={(el) => (toolsRefs.current[idx] = el)}
            >
              {tool}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
