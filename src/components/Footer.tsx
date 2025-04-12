
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <a href="#hero" className="font-pixel text-xl text-purple mb-6 inline-block">DEV<span className="text-blue">_PORTFOLIO</span></a>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#about" className="text-sm hover:text-purple transition-colors">Sobre</a>
          <a href="#projects" className="text-sm hover:text-purple transition-colors">Projetos</a>
          <a href="#skills" className="text-sm hover:text-purple transition-colors">Habilidades</a>
          <a href="#education" className="text-sm hover:text-purple transition-colors">Cursos</a>
          <a href="#contact" className="text-sm hover:text-purple transition-colors">Contato</a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          &copy; {currentYear} Dev Portfolio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
