import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import $ from "jquery";
import 'tilt.js';
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandJavascript, TbBrandReactNative, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeIndesign, TbDimensions, TbBrandAdobeXd } from "react-icons/tb";
import './SkillsSection.css';

const skillsData = [
  { icon: <FaHtml5 size={50} />, title: "HTML", description: "Frontend structure and semantic web design." },
  { icon: <FaCss3Alt size={50} />, title: "CSS", description: "Styling, responsive design, and animations." },
  { icon: <TbBrandJavascript size={50} />, title: "JavaScript", description: "Interactive web elements and logic." },
  { icon: <FaReact size={50} />, title: "React", description: "Building dynamic and scalable web apps." },
  { icon: <TbBrandReactNative size={50} />, title: "React Native", description: "Mobile application development." },
  { icon: <TbBrandAdobePhotoshop size={50} />, title: "Photoshop", description: "Graphic design and image editing." },
  { icon: <TbBrandAdobeIllustrator size={50} />, title: "Illustrator", description: "Vector graphics and logo design." },
  { icon: <TbBrandAdobeIndesign size={50} />, title: "InDesign", description: "Layout and print design." },
  { icon: <TbDimensions size={50} />, title: "Dimension", description: "3D product mockups and visuals." },
  { icon: <TbBrandAdobeXd size={50} />, title: "Adobe XD", description: "Wireframing and prototyping." },
  { icon: <FaFigma size={50} />, title: "Figma", description: "UI/UX design collaboration tool." },
  {icon: <FaGithub size={50} />, title: "Githhub", description: "Collaboration to build something amazing together."}
  
];

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    $(".tilt-card").tilt({
      maxTilt: 15,
      perspective: 1000,
      scale: 1.05,
      speed: 400,
      glare: true,
      maxGlare: 0.3,
    });

    gsap.fromTo(".skill-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" });
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-content">
        <div className="skills-intro">
          <h2>MY SKILL</h2>
          <p className="subheading">GROWING OVER TIME</p>
          <p className="description">Constantly evolving and adapting to new tools and technologies to enhance design and development processes.</p>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} 
                 className="skill-card" 
                 onMouseEnter={() => setActiveSkill(index)} 
                 onMouseLeave={() => setActiveSkill(null)}>
              {skill.icon}
              <h3>{skill.title}</h3>
              {activeSkill === index && <p className="skill-description">{skill.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;











