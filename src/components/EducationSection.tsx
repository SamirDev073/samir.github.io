
import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

// Sample education/courses data - replace with your own
const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    institution: 'Udemy',
    description: 'Desenvolvimento web completo com HTML, CSS, JavaScript, Node e React.',
    year: '2022',
    certificate: '#'
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    institution: 'Frontend Masters',
    description: 'Padrões avançados de desenvolvimento com React, hooks e gerenciamento de estado.',
    year: '2022',
    certificate: '#'
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    institution: 'Google',
    description: 'Fundamentos de design de interface e experiência do usuário para aplicações web.',
    year: '2021',
    certificate: '#'
  },
  {
    id: 4,
    title: 'Node.js & Express Masterclass',
    institution: 'Udemy',
    description: 'Desenvolvimento backend com Node.js, Express, MongoDB e Redis.',
    year: '2021',
    certificate: '#'
  },
  {
    id: 5,
    title: 'Python for Data Science',
    institution: 'Datacamp',
    description: 'Fundamentos de Python para análise de dados e visualização.',
    year: '2020',
    certificate: '#'
  }
];

const EducationSection = () => {
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
    <section id="education" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12 animated-item">Educação & Cursos</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 border-l-2 border-purple">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className="mb-10 relative animated-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[25px] bg-white p-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-purple" />
                </div>
                <div className="bg-white rounded-md p-5 shadow-sm">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h3 className="text-base font-pixel text-purple-dark">{course.title}</h3>
                    <span className="text-sm text-muted-foreground">{course.year}</span>
                  </div>
                  <p className="text-sm font-semibold mb-2">{course.institution}</p>
                  <p className="text-sm mb-3">{course.description}</p>
                  <a 
                    href={course.certificate} 
                    className="text-xs font-medium inline-flex items-center text-blue hover:underline"
                  >
                    Ver Certificado
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 animated-item">
          <p className="text-sm text-muted-foreground">
            Aprendizado contínuo é parte essencial da minha jornada como desenvolvedor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
