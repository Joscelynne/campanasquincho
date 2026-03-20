import React, { useState } from 'react';

const QuoteModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({ cantidad: 1 });
  const phoneNumber = "56932253354";

  if (!isOpen || !product) return null;

  // Determine what fields to show based on product name
  const nameLower = product.name.toLowerCase();
  
  const isCampana = nameLower.includes('campana');
  const isCodo = nameLower.includes('codo');
  const isChimenea = nameLower.includes('chimenea') || nameLower.includes('tubo') || nameLower.includes('sombrero') || nameLower.includes('tolva');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'quote-modal-overlay') {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let message = `Hola, me gustaría cotizar el siguiente producto:\n`;
    message += `*Producto:* ${product.name}\n`;
    
    if (isCampana) {
      if (formData.ancho) message += `*Ancho:* ${formData.ancho} cm\n`;
      if (formData.alto) message += `*Alto:* ${formData.alto} cm\n`;
      if (formData.profundidad) message += `*Profundidad:* ${formData.profundidad} cm\n`;
    } else if (isCodo) {
      if (formData.diametro) message += `*Diámetro:* ${formData.diametro} cm\n`;
      if (formData.angulo) message += `*Ángulo:* ${formData.angulo}°\n`;
    } else if (isChimenea) {
      if (formData.diametro) message += `*Diámetro:* ${formData.diametro} cm\n`;
      if (formData.largo) message += `*Largo:* ${formData.largo} cm\n`;
    } else {
      if (formData.medidas) message += `*Medidas:* ${formData.medidas}\n`;
    }

    if (formData.cantidad) message += `*Cantidad:* ${formData.cantidad}\n`;
    if (formData.detalles) message += `\n*Detalles adicionales:*\n${formData.detalles}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="quote-modal-overlay" onClick={handleOverlayClick}>
      <div className="quote-modal-content">
        <div className="quote-modal-header">
          <h2>Cotizar Producto</h2>
          <button className="quote-modal-close" onClick={onClose} aria-label="Cerrar modal">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="quote-modal-product-info">
          <img src={product.image} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <p className="product-badge" style={{position: 'relative', top: 0, left: 0, display: 'inline-block'}}>{product.badge}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="quote-form">
          {isCampana && (
            <div className="form-row">
              <div className="form-group">
                <label>Ancho (cm) *</label>
                <input type="number" name="ancho" required onChange={handleInputChange} className="form-input" />
              </div>
              <div className="form-group">
                <label>Alto (cm) *</label>
                <input type="number" name="alto" required onChange={handleInputChange} className="form-input" />
              </div>
              <div className="form-group">
                <label>Prof. (cm) *</label>
                <input type="number" name="profundidad" required onChange={handleInputChange} className="form-input" />
              </div>
            </div>
          )}

          {isCodo && (
            <div className="form-row">
              <div className="form-group">
                <label>Diámetro (cm) *</label>
                <input type="number" name="diametro" required onChange={handleInputChange} className="form-input" />
              </div>
              <div className="form-group">
                <label>Ángulo (°) *</label>
                <input type="number" name="angulo" required onChange={handleInputChange} className="form-input" />
              </div>
            </div>
          )}

          {isChimenea && (
            <div className="form-row">
              <div className="form-group">
                <label>Diámetro (cm) *</label>
                <input type="number" name="diametro" required onChange={handleInputChange} className="form-input" />
              </div>
              <div className="form-group">
                <label>Largo (cm)</label>
                <input type="number" name="largo" onChange={handleInputChange} className="form-input" />
              </div>
            </div>
          )}

          {!isCampana && !isCodo && !isChimenea && (
            <div className="form-group">
              <label>Medidas o especificaciones *</label>
              <input type="text" name="medidas" required placeholder="Ej: 50x50 cm, diámetro 15cm" onChange={handleInputChange} className="form-input" />
            </div>
          )}

          <div className="form-group">
            <label>Cantidad *</label>
            <input type="number" name="cantidad" min="1" defaultValue="1" required onChange={handleInputChange} className="form-input" />
          </div>

          <div className="form-group">
            <label>Detalles adicionales</label>
            <textarea name="detalles" rows="3" placeholder="Ingresa cualquier consulta extra o petición..." onChange={handleInputChange} className="form-input"></textarea>
          </div>

          <div className="quote-modal-footer">
            <button type="button" className="btn-outline" onClick={onClose} style={{ padding: '0.75rem 1rem' }}>Cancelar</button>
            <button type="submit" className="btn-primary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Cotizar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
