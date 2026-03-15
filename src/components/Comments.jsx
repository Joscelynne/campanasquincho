import React from 'react';

const comments = [
  {
    id: 1,
    name: 'Carlos Ruiz',
    avatar: 'CR',
    date: 'Hace 2 semanas',
    rating: 5,
    text: 'Impresionante calidad. Compré la campana Copper Artisan y no solo extrae el humo perfectamente, sino que es el centro de atención de mi terraza.'
  },
  {
    id: 2,
    name: 'María Ignacia',
    avatar: 'MI',
    date: 'Hace 1 mes',
    rating: 5,
    text: 'El quincho Infinity superó todas mis expectativas. El acabado mate en acero negro se ve sumamente elegante y los materiales son muy resistentes al calor.',
  },
  {
    id: 3,
    name: 'Roberto V.',
    avatar: 'RV',
    date: 'Hace 3 meses',
    rating: 4,
    text: 'Excelente atención al cliente y despacho impecable. La instalación del modelo Vulcan fue rápida y el tiro funciona excelente. Totalmente recomendados.'
  }
];

const Comments = () => {
  return (
    <section id="comentarios" className="container" style={{ padding: '6rem 0', borderTop: '1px solid rgba(236,146,19,0.1)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-text-light)' }}>
          Lo que dicen <span className="text-primary">nuestros clientes</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '1rem auto 0' }}>
          La satisfacción de quienes confían en nosotros es nuestra mejor garantía.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {comments.map((comment) => (
          <div key={comment.id} style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem', border: '1px solid var(--color-primary)' }}>
                  {comment.avatar}
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', fontSize: '1.125rem' }}>{comment.name}</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{comment.date}</span>
                </div>
              </div>
              <div style={{ display: 'flex', color: 'var(--color-primary)' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontSize: '1.25rem', fontVariationSettings: i < comment.rating ? "'FILL' 1" : "'FILL' 0" }}>
                    star
                  </span>
                ))}
              </div>
            </div>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>"{comment.text}"</p>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
         <button className="btn-outline">Ver más Testimonios</button>
      </div>
    </section>
  );
};

export default Comments;
