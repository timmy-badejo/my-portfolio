import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SickleAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createSickles = (num) => {
      for (let i = 0; i < num; i++) {
        const sickle = document.createElement("div");
        sickle.classList.add("sickle");
        sickle.style.left = `${Math.random() * 100}vw`;
        sickle.style.top = `${Math.random() * 100}vh`;
        sickle.style.width = `${50 + Math.random() * 100}px`;
        sickle.style.height = `${50 + Math.random() * 100}px`;
        sickle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(sickle);
      }
    };

    createSickles(10);

    gsap.utils.toArray(".sickle").forEach((sickle) => {
      gsap.to(sickle, {
        x: () => `${Math.random() * 200 - 100}px`,
        y: () => `${Math.random() * 200 - 100}px`,
        rotation: () => `${Math.random() * 360}`,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return <div id="sickle-animation-container" ref={containerRef} />;
};

export default SickleAnimation;
