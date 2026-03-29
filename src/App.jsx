import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';

import AboutUs from './pages/AboutUs';
import DesignManufacturing from './pages/DesignManufacturing';
import ShippingPolicy from './pages/ShippingPolicy';
import Blog from './pages/Blog';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />
              <Route path="/diseno-fabricacion" element={<DesignManufacturing />} />
              <Route path="/politica-envios" element={<ShippingPolicy />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
