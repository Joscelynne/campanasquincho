import React from 'react';

const DesignManufacturing = () => {
  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: '800' }}>
          Diseño y Fabricación
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
            Cada proyecto que emprendemos en Mis Campanas Quincho es un testimonio de nuestra dedicación al detalle y compromiso con la excelencia artesanal.
          </p>
          
          <div style={{ 
            backgroundColor: 'var(--color-primary-light)', 
            padding: '2rem', 
            borderRadius: '1rem',
            border: '1px solid var(--color-border)',
            marginTop: '1rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">design_services</span>
              El Proceso de Diseño
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              Comenzamos cada proyecto entendiendo tus necesidades específicas y el espacio disponible. Nuestro equipo evalúa las dimensiones, el estilo arquitectónico de tu entorno y tus requerimientos de extracción y parrilla.
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Utilizamos herramientas de diseño 3D para que puedas visualizar cómo quedará el resultado final antes de cortar la primera pieza de metal.
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'var(--color-primary-light)', 
            padding: '2rem', 
            borderRadius: '1rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">precision_manufacturing</span>
              Fabricación de Alto Estándar
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              En nuestro taller, combinamos técnicas tradicionales de herrería con tecnología moderna. Seleccionamos cuidadosamente los mejores aceros, soldaduras y materiales refractarios del mercado.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              Nuestros artesanos soldadores se aseguran de que cada unión sea robusta y tenga un acabado estético inmejorable. El proceso de pintura de alta temperatura garantiza que tu campana o parrilla mantendrá su belleza incluso bajo las condiciones más extremas.
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>
              No comprometemos la calidad; cada producto terminado pasa por rigurosas pruebas antes de su instalación final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignManufacturing;
