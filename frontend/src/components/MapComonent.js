import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapComponent.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const MapComonent = ({ location }) => {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const { lat, lng, address } = location;

  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComonent;
