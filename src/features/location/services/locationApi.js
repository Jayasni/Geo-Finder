
const NOMINATIM_BASE_URL = (
  import.meta.env.VITE_NOMINATIM_BASE_URL ||
  "https://nominatim.openstreetmap.org"
).replace(/\/$/, "");

async function fetchJson(url) {
  const response = await fetch(url);
  const contentType = response.headers.get("content-type") || "";

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  if (!contentType.includes("application/json")) {
    const body = await response.text();
    console.error("Unexpected API response:", body.slice(0, 200));
    throw new Error("API returned HTML instead of JSON.");
  }

  return response.json();
}

// Search location by name
export async function searchLocation(query) {
  const params = new URLSearchParams({
    q: query,
    format: "jsonv2",
    addressdetails: "1",
    limit: "5",
  });

  return fetchJson(
    `${NOMINATIM_BASE_URL}/search?${params}`
  );
}

// Get address from latitude and longitude
export async function reverseLocation(lat, lon) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    format: "jsonv2",
    addressdetails: "1",
  });

  return fetchJson(
    `${NOMINATIM_BASE_URL}/reverse?${params}`
  );
}
