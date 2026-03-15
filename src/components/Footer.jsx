import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col" style={{ gridColumn: 'span 2' }}>
          <div className="logo">
            <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>outdoor_grill</span>
            <h2>Mis Campanas Quincho</h2>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Proyecto familiar creado especialmente para ti. De alto estandar listo para crear experiencias inolvidables.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Productos y Servicios</h4>
          <ul className="footer-links">
            <li><a href="#">Extraction Hoods</a></li>
            <li><a href="#">Charcoal Grills</a></li>
            <li><a href="#">Electric Rotisseries</a></li>
            <li><a href="#">Custom Projects</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Compañía</h4>
          <ul className="footer-links">
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">nuestra ubicacion</a></li>
            <li><a href="#">Diseño y Fabricación</a></li>
            <li><a href="#">Política de Envíos</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Mis Campanas Quincho. Hecha a mano para la excelencia.</p>
        <div className="flex gap-8">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
