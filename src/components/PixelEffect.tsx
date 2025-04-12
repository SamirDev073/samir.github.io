
import React, { useEffect } from 'react';

const PixelEffect = () => {
  useEffect(() => {
    // Intersection Observer to trigger animation when elements are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Target all animated items
    const animatedElements = document.querySelectorAll('.animated-item');
    animatedElements.forEach(el => observer.observe(el));
    
    // Target skill bars for animation
    const skillBars = document.querySelectorAll('.skill-bar-inner');
    
    const skillBarObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target instanceof HTMLElement) {
            entry.target.style.transform = 'translateX(0)';
          }
          skillBarObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    skillBars.forEach(bar => skillBarObserver.observe(bar));
    
    // Cleanup
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      skillBars.forEach(bar => skillBarObserver.unobserve(bar));
    };
  }, []);
  
  return null; // This component doesn't render anything, just adds effects
};

export default PixelEffect;
