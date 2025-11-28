import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Asset2 from "../assests/Asset2.svg";
import Asset3 from "../assests/Asset3.svg";
import Asset4 from "../assests/Asset4.svg";
import Asset5 from "../assests/Asset5.svg";
import Asset6 from "../assests/Asset6.svg";
import Asset7 from "../assests/Asset7.svg";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const svgRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    // 🔹 Hero Text Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );

    // 🔹 Floating SVG Animation
    svgRefs.current.forEach((svg, index) => {
      gsap.to(svg, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-10, 10)",
        duration: 5 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <section className="hero-section">
      {/* 🔹 Large Centered Hero Text */}
      <h1 ref={textRef} className="hero-text">
        <span>INTERACTIVE DESIGNER</span>
        <span>AND WEB DEVELOPER</span>
        <span>CREATIVE CODER</span>
        <span>DIGITAL EXPERIENCE DESIGNER</span>
      </h1>

      {/* 🔹 Animated SVGs */}
      <div className="svg-container">
        {[Asset2, Asset3, Asset4, Asset5, Asset6, Asset7].map((asset, index) => (
          <img
            key={index}
            ref={(el) => (svgRefs.current[index] = el)}
            src={asset}
            alt={`Animated Asset ${index + 2}`}
            className="floating-svg"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
