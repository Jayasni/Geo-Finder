# 📍 GeoFinder

A modern and interactive **location finder web application** built with **React, Vite, JavaScript, Tailwind CSS, Leaflet, React Leaflet, and OpenStreetMap**.

GeoFinder allows users to search for locations, use their current location, view coordinates, explore locations on an interactive map, and view location-related information such as address, coordinates, and timezone.

---

# 🚀 Features

- 🔎 Search for a city, place, or address
- 📍 Detect and display the user's current location
- 🗺️ Interactive map using Leaflet
- 🌍 Explore different locations on the map
- 📌 Display location markers
- 🖱️ Click on the map to explore coordinates
- 🔄 Automatically update the map when a location changes
- 🎯 Recenter the map on the selected location
- 📊 Display latitude and longitude
- 📍 Display formatted address information
- 🌐 Display timezone information
- 🔎 Search results for locations
- ⏳ Loading state
- ❌ Error handling
- 🚫 API request handling
- 📱 Responsive design
- 🎨 Modern UI
- 🧩 Reusable React components
- 🪝 Custom React Hook for location searching
- 🔌 Separate API service
- 🛠️ Utility functions for coordinate handling

---

# 🖥️ Application UI

The application provides a simple location explorer interface.

```text
┌─────────────────────────────────────────────────────┐
│  📍 GeoFinder                                        │
│     Explore the world                               │
├─────────────────────────────────────────────────────┤
│                                                     │
│  LOCATION EXPLORER                                  │
│                                                     │
│  Find any location                                  │
│                                                     │
│  Search places, use your current location,          │
│  and explore coordinates on the map.                │
│                                                     │
│  🔍 Search for a city, place or address             │
│                         [ Search ] [ 📍 My Location ]│
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                 🗺️ Interactive Map                  │
│                                                     │
│                                                     │
│                    📍 Location                      │
│                                                     │
└─────────────────────────────────────────────────────┘
📂 Project Structure
geofinder/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── ErrorMessage.jsx
│   │       ├── Input.jsx
│   │       └── LoadingSpinner.jsx
│   │
│   ├── features/
│   │   └── location/
│   │       │
│   │       ├── components/
│   │       │   ├── AddressDisplay.jsx
│   │       │   ├── CoordinateCard.jsx
│   │       │   ├── LocationInfo.jsx
│   │       │   ├── LocationMarker.jsx
│   │       │   ├── LocationSearch.jsx
│   │       │   ├── MapClickHandler.jsx
│   │       │   ├── MapUpdater.jsx
│   │       │   ├── MapView.jsx
│   │       │   ├── SearchResults.jsx
│   │       │   └── TimezoneDisplay.jsx
│   │       │
│   │       └── ...
│   │
│   ├── hooks/
│   │   └── useLocationSearch.js
│   │
│   ├── services/
│   │   └── locationApi.js
│   │
│   ├── utils/
│   │   └── coordinateUtils.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
Application Flow
User enters location
        │
        ▼
 LocationSearch
        │
        ▼
     App.jsx
        │
        ▼
useLocationSearch()
        │
        ▼
 locationApi.js
        │
        ▼
 Location API
        │
        ▼
 Search Results
        │
        ▼
 User selects location
        │
        ▼
 Location Information
        │
        ├───────────────┐
        ▼               ▼
 LocationInfo       MapView
                        │
                        ▼
                 LocationMarker
                        │
                        ▼
                 Interactive Map

📍 Current Location Flow

The application also provides a My Location feature.
User clicks
"My Location"
       │
       ▼
Browser Geolocation API
       │
       ▼
Latitude + Longitude
       │
       ▼
Location Information
       │
       ▼
Map moves to location
       │
       ▼
Location Marker
📊 Coordinates

Coordinate information is displayed using:
CoordinateCard.jsx
Latitude
17.385000

Longitude
78.486700
🌍 Timezone

Timezone information is displayed through:

TimezoneDisplay.jsx

Example:

🌍 Timezone

Asia/Kolkata

UTC +05:30
🗺️ Interactive Map

The map is implemented using:

React Leaflet
+
Leaflet
+
OpenStreetMap
🔌 API Service

API communication is separated into:
React Components
       ↓
Custom Hook
       ↓
Location API Service
       ↓
External API
       ↓
Location Data
⏳ Loading State

When location information is being requested, the application displays a loading indicator.

Searching...

      ⏳
📦 Installation
git clone <your-repository-url>
cd geofinder
npm install

npm install leaflet react-leaflet
npm install tailwindcss @tailwindcss/vite
npm install tz-lookup
npm run dev
http://localhost:5173/
🎯 Project Goal

The main goal of GeoFinder is to practice building a real-world React application that combines:
User Input
     ↓
React State
     ↓
API Request
     ↓
Custom Hook
     ↓
Location Data
     ↓
Coordinates
     ↓
Location Information
     ↓
Interactive Map
     ↓
Location Marker
