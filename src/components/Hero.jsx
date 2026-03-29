import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section container">
      <div
        className="hero-container"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(34, 26, 16, 0.9) 0%, rgba(34, 26, 16, 0.4) 50%, rgba(34, 26, 16, 0.2) 100%), url('/hero.png')`
        }}
      >
        <div className="hero-content">
          <span className="hero-subtitle">Campanas creadas artesanalmente</span>
          <h1 className="hero-title">
            Eleva tu <span className="text-primary">experiencia</span> culinaria
          </h1>
          <p className="hero-desc">
            Campanas y parrillas de alta calidad diseñadas para la cocina exterior sofisticada.
          </p>
          <div className="flex gap-4" style={{ marginTop: '1rem' }}>
            <button className="btn-primary">Ver campanas</button>
            <button className="btn-outline">Cotiza tu proyecto</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
