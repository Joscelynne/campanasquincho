import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button onClick={() => navigate(-1)} style={{ color: 'var(--color-text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '2rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
          <span className="material-symbols-outlined">arrow_back</span> Volver
        </button>
        <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: '800' }}>
          Sobre Nosotros
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
          <p>
            En <strong style={{ color: 'var(--color-text-light)' }}>Mis Campanas Quincho</strong>, somos una empresa familiar apasionada por la excelencia en la fabricación y diseño de equipamiento para quinchos de alto estándar.
          </p>
          <p>
            Nuestra historia comienza con la visión de crear espacios únicos donde las familias y amigos puedan reunirse a compartir momentos inolvidables en torno a una buena comida. Nos dedicamos a transformar tu área de parrilla en el lugar favorito de tu hogar.
          </p>
          <p>
            Trabajamos con materiales de la más alta calidad y prestamos atención a cada detalle en el proceso de fabricación, garantizando que cada campana que sale de nuestro taller cumpla con los estándares más exigentes de durabilidad, funcionalidad y estética.
          </p>
          <p>
            Más que fabricantes, somos creadores de experiencias. Entendemos que cada proyecto es único, por lo que ofrecemos asesoría personalizada para asegurar que el resultado final supere tus expectativas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
