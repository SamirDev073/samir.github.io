
import React, { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Sample project data - replace with your own projects
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Uma plataforma de e-commerce completa com carrinho de compras, pagamentos e painel de administração.',
    image: 'gradient',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    liveDemo: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, filtros e notificações.',
    image: 'gradient',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    github: '#',
    liveDemo: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Site de portfolio responsivo com animações suaves e design moderno.',
    image: 'gradient',
    tags: ['HTML/CSS', 'JavaScript', 'GSAP'],
    github: '#',
    liveDemo: '#'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Dashboard para análise de redes sociais com gráficos interativos e relatórios.',
    image: 'gradient',
    tags: ['React', 'D3.js', 'Express'],
    github: '#',
    liveDemo: '#'
  }
];

const ProjectsSection = () => {
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
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12 animated-item">Meus Projetos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animated-item" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image mb-4 aspect-video overflow-hidden rounded">
                <div className={`w-full h-full bg-gradient-to-br from-purple to-blue flex items-center justify-center`}>
                  <span className="font-pixel text-white text-xl">PROJETO {project.id}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-pixel mb-2 text-purple-dark">{project.title}</h3>
              <p className="mb-3 text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="pixel-badge">{tag}</span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a href={project.github} className="inline-flex items-center text-sm font-medium hover:text-purple">
                  <Github size={16} className="mr-1" /> Código
                </a>
                <a href={project.liveDemo} className="inline-flex items-center text-sm font-medium hover:text-blue">
                  <ExternalLink size={16} className="mr-1" /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animated-item">
          <a href="#" className="pixel-button">
            Ver Mais Projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
