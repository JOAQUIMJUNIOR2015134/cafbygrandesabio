import React from 'react';
import './GoogleMapsStreetView.css';

const GoogleMapsStreetView = ({ location, title }) => {
  // Coordenadas para Santa Maria da Feira
  const defaultLat = 40.9267;
  const defaultLng = -8.5434;
  
  const lat = location?.lat || defaultLat;
  const lng = location?.lng || defaultLng;

  return (
    <div className="google-maps-container">
      <h3 className="maps-title">{title || 'Localização CAF Santa Maria da Feira'}</h3>
      
      <div className="maps-wrapper">
        {/* Mapa tradicional */}
        <div className="map-section">
          <h4>Mapa</h4>
          <div className="map-container">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU1JzM2LjEiTiA4wrAzMiczNi4yIlc!5e0!3m2!1spt!2spt!4v1642000000000!5m2!1spt!2spt`}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa CAF Santa Maria da Feira"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="location-info">
        <div className="info-card">
          <h4>📍 Endereço Principal</h4>
          <p>Rua Principal, Santa Maria da Feira</p>
          <p>4520-000 Santa Maria da Feira</p>
        </div>
        
        <div className="info-card">
          <h4>📞 Contactos</h4>
          <p>Telefone: +351 256 123 456</p>
          <p>Email: geral@cafbygrandesabio.pt</p>
        </div>
        
        <div className="info-card">
          <h4>🕒 Horário de Atendimento</h4>
          <p>Segunda a Sexta: 08:00 - 18:00</p>
          <p>Sábados: 09:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsStreetView;
