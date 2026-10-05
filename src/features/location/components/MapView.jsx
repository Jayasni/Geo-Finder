import {
  MapContainer,
  TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import MapClickHandler from "./MapClickHandler";
import LocationMarker from "./LocationMarker";
import MapUpdater from "./MapUpdater";

const DEFAULT_LOCATION = [17.3850, 78.4867];

function MapView({
  location,
  onMapClick,
}) {
  const center = location
    ? [Number(location.lat), Number(location.lon)]
    : DEFAULT_LOCATION;

  return (
    <div
      id="map"
      className="overflow-hidden rounded-2xl border-4 border-white shadow-xl shadow-purple-100"
    >
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[520px] w-full"
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ⭐ Manual map click */}
        <MapClickHandler
          onMapClick={onMapClick}
        />

        {/* Marker */}
        <LocationMarker
          location={location}
        />

        {/* Move map */}
        <MapUpdater
          location={location}
        />

      </MapContainer>
    </div>
  );
}

export default MapView;