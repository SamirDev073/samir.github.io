
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue/5 -z-10"></div>
      
      {/* Pixelated decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple/20 animate-float -z-10" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue/20 animate-float -z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-purple/15 animate-float -z-10" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-blue/15 animate-float -z-10" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 inline-block p-2 bg-muted rounded-md">
          <p className="font-code text-muted-foreground">Bem-vindo ao meu portfolio</p>
        </div>
        
        <h1 className="mb-6 text-4xl md:text-6xl leading-tight">
          <span className="text-purple">SAMIR</span>
          <span className="block">DEVELOPER</span>
        </h1>
        
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Transformando conceitos em código. Criando soluções digitais 
          com paixão pela tecnologia e design.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="pixel-button">
            Ver Projetos
          </a>
          <a href="#contact" className="bg-white border-2 border-purple text-purple py-3 px-5 font-pixel hover:bg-purple/5 transition-colors">
            Fale Comigo
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-2">Scroll</span>
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
