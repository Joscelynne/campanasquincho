import React, { useEffect, useRef, useState } from 'react';

const serviceBlocks = [
  {
    id: 1,
    title: 'Asesoría y Experiencia',
    services: [
      {
        icon: 'workspace_premium',
        name: 'Somos expertos en lo que hacemos',
        desc: 'Conocemos a fondo nuestro oficio. Diseñamos y fabricamos campanas con los más altos estándares de calidad del mercado.'
      },
      {
        icon: 'support_agent',
        name: 'Te guiamos en cada paso',
        desc: 'Para escoger bien la campana ideal. Te asesoramos meticulosamente para que tomes la mejor decisión de acuerdo a tus necesidades.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
    ],
    align: 'left' // Text left, Image right
  },
  {
    id: 2,
    title: 'Fabricación de Excelencia',
    services: [
      {
        icon: 'precision_manufacturing',
        name: 'Precisión y mucha pasión',
        desc: 'Trabajamos cada proyecto con extrema dedicación. Nuestra pasión se refleja en los finos acabados y el calce perfecto de nuestras campanas.'
      },
      {
        icon: 'handshake',
        name: 'Buena comunicación y cariño',
        desc: 'Le ponemos cariño a todo lo que hacemos. Mantenemos una comunicación fluida y transparente en todo momento para tu total tranquilidad.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' // Single large portrait image
    ],
    align: 'right' // Text right, Image left
  },
  {
    id: 3,
    title: 'Logística Integral',
    services: [
      {
        icon: 'local_shipping',
        name: 'Hacemos envíos (cotizar envío)',
        desc: 'Llegamos a donde estés. Coordinamos el embalaje estricto y despacho seguro de tus productos.'
      },
      {
        icon: 'engineering',
        name: 'Proyectos de instalación',
        desc: 'Ofrecemos gestión profesional de proyectos de instalación. Nos encargamos de que el montaje funcione de manera impecable y segura.'
      }
    ],
    buttonText: 'Quiero Cotizar',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=600'
    ],
    align: 'left'
  }
];

const ServiceBlock = ({ data, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const isTextLeft = data.align === 'left';

  return (
    <div 
      ref={ref}
      className={`service-block-row ${isTextLeft ? '' : 'reverse'}`}
    >
      {/* Columna de Texto */}
      <div 
        className="service-text-col"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : (isTextLeft ? 'translateX(-50px)' : 'translateX(50px)'),
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <h3 className="service-title">
          {data.title.split(' ').map((word, i) => (
            <span key={i} style={{ color: i > 0 ? 'var(--color-primary)' : 'inherit' }}>{word} </span>
          ))}
        </h3>
        
        <div className="service-list">
          {data.services.map((svc, i) => (
            <div key={i} className="service-item" style={{
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + (i * 0.1)}s`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}>
              <div className="service-icon">
                <span className="material-symbols-outlined">{svc.icon}</span>
              </div>
              <div>
                <h4 className="service-item-title">{svc.name}</h4>
                <p className="service-item-desc">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {data.buttonText && (
          <a href="#contacto" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
            {data.buttonText}
          </a>
        )}
      </div>

      {/* Columna de Imágenes */}
      <div 
        className="service-img-col"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : (isTextLeft ? 'translateX(50px)' : 'translateX(-50px)'),
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
        }}
      >
        {data.images.length === 2 ? (
          <div className="img-composition">
            <img src={data.images[0]} alt="Servicio 1" className="img-back" loading="lazy" />
            <img src={data.images[1]} alt="Servicio 2" className="img-front" loading="lazy" />
          </div>
        ) : (
          <div className="img-single">
            <img src={data.images[0]} alt="Servicio" loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section 
      id="servicios"
      style={{ 
        padding: '8rem 0', 
        backgroundColor: 'var(--color-bg-base)',
        borderTop: '1px solid rgba(255,255,255,0.03)',
        overflow: 'hidden'
      }}
    >
      <style>
        {`
          .service-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 8rem;
          }

          .service-block-row {
            display: flex;
            flex-direction: column;
            gap: 4rem;
            align-items: center;
          }

          .service-text-col {
            flex: 1;
            width: 100%;
          }

          .service-img-col {
            flex: 1;
            width: 100%;
            position: relative;
          }

          .service-title {
            font-size: 2.5rem;
            font-weight: 900;
            color: var(--color-text-light);
            line-height: 1.1;
            margin-bottom: 2.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }

          .service-list {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .service-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .service-icon {
            width: 50px;
            height: 50px;
            flex-shrink: 0;
            background-color: rgba(236,146,19,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justifyContent: center; /* fixed typo in flex box below just in case */
            justify-content: center;
            color: var(--color-primary);
            border: 1px solid rgba(236,146,19,0.2);
          }

          .service-item-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-text-light);
            margin-bottom: 0.5rem;
          }

          .service-item-desc {
            font-size: 1.05rem;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin: 0;
            max-width: 95%;
          }

          /* Imagen Única Grande */
          .img-single {
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.05);
            aspect-ratio: 4/5;
          }

          .img-single img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* Composición de 2 Imágenes (Overlapping) */
          .img-composition {
            position: relative;
            padding-bottom: 20%;
            min-height: 400px;
          }

          .img-back {
            width: 70%;
            height: 350px;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 15px 30px rgba(0,0,0,0.4);
            position: absolute;
            top: 0;
            right: 0;
            border: 1px solid rgba(255,255,255,0.05);
          }

          .img-front {
            width: 60%;
            height: 300px;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 25px 50px rgba(0,0,0,0.6);
            position: absolute;
            bottom: 0;
            left: 0;
            border: 2px solid var(--color-bg-base);
            z-index: 2;
          }

          @media (min-width: 992px) {
            .service-block-row {
              flex-direction: row;
              gap: 6rem;
            }
            .service-block-row.reverse {
              flex-direction: row-reverse;
            }
            .service-title {
              font-size: 3rem;
            }
          }
        `}
      </style>

      <div className="service-container">
        {serviceBlocks.map((block, index) => (
           <ServiceBlock key={block.id} data={block} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
