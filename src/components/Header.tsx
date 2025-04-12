
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="font-pixel text-xl text-purple">SAMIR<span className="text-blue">_DEV</span></a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-purple" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#about" className="hover:text-purple transition-colors">Sobre Mim</a>
          <a href="#projects" className="hover:text-purple transition-colors">Projetos</a>
          <a href="#skills" className="hover:text-purple transition-colors">Habilidades</a>
          <a href="#education" className="hover:text-purple transition-colors">Cursos</a>
          <a href="#contact" className="hover:text-purple transition-colors">Contato</a>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-purple transition-colors" onClick={toggleMenu}>Sobre Mim</a>
              <a href="#projects" className="hover:text-purple transition-colors" onClick={toggleMenu}>Projetos</a>
              <a href="#skills" className="hover:text-purple transition-colors" onClick={toggleMenu}>Habilidades</a>
              <a href="#education" className="hover:text-purple transition-colors" onClick={toggleMenu}>Cursos</a>
              <a href="#contact" className="hover:text-purple transition-colors" onClick={toggleMenu}>Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
