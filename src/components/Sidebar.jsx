import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <h3 className="filter-title">
          <span className="material-symbols-outlined">filter_list</span> Filters
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: '0.5rem' }}>
          Refine your premium search
        </p>
      </div>
      
      <div>
        <p className="filter-section-title">Material</p>
        <div className="checkbox-group">
          <label className="checkbox-label active">
            <span className="material-symbols-outlined text-primary">palette</span>
            <span>Stainless Steel</span>
          </label>
          <label className="checkbox-label">
            <span className="material-symbols-outlined" style={{ color: 'var(--color-text-muted)' }}>palette</span>
            <span>Aged Copper</span>
          </label>
          <label className="checkbox-label">
            <span className="material-symbols-outlined" style={{ color: 'var(--color-text-muted)' }}>palette</span>
            <span>Matte Black Steel</span>
          </label>
        </div>
      </div>

      <div>
        <p className="filter-section-title">Accessories</p>
        <div className="checkbox-group">
          <button className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>add_circle</span> Lighting
          </button>
          <button className="btn-outline" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-muted)', fontSize: '0.75rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>add_circle</span> Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
