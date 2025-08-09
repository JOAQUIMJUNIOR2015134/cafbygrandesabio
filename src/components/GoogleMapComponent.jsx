import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

// Componente do Mapa
const MapComponent = ({ center, zoom = 15, markers = [] }) => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });
      setMap(newMap);
    }
  }, [ref, map, center, zoom]);

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach(marker => {
        new window.google.maps.Marker({
          position: marker.position,
          map,
          title: marker.title,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
                <text x="16" y="20" text-anchor="middle" fill="white" font-size="14" font-weight="bold">🏫</text>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(32, 32),
            anchor: new window.google.maps.Point(16, 16)
          }
        });
      });
    }
  }, [map, markers]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};

// Componente de carregamento
const LoadingComponent = () => (
  <div className="map-loading">
    <div className="loading-spinner"></div>
    <p>A carregar mapa...</p>
  </div>
);

// Componente de erro/placeholder quando não há API key
const ErrorComponent = ({ status, morada, municipio }) => {
  const isNoApiKey = status === Status.FAILURE;
  
  return (
    <div className="map-error">
      {isNoApiKey ? (
        <>
          <span className="error-icon">🗺️</span>
          <h4>Mapa de Localização</h4>
          <p><strong>Localização:</strong> {morada || 'Não definida'}</p>
          <p><strong>Município:</strong> {municipio || 'Não definido'}</p>
          <p className="api-key-info">Para visualizar o mapa interativo, configure a API Key do Google Maps</p>
          <small>Consulte o ficheiro GOOGLE_MAPS_SETUP.md para instruções</small>
        </>
      ) : (
        <>
          <span className="error-icon">⚠️</span>
          <p>Erro ao carregar o mapa: {status}</p>
        </>
      )}
    </div>
  );
};

// Componente principal do Google Maps
const GoogleMapComponent = ({ morada, municipio }) => {
  // Obter a API key das variáveis de ambiente (Vite usa import.meta.env)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  // Coordenadas padrão para Santa Maria da Feira
  const defaultCenter = { lat: 40.9321, lng: -8.5529 };
  
  // Se não há API key, mostrar placeholder
  if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
    return (
      <div className="google-map-container">
        <ErrorComponent 
          status={Status.FAILURE} 
          morada={morada} 
          municipio={municipio} 
        />
      </div>
    );
  }

  // Renderizador do status
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <LoadingComponent />;
      case Status.FAILURE:
        return <ErrorComponent status={status} morada={morada} municipio={municipio} />;
      case Status.SUCCESS:
        return <MapComponent 
          center={defaultCenter}
          zoom={15}
          markers={[
            {
              position: defaultCenter,
              title: `${morada || 'Localização'}, ${municipio || 'Santa Maria da Feira'}`
            }
          ]}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="google-map-container">
      <Wrapper apiKey={apiKey} render={render} />
    </div>
  );
};

export default GoogleMapComponent;
