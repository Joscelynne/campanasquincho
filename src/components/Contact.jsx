import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="container" style={{ padding: '6rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--color-text-light)' }}>
          Cuéntanos tu <span className="text-primary">Proyecto</span>
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--color-primary)',
          margin: '1.5rem auto 0',
          borderRadius: '2px'
        }}></div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
          Estamos aquí para responder a tus dudas y diseñar el espacio al aire libre que siempre imaginaste.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>

        {/* ROW 1: Información de Proceso (Cotizar y Agendar) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'stretch'
        }}>

          {/* Card: Cómo Cotizar */}
          <div style={{
            backgroundColor: 'var(--color-primary-light)',
            padding: '2.5rem 2rem',
            borderRadius: '1.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ color: 'var(--color-text-light)', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800' }}>
              <div style={{ backgroundColor: 'rgba(236,146,19,0.1)', color: 'var(--color-primary)', padding: '0.5rem', borderRadius: '0.5rem', display: 'flex' }}>
                <span className="material-symbols-outlined">request_quote</span>
              </div>
              ¿Cómo cotizar?
            </h3>

            <ul style={{ color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingLeft: '0', listStyle: 'none', margin: 0, fontSize: '1.05rem', lineHeight: '1.6', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '1.2rem', marginTop: '0.2rem' }}>check_circle</span>
                <span><strong style={{ color: 'var(--color-text-light)' }}>Medida:</strong> Envíanos las dimensiones aproximadas (ancho, alto y largo) y, si es posible, una imagen de referencia de lo que tienes en mente.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '1.2rem', marginTop: '0.2rem' }}>check_circle</span>
                <span><strong style={{ color: 'var(--color-text-light)' }}>Servicio:</strong> Indica si necesitas solo la fabricación o también el servicio de instalación.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '1.2rem', marginTop: '0.2rem' }}>check_circle</span>
                <span><strong style={{ color: 'var(--color-text-light)' }}>Instalación:</strong> Si optas por la instalación, por favor incluye la dirección y una foto del lugar donde se realizará el trabajo.</span>
              </li>
            </ul>

            <a href="https://wa.me/56932253354" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: '#25D366', // Green WhatsApp color
              borderColor: '#25D366',
              color: '#fff',
              width: '100%',
              fontSize: '1.1rem'
            }}>
              <span className="material-symbols-outlined">chat</span>
              Cotización por WhatsApp
            </a>
          </div>

          {/* Card: Cómo Agendar */}
          <div style={{
            backgroundColor: 'var(--color-bg-dark)',
            padding: '2.5rem 2rem',
            borderRadius: '1.5rem',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ color: 'var(--color-text-light)', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-text-light)', padding: '0.5rem', borderRadius: '0.5rem', display: 'flex' }}>
                <span className="material-symbols-outlined">calendar_clock</span>
              </div>
              ¿Cómo agendar?
            </h3>
            <div style={{ flexGrow: 1 }}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Para agendar el trabajo, se solicita un <strong>anticipo del 30%</strong> del valor total para fabricaciones con medida personalizada. Si es una medida estándar, el precio fijado se mantiene.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0, fontSize: '1.05rem' }}>
                Programamos una <strong>visita a terreno</strong> para que tengas total confianza en la fabricación. Además, así confirmamos las medidas exactas y ajustamos cualquier detalle necesario antes de comenzar.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: Información de Contacto Directa (Quick Info) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: '2.5rem',
          backgroundColor: 'var(--color-bg-dark)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(255,255,255,0.05)',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(236,146,19,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>location_on</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Nuestro Taller</strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Andy Warhol 112<br />San Bernardo</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(236,146,19,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>mail</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Escríbenos</strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>rorodeltasant@gmail.com</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(236,146,19,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>phone_iphone</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Llámanos</strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>+56 9 3225 3354</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
