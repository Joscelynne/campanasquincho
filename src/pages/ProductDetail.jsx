import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2>Product not found.</h2>
        <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <button onClick={() => navigate(-1)} style={{ color: 'var(--color-text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '2rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}>
        <span className="material-symbols-outlined">arrow_back</span> Back to Catalog
      </button>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px', borderRadius: '1rem', overflow: 'hidden', aspectRatio: '1', backgroundColor: 'var(--color-primary-light)' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div style={{ flex: '1 1 400px' }}>
          <span style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{product.badge}</span>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: '1rem 0', lineHeight: 1.2 }}>{product.name}</h1>
          <p style={{ fontSize: '2rem', color: 'var(--color-primary)', fontWeight: '800', marginBottom: '2rem' }}>{product.price}</p>
          
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', marginBottom: '3rem', lineHeight: 1.6 }}>{product.desc}</p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-bg-dark)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                style={{ padding: '0.75rem 1rem', color: 'var(--color-text-light)' }}>
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span style={{ padding: '0 1rem', fontWeight: 'bold' }}>{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                style={{ padding: '0.75rem 1rem', color: 'var(--color-text-light)' }}>
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            
            <button className="btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem' }} onClick={() => addToCart(product, quantity)}>
              <span className="material-symbols-outlined">shopping_cart</span>
              Add to Cart
            </button>
          </div>
          
          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p><strong>Shipping:</strong> Usually ships within 5-7 business days depending on customizations.</p>
            <p><strong>Warranty:</strong> 10-year manufacturer structural guarantee included.</p>
            <p><strong>Material Quality:</strong> Selected high-grade components engineered to withstand extreme outdoor conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
