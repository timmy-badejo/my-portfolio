// src/components/AboutHeroComposite.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profileImage from "../assests/profile_image.jpg";
import Tilt from "react-parallax-tilt";
import "./AboutHeroComposite.css";

const AboutHeroComposite = () => {
  const marqueeRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Floating circles (gentle)
    if (!prefersReduced) {
      circlesRef.current.forEach((circle) => {
        gsap.to(circle, {
          x: "random(-40,40)",
          y: "random(-40,40)",
          rotation: "random(-30,30)",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    }

    // Marquee (slow, linear)
    if (!prefersReduced && marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 25,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section className="about-hero">
      {/* floating decor */}
      <div className="about-hero__circles">
        {["#690B22", "#FFB38E", "#310031", "#BCA58E"].map((c, i) => (
          <span
            key={i}
            ref={(el) => (circlesRef.current[i] = el)}
            className="about-hero__circle"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>

      {/* content grid */}
      <div className="about-hero__content">
        {/* profile card */}
        <div className="about-hero__profile">
          <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable glareMaxOpacity={0.2}>
            <img src={profileImage} alt="Timmy Badejo" className="about-hero__avatar" />
          </Tilt>
          <h1 className="about-hero__name">Timilehin Yomi-Badejo</h1>
          <p className="about-hero__title">New Media Designer & Web Developer</p>
        </div>

        {/* about text */}
        <div className="about-hero__copy">
          <h2 className="about-hero__heading">ABOUT ME</h2>
          <h3 className="about-hero__tag">I design, I develop, I create solutions.</h3>
          <p>
            I’m <strong>Timmy Badejo</strong>, a passionate <strong>Digital Designer and Web Developer</strong> focused on
            seamless user experiences and interactive, visually compelling work.
          </p>
          <p>
            My skills span <strong>UI/UX, motion, front-end,</strong> and <strong>creative problem-solving</strong>. I thrive on
            collaboration—turning ideas into polished, performant products.
          </p>
        </div>
      </div>

      {/* marquee band */}
      <div className="about-hero__marquee">
        <div className="about-hero__marquee-track" ref={marqueeRef}>
          <span className="about-hero__marquee-fill">
            DIGITAL DESIGNER • GRAPHIC DESIGNER • MOTION GRAPHIC DESIGNER • WEB DEVELOPER • UI/UX SPECIALIST •
            INTERACTIVE DESIGNER •
          </span>
        </div>
        <div className="about-hero__marquee-stroke">
          <span>
            LET’S GET IT STARTED • LET’S GET IT STARTED ALRIGHT • AND THE BASS KEEPS RUNNING • OOH OOH •
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroComposite;
