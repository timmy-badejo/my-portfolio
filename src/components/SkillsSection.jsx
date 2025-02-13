import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import $ from "jquery";
import "tilt.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { TbBrandJavascript, TbBrandReactNative, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeIndesign, TbDimensions, TbBrandAdobeXd } from "react-icons/tb";
import './SkillsSection.css';

const skillsData = [
  { icon: <FaHtml5 size={60} />, text: "HTML - Frontend Development" },
  { icon: <FaCss3Alt size={60} />, text: "CSS - Styling & Layout" },
  { icon: <TbBrandJavascript size={60} />, text: "JavaScript - Web Interactions" },
  { icon: <FaReact size={60} />, text: "React - Interactive UIs" },
  { icon: <TbBrandReactNative size={60} />, text: "React Native - Mobile Apps" },
  { icon: <TbBrandAdobePhotoshop size={60} />, text: "Photoshop - Graphic Design" },
  { icon: <TbBrandAdobeIllustrator size={80} />, text: "Illustrator - Logo & Icons" },
  { icon: <TbBrandAdobeIndesign size={80} />, text: "InDesign - Print & Layout" },
  { icon: <TbDimensions size={80} />, text: "Dimension - 3D Mockups" },
  { icon: <TbBrandAdobeXd size={80} />, text: "Adobe XD - Wireframing & Prototyping" },
  { icon: <FaFigma size={60} />, text: "Figma - UI/UX Design" }
];

const SkillsSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        $(".tilt-card").tilt({
          maxTilt: 20,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1.05,
          speed: 400,
          transition: true,
          reset: true,
          glare: true,
          maxGlare: 0.2
        });
      }, 500);
    }

    // GSAP Animation for fade-in effect
    gsap.fromTo(
      '.skills-section .skill-item',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    // Cleanup to prevent memory leaks
    return () => {
      $(".tilt-card").tilt.destroy?.();
    };
  }, []);

  return (
    <section className="skills-section container">
      <h2>Skills</h2>

      {/* Swiper Horizontal Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {skillsData.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="skill-item tilt-card">
              <div className="front">{skill.icon}</div>
              <div className="back">{skill.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SkillsSection;










