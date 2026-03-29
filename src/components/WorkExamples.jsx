import React, { useEffect, useRef, useState } from 'react';

const examples = [
  {
    id: 1,
    title: 'Campana Con Encaje de Madera',
    // Usando placeholder temporal premium oscuro
    imgSrc: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    className: 'bento-item bento-small'
  },
  {
    id: 2,
    title: 'Campana Básica',
    imgSrc: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&q=80&w=1200',
    className: 'bento-item bento-large'
  },
  {
    id: 3,
    title: 'Campana Mediterránea',
    imgSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    className: 'bento-item bento-large'
  },
  {
    id: 4,
    title: 'Campana Con Cinturón',
    imgSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
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
      ref={sectionRef}
      className="container"
      style={{ padding: '6rem 0' }}
    >
      <style>
        {`
          .bento-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
          }
          
          .bento-item {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            height: 300px;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.05);
          }

          .bento-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .bento-item:hover img {
            transform: scale(1.05);
          }

          .bento-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
            display: flex;
            align-items: flex-end;
            padding: 1.5rem;
            pointer-events: none;
          }

          .bento-title {
            color: #fff;
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
          }

          @media (min-width: 768px) {
            .bento-grid {
              grid-template-columns: repeat(12, 1fr);
            }
            .bento-small {
              grid-column: span 4;
            }
            .bento-large {
              grid-column: span 8;
            }
            .bento-item {
              height: 350px;
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
            className={example.className}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + (index * 0.1)}s`
            }}
          >
            <img src={example.imgSrc} alt={example.title} loading="lazy" />
            <div className="bento-overlay">
              <h3 className="bento-title">
                {example.title}
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>
                  arrow_outward
                </span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExamples;
