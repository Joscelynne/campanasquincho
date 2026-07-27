import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShippingPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            color: 'var(--color-text-muted)',
            display: 'inline-flex',
            gap: '0.5rem',
            alignItems: 'center',
            marginBottom: '2rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '0.95rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Volver
        </button>

        <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: '800' }}>
          Política de Envíos
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
            Queremos que la experiencia de recibir y disfrutar tu campana o quincho sea tan excepcional como el producto mismo.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '2rem' }}>local_shipping</span>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Despachos en Región Metropolitana</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Ofrecemos envío directo e instalación (si corresponde) dentro de toda la Región Metropolitana. Coordinamos el día y horario directamente contigo para asegurar que todo el proceso sea cómodo y eficiente.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '2rem' }}>inventory_2</span>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Embalaje de Alta Seguridad</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Independientemente del destino, cada producto es embalado cuidadosamente utilizando materiales protectores y estructuras reforzadas cuando sea necesario, evitando cualquier daño durante el trayecto.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '2rem' }}>timer</span>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Tiempos de Entrega</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Dado que nuestros productos son creados bajo demanda y medidas personalizadas, el tiempo de entrega varía según la complejidad del proyecto. Al aprobar tu diseño, te entregaremos una fecha estimada de despacho que nos comprometemos a cumplir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
