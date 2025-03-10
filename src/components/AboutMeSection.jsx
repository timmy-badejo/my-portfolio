import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "../assests/profile_image.jpg"; // Ensure correct path
import Tilt from "react-parallax-tilt"; // Import Tilt.js
import "./AboutMeSection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = () => {
  const profileRef = useRef(null);
  const marqueeRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Profile Image Animation (Entrance, Parallax, Tilt)
    gsap.fromTo(
      profileRef.current,
      { scale: 0.8, opacity: 0, rotate: 10 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 80%",
        },
      }
    );

    // Floating Circle Animation (Now Visible)
    gsap.to(circleRef.current, {
      y: 25,
      x: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Marquee Animation
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="about-me-section">
      {/* Profile Image (Left Side) with Tilt Effect */}
      <div className="profile-container">
        <div ref={circleRef} className="floating-circle"></div>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true}>
          <img
            ref={profileRef}
            src={profileImage}
            alt="Profile"
            className="profilei_mage"
          />
        </Tilt>
      </div>

      {/* About Content (Right Side) */}
      <div className="about-content">
        <h1 className="about-header">ABOUT ME</h1>
        <h3 className="about-subheader">I design, I develop, I create solutions.</h3>
        <p>
          I’m <strong>Timmy Badejo</strong>, a passionate <strong>Digital Designer and Web Developer</strong> with a keen eye for aesthetics and functionality. I specialize in crafting seamless user experiences, interactive animations, and visually captivating designs.
        </p>
        <p>
          My expertise spans <strong>UI/UX design, motion graphics, front-end development, and creative problem-solving</strong>. With a strong dedication to continuous learning, I explore new design trends, development frameworks, and animation techniques.
        </p>
        <p>
          I thrive on collaboration, transforming ideas into reality through modern web technologies and engaging digital experiences.
        </p>
      </div>

      {/* Marquee Effect (Now Takes Up a Quarter of the Page) */}
      <div className="marquee-wrapper">
  <div className="marquee">
    <span className="marquee-filled">
      DIGITAL DESIGNER • GRAPHIC DESIGNER • MOTION GRAPHIC DESIGNER • WEB DEVELOPER • UI/UX SPECIALIST • INTERACTIVE DESIGNER •
    </span>
  </div>
  <div className="marquee marquee-stroke">
    <span>
      LET'S GET IT STARTED IN YEAH • LET'S GET IT STARTED ALRIGHT • AND THE BASS KEEPS RUNNING RUNNING AND RUNNING RUNNING • OOOHHH OHHH •
    </span>
  </div>
</div>
    </section>
  );
};

export default AboutMeSection;















