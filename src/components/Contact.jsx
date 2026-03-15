import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="container" style={{ padding: '4rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-text-light)' }}>
          Cuéntanos tu <span className="text-primary">Proyecto</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '1rem auto 0' }}>
          Estamos aquí para responder a tus preguntas y ayudarte a diseñar el espacio al aire libre de tus sueños.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>

        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem' }}>Nuestro Taller</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>calle andy warhol, 112. San bernardo</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem' }}>Escríbenos</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>contacto@miscampanasquincho.cl</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
              <span className="material-symbols-outlined">phone</span>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem' }}>Llámanos</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>+56 9 3225 3354</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--color-bg-dark)', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '1rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-text-muted)' }}>Nombre Completo</label>
            <input type="text" id="name" placeholder="Ej: Juan Pérez" style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-light)', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-text-muted)' }}>Correo Electrónico</label>
            <input type="email" id="email" placeholder="juan@ejemplo.com" style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-light)', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-text-muted)' }}>Mensaje o Detalles del Proyecto</label>
            <textarea id="message" rows="4" placeholder="Cuéntanos qué tienes en mente..." style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-light)', outline: 'none', resize: 'vertical' }}></textarea>
          </div>

          <button className="btn-primary" type="submit" style={{ marginTop: '0.5rem', width: '100%' }}>Enviar Mensaje</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
