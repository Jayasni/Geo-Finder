const NOMINATIM_BASE_URL =
  import.meta.env.VITE_NOMINATIM_BASE_URL;


// Search location by name
export async function searchLocation(query) {
  const params = new URLSearchParams({
    q: query,
    format: "jsonv2",
    addressdetails: "1",
    limit: "5",
  });

  const response = await fetch(
    `${NOMINATIM_BASE_URL}/search?${params}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch location data.");
  }

  const data = await response.json();

  return data;
}


// Get address from latitude and longitude
export async function reverseLocation(lat, lon) {
  const params = new URLSearchParams({
    lat: lat,
    lon: lon,
    format: "jsonv2",
    addressdetails: "1",
  });

  const response = await fetch(
    `${NOMINATIM_BASE_URL}/reverse?${params}`
  );

  if (!response.ok) {
    throw new Error("Unable to find address.");
  }

  const data = await response.json();

  return data;
}