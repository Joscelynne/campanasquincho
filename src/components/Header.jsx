import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si no estamos en el home, navegamos hacia allí con un hash en la URL
      navigate(`/#${sectionId}`);
      // Un pequeño retraso para permitir que la página cambie antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en el home, simplemente hacemos scroll suave
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="container header-wrapper">
        <div className="flex items-center gap-10">
          <Link to="/" className="logo cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}>outdoor_grill</span>
            <h2>Mis Campanas Quincho</h2>
          </Link>
          <nav className="nav-links">
            <a href="#productos" onClick={(e) => handleScroll(e, 'productos')} style={{ cursor: 'pointer' }}>Productos</a>
            <a href="#nosotros" onClick={(e) => handleScroll(e, 'nosotros')} style={{ cursor: 'pointer' }}>Nosotros</a>
            <a href="#contacto" onClick={(e) => handleScroll(e, 'contacto')} style={{ cursor: 'pointer' }}>Contacto</a>
          </nav>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <span className="material-symbols-outlined" style={{ color: 'rgba(250, 221, 95, 0.88)' }}>search</span>
            <input type="text" placeholder="Buscar productos..." />
          </div>
          <button className="cart-btn" style={{ position: 'relative' }}>
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
