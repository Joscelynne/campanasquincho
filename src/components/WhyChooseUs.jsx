import React, { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    id: 1,
    icon: 'diamond',
    title: 'Calidad Premium',
    text: 'Utilizamos los mejores materiales, asegurando que cada campana sea resistente, duradera y mantenga su elegancia con el paso del tiempo.'
  },
  {
    id: 2,
    icon: 'format_paint',
    title: 'Diseño Exclusivo',
    text: 'Cada modelo es diseñado y pulido con ingenio propio, garantizando un acabado exclusivo que se adapta a la perfección al estilo y medida de tu quincho.'
  },
  {
    id: 3,
    icon: 'handyman',
    title: 'Fabricación Artesanal',
    text: 'Cuidamos cada detalle, desde el primer corte hasta el pulido final, entregando un producto hecho con verdadera pasión y precisión.'
  },
  {
    id: 4,
    icon: 'verified',
    title: 'Experiencia',
    text: 'Nacimos de una idea pequeña que evolucionó rápidamente gracias a nuestro fuerte compromiso con la excelencia y el trabajo bien hecho.'
  }
];

const WhyChooseUs = () => {
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
      style={{
        padding: '6rem 0 8rem 0',
        overflow: 'hidden'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '900',
          color: 'var(--color-text-light)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          ¿Por qué <span className="text-primary">elegirnos?</span>
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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2.5rem',
        padding: '0 1rem'
      }}>
        {reasons.map((reason, index) => (
          <div
            key={reason.id}
            style={{
              backgroundColor: 'var(--color-bg-dark)',
              border: '1px solid var(--color-border)',
              borderRadius: '1.5rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + (index * 0.15)}s`,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(236,146,19,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            }}
          >
            {/* Background subtle glow on hover */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(circle at top, rgba(236,146,19,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0
            }}></div>

            <div style={{
              width: '70px',
              height: '70px',
              backgroundColor: 'rgba(236,146,19,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              marginBottom: '1.5rem',
              border: '1px solid rgba(236,146,19,0.2)',
              zIndex: 1
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>{reason.icon}</span>
            </div>

            <h3 style={{
              color: 'var(--color-text-light)',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              fontWeight: '700',
              zIndex: 1
            }}>{reason.title}</h3>

            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              lineHeight: '1.6',
              margin: 0,
              zIndex: 1
            }}>
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
