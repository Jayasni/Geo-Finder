import { useEffect } from "react";
import { useMap } from "react-leaflet";

function MapUpdater({ location }) {
  const map = useMap();

  useEffect(() => {
    if (!location) {
      return;
    }

    const lat = Number(location.lat);
    const lon = Number(location.lon);

    map.flyTo(
      [lat, lon],
      13,
      {
        duration: 1.5,
      }
    );
  }, [location, map]);

  return null;
}

export default MapUpdater;