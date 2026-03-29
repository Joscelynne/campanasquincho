import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="nosotros" 
      ref={sectionRef}
      className="container" 
      style={{ 
        padding: '8rem 0', 
        borderTop: '1px solid rgba(236,146,19,0.1)',
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
          Nuestra <span className="text-primary">Historia</span>
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'stretch',
        padding: '0 1rem',
        position: 'relative'
      }}>
        {/* Panel 1 */}
        <div style={{
          backgroundColor: 'var(--color-primary-light)',
          border: '1px solid var(--color-border)',
          borderRadius: '1.5rem',
          padding: '3rem 2.5rem',
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30px',
            left: '2.5rem',
            width: '60px',
            height: '60px',
            backgroundColor: 'var(--color-bg-dark)',
            border: '1px solid var(--color-primary)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)',
            boxShadow: '0 0 15px rgba(236,146,19,0.2)'
          }}>
             <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>hvac</span>
          </div>
          <h3 style={{ 
            color: 'var(--color-primary)', 
            fontSize: '1.75rem', 
            marginBottom: '1.5rem', 
            marginTop: '1rem',
            fontWeight: '700'
          }}>El Comienzo</h3>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            fontSize: '1.15rem', 
            lineHeight: '1.8', 
            margin: 0,
            flexGrow: 1
          }}>
            Todo empezó por una <strong>idea pequeña que funcionó</strong>. Al principio, nos dedicábamos a fabricar ductería especializada para equipos de aire acondicionado y todo tipo de gabinetes metálicos para extracción de aire industrial.
          </p>
        </div>

        {/* Panel 2 */}
        <div style={{
          backgroundColor: 'var(--color-primary-light)',
          border: '1px solid var(--color-border)',
          borderRadius: '1.5rem',
          padding: '3rem 2.5rem',
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30px',
            left: '2.5rem',
            width: '60px',
            height: '60px',
            backgroundColor: 'var(--color-bg-dark)',
            border: '1px solid var(--color-primary)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)',
            boxShadow: '0 0 15px rgba(236,146,19,0.2)'
          }}>
             <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>architecture</span>
          </div>
          <h3 style={{ 
            color: 'var(--color-primary)', 
            fontSize: '1.75rem', 
            marginBottom: '1.5rem', 
            marginTop: '1rem',
            fontWeight: '700'
          }}>El Ingenio</h3>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            fontSize: '1.15rem', 
            lineHeight: '1.8', 
            margin: 0,
            flexGrow: 1
          }}>
            La campana la fuimos <strong>diseñando y puliendo con el tiempo</strong>. Nadie nos enseñó a fabricar campanas; sino que nació de nuestro propio ingenio, iterando y perfeccionando cada detalle por nuestra cuenta hasta lograr la maestría en diseño que ves hoy.
          </p>
        </div>
      </div>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '6rem', 
        color: 'var(--color-primary)',
        display: 'flex',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-45deg)',
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s'
      }}>
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          backgroundColor: 'rgba(236,146,19,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(236,146,19,0.2)',
          boxShadow: '0 0 30px rgba(236,146,19,0.2), inset 0 0 20px rgba(236,146,19,0.1)'
        }}>
          <span className="material-symbols-outlined" style={{ 
            fontSize: '3rem',
            filter: 'drop-shadow(0 0 8px rgba(236,146,19,0.5))'
          }}>workspace_premium</span>
        </div>
      </div>
    </section>
  );
};

export default About;
