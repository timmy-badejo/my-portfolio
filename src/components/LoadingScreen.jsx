import React, { useEffect } from 'react';
import { gsap } from 'gsap'; // Import GSAP for animation

const LoadingScreen = ({ onAnimationComplete }) => {
  useEffect(() => {
    // GSAP animation for the "TC" text
    gsap.fromTo(
      '.tc-text',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'bounce.out' }
    );

    // TimmyCreative animation - animate each letter
    gsap.fromTo(
      '.timmy-creative span',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Stagger each letter's animation
        delay: 1.5, // Start after the TC text animation
        ease: 'power2.out',
      }
    );

    // Drop shadow animation
    gsap.to('.timmy-creative span', {
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut',
    });

    // Fade out the loading screen after animation completes
    setTimeout(() => {
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 1,
        onComplete: onAnimationComplete,
      });
    }, 5100); // Total animation time (TC + TimmyCreative)
  }, [onAnimationComplete]);

  return (
    <div className="loading-screen">
      <div className="tc-text">TC</div>
      <div className="timmy-creative">
        {['T', 'i', 'm', 'm', 'y', 'C', 'r', 'e', 'a', 't', 'i', 'v', 'e'].map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;





