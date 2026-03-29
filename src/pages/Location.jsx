import React from 'react';

const Location = () => {
  return (
    <section id="ubicacion" className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '800' }}>
          Nuestra Ubicación
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', marginBottom: '3rem' }}>
          Visítanos en nuestro taller para conocer de cerca nuestro trabajo y conversar sobre tu próximo proyecto.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div style={{ 
            backgroundColor: 'var(--color-primary-light)', 
            padding: '2rem', 
            borderRadius: '1rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
              Taller y Sala de Ventas
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Dirección</strong>
                  <span style={{ color: 'var(--color-text-muted)' }}>Andy Warhol 112<br />San Bernardo, Chile</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Horario de Atención</strong>
                  <span style={{ color: 'var(--color-text-muted)' }}>Lunes a Viernes: 9:00 - 18:00<br />Sábado: 10:00 - 14:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderRadius: '1rem', 
            overflow: 'hidden', 
            border: '1px solid var(--color-border)',
            height: '400px'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.018780277838!2d-70.68652392430032!3d-33.60481231215167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db1db98b3c95%3A0xe1e5483a93e36e4f!2sAndy%20Warhol%20112%2C%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1709664426543!5m2!1sen!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Mis Campanas Quincho"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
