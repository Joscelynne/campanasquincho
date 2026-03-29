import React, { useEffect } from 'react';

const articles = [
  {
    id: 1,
    title: 'Cómo elegir la campana ideal para tu quincho',
    image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&q=80&w=1200',
    date: '10 de Marzo, 2024',
    content: (
      <>
        <p>
          Elegir la campana de extracción adecuada para tu quincho no es solo una cuestión estética; es una decisión fundamental para garantizar la comodidad y limpieza de tu espacio. Al reunirte con familia y amigos, lo último que deseas es que el humo invada el área e incomode a tus invitados.
        </p>
        
        <h3>1. Dimensiones y Cobertura</h3>
        <p>
          Una regla de oro en el diseño de quinchos es que la base de la campana (la "boca" o faldón inferior) siempre debe ser un poco más grande que la parrilla en sí. Generalmente, recomendamos que la campana exceda al menos entre <strong>10 a 15 centímetros por lado</strong> respecto a la zona de fuego. Esto crea una zona de captura efectiva que atrapa las corrientes de aire ascendentes antes de que el humo se disperse lateralmente en tu terraza o cerramiento.
        </p>

        <h3>2. Ángulo de Inclinación y Forma</h3>
        <p>
          La forma geométrica de la campana dicta su eficiencia aerodinámica. Un ángulo de inclinación demasiado pronunciado o demasiado plano alterará el flujo natural del humo. Nuestros modelos, ya sean de diseño <strong>mediterráneo, tradicional o con encaje de madera</strong>, están calculados con proporciones matemáticas de volumen para permitir que el humo ascienda sin generar turbulencias, canalizándose directamente hacia el ducto de extracción.
        </p>

        <h3>3. Calidad del Material</h3>
        <p>
          El calor constante y los agentes corrosivos presentes en la grasa y el humo requieren materiales de alta resistencia. Trabajamos con aleaciones metálicas tratadas y diseñadas para soportar altas temperaturas sin deformarse. Un material premium no solo prolonga la vida útil del producto, sino que facilita la limpieza y mantiene ese acabado lujoso que resalta el estilo de tu hogar.
        </p>

        <p>
          <strong>En conclusión:</strong> Invierte tiempo en medir bien tu espacio. En <em>Mis Campanas Quincho</em> te asesoramos de manera personalizada para que nunca tengas que preocuparte del humo, solo de disfrutar el asado.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: 'Medidas ideales y proporciones perfectas para campanas de extracción',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200',
    date: '28 de Febrero, 2024',
    content: (
      <>
        <p>
          Uno de los errores más comunes al construir un quincho es dejar el diseño de la campana para el final. Todo sistema de extracción funciona bajo principios físicos de termodinámica simples: <em>el aire caliente asciende</em>. Sin embargo, las medidas de tu campana y del ducto son los motores reales de este principio.
        </p>

        <h3>La Regla del Volumen de Pulmón</h3>
        <p>
          La campana necesita un espacio interno suficiente (llamado pulmón) para acumular el humo que genera un golpe de fuego antes de que este pueda ser empujado hacia el ducto superior. Si la campana es demasiado estrecha o cortada, el humo "rebotará" hacia abajo y regresará al nivel de visión del parrillero. Recomendamos una altura de campana de al menos <strong>60 a 80 centímetros</strong> para crear una cámara de recolección óptima.
        </p>

        <h3>Diámetro del Ducto de Salida</h3>
        <p>
          Puedes tener la campana más grande del mundo, pero si el "cuello" por donde escapa el humo es muy angosto, ocurrirá un cuello de botella. Para quinchos residenciales estándar con parrillas de 1 metro de largo a 1.20 metros, el ducto de extracción debe tener un diámetro <strong>no menor a 10 pulgadas (25 cm)</strong>, siendo lo ideal 12 pulgadas si se planean asados abundantes.
        </p>

        <h3>La Altura de Instalación</h3>
        <p>
          ¿A qué altura se debe colgar la campana respecto a la parrilla? Para proteger el metal del calor directo extremo y proporcionar un área de trabajo cómoda para manipular los alimentos, el punto más bajo de la campana debe estar aproximadamente a <strong>75 a 85 centímetros de la parrilla</strong>. Bajarla más concentra el humo (pero molesta a la vista), y subirla demasiado permite que las corrientes de aire se lleven el humo antes de entrar a la campana.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: 'Mantenimiento y limpieza: alarga la vida de tu campana',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    date: '15 de Enero, 2024',
    content: (
      <>
        <p>
          Una campana de apariencia premium requiere un mantenimiento constante para no perder su brillo ni su efectividad. El enemigo número uno en los quinchos no es solo el polvo del ambiente exterior, sino la grasa adherida combinada con hollín.
        </p>

        <h3>Limpieza Diaria vs Limpieza Profunda</h3>
        <p>
          Tras cada asado, un simple paño de microfibra humedecido con agua tibia y jabón neutro es suficiente para retirar los aceites volátiles antes de que se endurezcan y se enfríen. Evita a toda costa limpiadores abrasivos o lanas de acero, ya que crearán micro-rasguños permanentes en el acabado de la superficie.
        </p>

        <h3>El Interior de la Campana</h3>
        <p>
          Si bien el exterior es lo que cautiva la vista, el interior es lo que hace el trabajo pesado. Al menos <strong>dos veces al año</strong> (o más si eres un parrillero frecuente), es crucial inspeccionar y limpiar las paredes internas y el comienzo del ducto. Una acumulación extrema de grasa en estas zonas no solo disminuye la eficiencia de succión creando superficies rugosas en donde el humo rebota, sino que constituye un riesgo real de inflamación. Utiliza productos desengrasantes industriales y cepillos de cerdas plásticas (nunca metálicas) para limpiar la parte interior.
        </p>

        <p>
          Con estas sencillas pautas, tu campana de <em>Mis Campanas Quincho</em> no solo estará impecable y será la envidia de todos los invitados, sino que su funcionalidad durará décadas sin problemas.
        </p>
      </>
    )
  }
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '8rem 2rem', maxWidth: '900px', margin: '0 auto', minHeight: '80vh' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '900', 
          color: 'var(--color-text-light)', 
          lineHeight: '1.2',
          marginBottom: '1.5rem' 
        }}>
          Blog y <span className="text-primary">Recursos</span>
        </h1>
        <p style={{ 
          color: 'var(--color-text-muted)', 
          fontSize: '1.2rem', 
          lineHeight: '1.8',
          maxWidth: '700px',
          margin: '0 auto' 
        }}>
          Guías de expertos, consejos de diseño y toda la información técnica que necesitas para 
          convertir tu quincho en un espacio perfecto, libre de humo y con muchísimo estilo.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {articles.map((article) => (
          <article 
            key={article.id}
            style={{
              backgroundColor: 'var(--color-bg-dark)',
              border: '1px solid var(--color-border)',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
              <img 
                src={article.image} 
                alt={article.title} 
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <div style={{ padding: '3rem 4rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1rem', marginBottom: '1rem', display: 'block' }}>
                <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', fontSize: '1.2rem', marginRight: '0.5rem' }}>calendar_today</span>
                {article.date}
              </span>
              
              <h2 style={{ 
                fontSize: '2.5rem', 
                color: 'var(--color-text-light)', 
                fontWeight: '800', 
                lineHeight: '1.3',
                marginBottom: '2rem'
              }}>
                {article.title}
              </h2>
              
              <div 
                className="blog-content" 
                style={{ 
                  color: 'var(--color-text-muted)',
                  fontSize: '1.15rem',
                  lineHeight: '1.8'
                }}
              >
                <style>
                  {`
                    .blog-content p {
                      margin-bottom: 1.5rem;
                    }
                    .blog-content h3 {
                      color: var(--color-text-light);
                      font-size: 1.5rem;
                      font-weight: 700;
                      margin-top: 2.5rem;
                      margin-bottom: 1rem;
                      border-bottom: 1px solid rgba(255,255,255,0.05);
                      padding-bottom: 0.5rem;
                      color: var(--color-primary);
                    }
                    .blog-content strong {
                      color: var(--color-text-light);
                    }
                    .blog-content em {
                      color: var(--color-text-light);
                      font-style: italic;
                    }
                    @media (max-width: 768px) {
                      .blog-content {
                        font-size: 1.05rem;
                      }
                      .container {
                         padding-left: 1rem !important;
                         padding-right: 1rem !important;
                      }
                      article > div:nth-child(2) {
                        padding: 2rem 1.5rem !important;
                      }
                    }
                  `}
                </style>
                {article.content}
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};

export default BlogPage;
