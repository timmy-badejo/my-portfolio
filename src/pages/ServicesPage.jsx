import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  const testimonialRefs = useRef([]);
  const faqRefs = useRef([]);

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



  const tools = ['Figma', 'React / React Native', 'JavaScript', 'HTML & CSS', 'Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'];

  const testimonials = [
    { author: 'Mahdieh (BCIT partner)', quote: 'Timmy is always willing to put the work in and effort.' },
    { author: 'Nancy (BCIT teammate)', quote: 'Timmy is very detailed and patient when he worked in my group project.' },
    { author: 'Precious (Qualicare/BC client)', quote: 'Can always trust Timmy to deliver quick work for banners and social media flyers.' },
    { author: 'Mr. Hart (Church tech lead)', quote: 'Always like Timmy’s design and his willingness to adjust design to what is requested—even a thousand times lol.' },
    { author: 'Daniel (KVDST project)', quote: 'Coolest, chillest coding buddy.' },
  ];

  const faqs = [
    { q: 'How long does a project take?', a: 'Most projects run 2–6 weeks depending on scope, assets, and feedback speed.' },
    { q: 'Can you help with brand strategy?', a: 'Yes—brand story discovery, positioning, and style direction are part of the process.' },
    { q: 'Do you build mobile apps?', a: 'I design app UI/UX and can prototype in React Native; I collaborate with devs for full builds.' },
    { q: 'Do you work with small budgets?', a: 'We can right-size scope to fit budgets—starting with a discovery call to prioritize essentials.' },
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

    if (testimonialRefs.current.length) {
      gsap.set(testimonialRefs.current, { opacity: 0, y: 18 });
      gsap.to(testimonialRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-testimonials',
          start: 'top 80%',
        },
      });
    }

    if (faqRefs.current.length) {
      gsap.set(faqRefs.current, { opacity: 0, y: 14 });
      gsap.to(faqRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-faq',
          start: 'top 80%',
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

      <section className="services-testimonials">
        <h2>Testimonials</h2>
        <div className="services-testimonials-grid">
          {testimonials.map((item, idx) => (
            <div
              key={item.author}
              className="service-testimonial-card"
              ref={(el) => (testimonialRefs.current[idx] = el)}
            >
              <p className="testimonial-quote">“{item.quote}”</p>
              <p className="testimonial-author">{item.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-faq">
        <h2>FAQ</h2>
        <div className="services-faq-grid">
          {faqs.map((item, idx) => (
            <div
              key={item.q}
              className="service-faq-card"
              ref={(el) => (faqRefs.current[idx] = el)}
            >
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Let’s build something unforgettable.</h2>
        <p>Ready to start a project? Reach out at <a href="mailto:hello@timmybad.com">hello@timmybad.com</a> or use the contact form.</p>
        <Link className="services-btn" to="/contact">Work With Me</Link>
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
