import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: '¿Qué tipos de campanas ofrecen?',
    answer: 'Ofrecemos campanas a medida tanto para sectores residenciales como industriales, diseñadas específicamente para adaptarse al espacio y a los requerimientos de extracción de tu quincho o cocina.'
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer: 'Puedes explorar nuestro catálogo y enviarnos tus dudas o solicitudes directamente por WhatsApp. También puedes llenar el formulario de contacto indicando tus medidas estimadas y nos pondremos en contacto contigo a la brevedad.'
  },
  {
    question: '¿Ofrecen servicios de instalación?',
    answer: 'Sí, contamos con un equipo experto que se encarga de la instalación completa de tu campana, garantizando que el sistema de tiro funcione de manera óptima y eficiente sin retorno de humo.'
  },
  {
    question: '¿Ofrecen traslado y rectificación de medidas?',
    answer: 'Totalmente. Realizamos visitas a terreno para rectificar las medidas exactas antes de fabricar, y nos encargamos del traslado seguro del producto hasta tus instalaciones para su montaje final.'
  },
  {
    question: '¿Puedo ver proyectos anteriores que han realizado?',
    answer: '¡Por supuesto! Si nos contactas por WhatsApp estaremos encantados de enviarte un portafolio con fotografías y videos de nuestros últimos proyectos instalados y funcionando.'
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  const contentEl = useRef(null);

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button 
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          color: 'var(--color-text-light)',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          textAlign: 'left'
        }}
        onClick={onClick}
      >
        <span style={{ paddingRight: '1rem', lineHeight: '1.4' }}>{faq.question}</span>
        <span 
          className="material-symbols-outlined" 
          style={{ 
            color: 'var(--color-primary)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            flexShrink: 0
          }}
        >
          expand_more
        </span>
      </button>
      <div 
        ref={contentEl}
        style={{
          height: isOpen ? (contentEl.current ? contentEl.current.scrollHeight : 'auto') : '0px',
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <p style={{ 
          paddingBottom: '1.5rem', 
          color: 'var(--color-text-muted)', 
          margin: 0,
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Primera pestaña abierta por defecto
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

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      id="faq"
      ref={sectionRef}
      className="container" 
      style={{ 
        padding: '6rem 0 8rem 0', 
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        padding: '0 1rem'
      }}>
        {/* Columna Izquierda: Título y Descripción */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '900', 
            color: 'var(--color-text-light)',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }}>
            Preguntas <span style={{ display: 'block' }}>Frecuentes</span>
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: 'var(--color-primary)',
            margin: '1.5rem 0',
            borderRadius: '2px'
          }}></div>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            fontSize: '1.1rem', 
            lineHeight: '1.7',
            maxWidth: '400px'
          }}>
            Pregúntanos cualquier cosa sobre nuestros productos y servicios, y obtén respuestas claras.
          </p>
        </div>

        {/* Columna Derecha: Acordeón de FAQs */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          borderTop: '1px solid rgba(255,255,255,0.08)' // Línea inicial del acordeón
        }}>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => handleToggle(index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
