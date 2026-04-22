import React, { useEffect, useRef, useState } from 'react';

const examples = [
  {
    id: 1,
    title: 'Campana Con Encaje de Madera',
    // Usando placeholder temporal premium oscuro
    imgSrc: 'proyecto1.webp',
    className: 'bento-item bento-small'
  },
  {
    id: 2,
    title: 'Campana Básica',
    imgSrc: 'proyecto2.webp',
    className: 'bento-item bento-large'
  },
  {
    id: 3,
    title: 'Campana Mediterránea',
    imgSrc: 'proyecto3.webp',
    className: 'bento-item bento-large'
  },
  {
    id: 4,
    title: 'Proyecto 6',
    imgSrc: 'proyecto6.webp',
    className: 'bento-item bento-large'
  },
  {
    id: 5,
    title: 'Proyecto 5',
    imgSrc: 'proyecto5.webp',
    className: 'bento-item bento-large'
  },
  {
    id: 6,
    title: 'Campana Con Cinturón',
    imgSrc: 'proyecto4.webp',
    className: 'bento-item bento-small'
  }
];

const WorkExamples = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="container"
      style={{ padding: '6rem 0' }}
    >
      <style>
        {`
          .bento-grid {
            column-count: 1;
            column-gap: 1.5rem;
            padding: 0 1rem;
          }
          
          .bento-item {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            margin-bottom: 1.5rem;
            break-inside: avoid;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.05);
          }

          .bento-item img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .bento-item:hover img {
            transform: scale(1.05);
          }

          @media (min-width: 768px) {
            .bento-grid {
              column-count: 2;
            }
          }

          @media (min-width: 1024px) {
            .bento-grid {
              column-count: 3;
            }
          }
        `}
      </style>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '900',
          color: 'var(--color-text-light)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          Proyectos <span className="text-primary">realizados</span>
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--color-primary)',
          margin: '1.5rem auto 0',
          borderRadius: '2px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
        }}></div>
      </div>

      <div className="bento-grid">
        {examples.map((example, index) => (
          <div
            key={example.id}
            className="bento-item"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + (index * 0.1)}s`
            }}
          >
            <img src={example.imgSrc} alt={example.title} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExamples;
