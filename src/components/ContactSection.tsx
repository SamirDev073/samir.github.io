
import React from 'react';
import { Mail, Github, Linkedin, Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12 animated-item">Entre em Contato</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animated-item">
            <h3 className="font-pixel text-xl mb-6 text-purple-dark">Vamos Conversar</h3>
            <p className="mb-8">
              Estou disponível para freelance, trabalho integral ou para discutir ideias de projetos.
              Entre em contato comigo através de um dos canais abaixo!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue mr-4" />
                <span>seu-email@exemplo.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue mr-4" />
                <span>Localização, Brasil</span>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-purple hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-purple hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-purple hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animated-item" style={{ animationDelay: '0.2s' }}>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                  placeholder="seu-email@exemplo.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                  placeholder="Como posso ajudar?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="pixel-button w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
