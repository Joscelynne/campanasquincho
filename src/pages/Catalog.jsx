import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import WorkExamples from '../components/WorkExamples';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';
import Location from '../pages/Location';

const Catalog = () => {
  return (
    <>
      <Hero />
      <section id="productos" className="container catalog-layout">
        <div className="catalog-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Mostrando <strong style={{ color: 'var(--color-text-light)' }}>6</strong> de <strong style={{ color: 'var(--color-text-light)' }}>48</strong> productos
          </p>
        </div>
        <ProductGrid />
      </section>
      <Services />
      <About />
      <WhyChooseUs />
      <WorkExamples />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Location />
    </>
  );
};

export default Catalog;
