import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductGrid = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div 
            className="product-image-container" 
            onClick={() => navigate(`/product/${product.id}`)} 
            style={{ cursor: 'pointer' }}
          >
            <img src={product.image} alt={product.name} />
            <div className="product-badge">{product.badge}</div>
            <button 
              className="product-fav" 
              onClick={(e) => { e.stopPropagation(); /* Add to favorites logic here */ }}
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="product-info">
            <div className="product-header">
              <h3 
                className="product-name" 
                onClick={() => navigate(`/product/${product.id}`)} 
                style={{ cursor: 'pointer' }}
              >
                {product.name}
              </h3>
              <span className="product-price">{product.price}</span>
            </div>
            <p className="product-desc">{product.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button 
                className="btn-block" 
                style={{ margin: 0, flex: 1 }} 
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View Details
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: 'var(--color-primary-light)', 
                  border: '1px solid var(--color-border)', 
                  color: 'var(--color-primary)', 
                  padding: '0 1rem', 
                  borderRadius: '0.5rem', 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-bg-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary-light)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
              >
                <span className="material-symbols-outlined">add_shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
