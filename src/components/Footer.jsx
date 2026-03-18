import { Link } from 'react-router-dom';

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
            <li><Link to="/">Extraction Hoods</Link></li>
            <li><Link to="/">Charcoal Grills</Link></li>
            <li><Link to="/">Electric Rotisseries</Link></li>
            <li><Link to="/">Custom Projects</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Compañía</h4>
          <ul className="footer-links">
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/ubicacion">nuestra ubicacion</Link></li>
            <li><Link to="/diseno-fabricacion">Diseño y Fabricación</Link></li>
            <li><Link to="/politica-envios">Política de Envíos</Link></li>
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
