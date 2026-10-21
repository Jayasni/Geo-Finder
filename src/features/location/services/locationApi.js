const NOMINATIM_BASE_URL = (
  import.meta.env.VITE_NOMINATIM_BASE_URL ||
  "https://nominatim.openstreetmap.org"
).replace(/\/$/, "");

export async function reverseLocation(lat, lon) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    format: "jsonv2",
    addressdetails: "1",
  });

  const url = `${NOMINATIM_BASE_URL}/reverse?${params}`;

  console.log("Reverse geocoding URL:", url);

  const response = await fetch(url);
  const contentType = response.headers.get("content-type") || "";

  console.log("Reverse geocoding status:", response.status);

  if (!response.ok) {
    throw new Error(`Reverse geocoding failed: ${response.status}`);
  }

  if (!contentType.includes("application/json")) {
    const text = await response.text();
    console.error("Unexpected response:", text.slice(0, 300));
    throw new Error("Server returned HTML instead of JSON.");
  }

  const data = await response.json();
  console.log("Address received:", data.display_name);

  return data;
}