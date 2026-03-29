import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const recentPosts = [
  {
    id: 1,
    title: 'Cómo elegir la campana ideal para tu quincho',
    excerpt: 'Descubre los factores clave que debes considerar al momento de diseñar y escoger la campana perfecta que combine eficiencia y elegancia.',
    image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&q=80&w=800',
    date: '10 de Marzo, 2024'
  },
  {
    id: 2,
    title: 'Medidas ideales y proporciones perfectas',
    excerpt: 'Te explicamos cómo calcular el tamaño exacto que debe tener tu campana respecto a tu parrilla para evitar cualquier retorno de humo.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    date: '28 de Febrero, 2024'
  },
  {
    id: 3,
    title: 'Mantenimiento y limpieza de tu campana',
    excerpt: 'Aprende los mejores trucos y productos recomendados para mantener el acero inoxidable de tu campana reluciente como el primer día.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    date: '15 de Enero, 2024'
  }
];

const BlogPreview = () => {
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
        padding: '6rem 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: '900', 
          color: 'var(--color-text-light)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          Consejos y <span className="text-primary">Guías</span>
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        padding: '0 1rem'
      }}>
        {recentPosts.map((post, index) => (
          <article 
            key={post.id}
            style={{
              backgroundColor: 'var(--color-primary-light)',
              border: '1px solid var(--color-border)',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + (index * 0.1)}s`,
            }}
          >
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img 
                src={post.image} 
                alt={post.title} 
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem', display: 'block' }}>
                {post.date}
              </span>
              <h3 style={{ 
                color: 'var(--color-text-light)', 
                fontSize: '1.35rem', 
                fontWeight: '700',
                marginBottom: '1rem',
                lineHeight: '1.4'
              }}>
                {post.title}
              </h3>
              <p style={{ 
                color: 'var(--color-text-muted)', 
                lineHeight: '1.6', 
                marginBottom: '1.5rem',
                flexGrow: 1
              }}>
                {post.excerpt}
              </p>
              <Link 
                to="/blog" 
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: 'auto'
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Leer artículo completo
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>arrow_forward</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link 
          to="/blog" 
          className="btn-outline" 
          style={{ textDecoration: 'none', display: 'inline-block' }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Ver todos los artículos
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;
