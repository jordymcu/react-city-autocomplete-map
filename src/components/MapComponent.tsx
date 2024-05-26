import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ajuste del ícono predeterminado de Leaflet para que funcione correctamente con Webpack
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface MapComponentProps {
  lat: number;
  lng: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <UpdateMapView lat={lat} lng={lng} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>
          Latitud: {lat}, Longitud: {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

// Componente auxiliar para actualizar la vista del mapa
const UpdateMapView: React.FC<{ lat: number; lng: number }> = ({
  lat,
  lng,
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);

  return null;
};

export default MapComponent;
