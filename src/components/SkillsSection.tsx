
import React, { useEffect } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Python', level: 65 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Git & DevOps', level: 70 }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-pixel text-sm">{name}</span>
      <span className="font-code text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-purple to-blue transition-all duration-1000" 
        style={{ width: `${level}%`, transform: 'translateX(-100%)'}}
      ></div>
    </div>
  </div>
);

const SkillsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          const skillBars = entry.target.querySelectorAll('.skill-bar-inner');
          skillBars.forEach((bar) => {
            if (bar instanceof HTMLElement) {
              bar.style.transform = 'translateX(0)';
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animated-item');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12 animated-item">Minhas Habilidades</h2>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animated-item">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel text-sm">{skill.name}</span>
                    <span className="font-code text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded overflow-hidden">
                    <div 
                      className="skill-bar-inner h-full bg-gradient-to-r from-purple to-blue transition-all duration-1000"
                      style={{ width: `${skill.level}%`, transform: 'translateX(-100%)'}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="animated-item" style={{ animationDelay: '0.2s' }}>
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel text-sm">{skill.name}</span>
                    <span className="font-code text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded overflow-hidden">
                    <div 
                      className="skill-bar-inner h-full bg-gradient-to-r from-purple to-blue transition-all duration-1000"
                      style={{ width: `${skill.level}%`, transform: 'translateX(-100%)'}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center animated-item" style={{ animationDelay: '0.4s' }}>
          <p className="mb-6 max-w-2xl mx-auto">
            Sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para 
            criar soluções cada vez mais eficientes e inovadoras.
          </p>
          <div className="inline-flex items-center justify-center font-pixel text-sm px-3 py-2 bg-muted rounded-md">
            <span className="text-purple mr-2">const</span> 
            <span className="text-blue-dark">learning</span> 
            <span className="mx-2">=</span> 
            <span className="text-purple-dark">true;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
