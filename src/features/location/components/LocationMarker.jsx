import { Marker, Popup } from "react-leaflet";

function LocationMarker({ location }) {
  if (!location) {
    return null;
  }

  const position = [
    Number(location.lat),
    Number(location.lon),
  ];

  return (
    <Marker position={position}>
      <Popup>
        <div className="min-w-[180px]">
          <p className="font-bold text-purple-900">
            📍 Selected Location
          </p>

          <div className="mt-2 text-sm text-gray-600">
            <p>
              <strong>Latitude:</strong>{" "}
              {Number(location.lat).toFixed(6)}
            </p>

            <p className="mt-1">
              <strong>Longitude:</strong>{" "}
              {Number(location.lon).toFixed(6)}
            </p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default LocationMarker;