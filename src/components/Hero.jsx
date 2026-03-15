import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section container">
      <div
        className="hero-container"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(34, 26, 16, 0.9) 0%, rgba(34, 26, 16, 0.4) 50%, rgba(34, 26, 16, 0.2) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0g7QJvY_N2ZX1vWIEnES6iCh-XfdpYKTlDJcNFh80o5QFFqjxiL2IdQjahYYkJhAmhF0lPs4Py_50Cot-eViD3koSHEp2Uyzrw235fKfEYWnZhcDImtb0D7rSbgBe65G2ntcVs42NUdDOg4ShcCuEkJigbzli4oAK7pvK4VjhiUYk4HFQSup6N3wCbdXOg0_GcskvPu27LbgQ_lDf07-oK7W-B_NFeBlPhQ5v2MybMrANwGC2GzWNda_SAjCCpFGB5yTnIiKb1M3d')`
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
            <button className="btn-primary">Descubrir Colección</button>
            <button className="btn-outline">Proyecto Personalizado</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
