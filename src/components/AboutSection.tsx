
import React, { useEffect } from 'react';

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 animated-item">
            <div className="relative">
              <div className="w-64 h-64 mx-auto overflow-hidden pixel-border">
                {/* Replace with your actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-purple to-blue flex items-center justify-center">
                  <span className="font-pixel text-white text-3xl">FOTO</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue/10 -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="section-heading animated-item">Sobre Mim</h2>
            <div className="space-y-4 animated-item" style={{ animationDelay: '0.2s' }}>
              <p>
                Olá! Sou um desenvolvedor apaixonado por criar experiências digitais elegantes e funcionais.
                Com foco em desenvolvimento web e mobile, busco transformar ideias em aplicações que não apenas
                funcionem bem, mas também proporcionem uma excelente experiência para os usuários.
              </p>
              <p>
                Minha jornada no universo da programação começou há X anos e desde então venho
                aprimorando minhas habilidades em diversas tecnologias e frameworks. Busco constantemente
                aprender novas linguagens e metodologias para melhorar meu trabalho como desenvolvedor.
              </p>
              <p>
                Quando não estou codando, gosto de [seus hobbies ou interesses pessoais]. Acredito que
                essas atividades me ajudam a manter a criatividade e o equilíbrio necessários para
                resolver problemas complexos de programação.
              </p>
            </div>
            
            <div className="mt-8 animated-item" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="pixel-button inline-block">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
