import React from 'react';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import Contact from '../components/Contact';
import Comments from '../components/Comments';

const Catalog = () => {
  return (
    <>
      <Hero />
      <section id="productos" className="container catalog-layout">
        <Sidebar />
        <div className="main-content">
          <div className="catalog-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              Mostrando <strong style={{ color: 'var(--color-text-light)' }}>6</strong> de <strong style={{ color: 'var(--color-text-light)' }}>48</strong> productos
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>
      <Comments />
      <Contact />
    </>
  );
};

export default Catalog;
