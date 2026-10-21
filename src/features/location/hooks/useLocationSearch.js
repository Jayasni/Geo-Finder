import { useState } from "react";
import tzlookup from "@photostructure/tz-lookup";

import {
  searchLocation,
  reverseLocation,
} from "../services/locationApi.js";


function useLocationSearch() {

  // ==========================================
  // STATE
  // ==========================================

  // Search input
  const [search, setSearch] = useState("");

  // Search results
  const [locations, setLocations] = useState([]);

  // Currently selected location
  const [selectedLocation, setSelectedLocation] =
    useState(null);

  // Loading state
  const [loading, setLoading] =
    useState(false);

  // Error message
  const [error, setError] =
    useState("");


  // ==========================================
  // SEARCH LOCATION
  // ==========================================

  async function handleSearch() {

    if (!search.trim()) {
      setError("Please enter a location.");
      return;
    }

    try {

      setLoading(true);
      setError("");

      const data =
        await searchLocation(search);


      // No results
      if (data.length === 0) {

        setLocations([]);
        setSelectedLocation(null);

        setError(
          "No location found. Try another search."
        );

        return;
      }


      // First result
      const firstLocation = data[0];


      // Get timezone
      const timezone = tzlookup(
        Number(firstLocation.lat),
        Number(firstLocation.lon)
      );


      // Store search results
      setLocations(data);


      // Store selected location
      setSelectedLocation({

        ...firstLocation,

        timezone: timezone,

      });

    } catch (error) {

      console.error(
        "Search error:",
        error
      );

      setError(
        "Something went wrong while searching."
      );

      setLocations([]);
      setSelectedLocation(null);

    } finally {

      setLoading(false);

    }
  }


  // ==========================================
  // SELECT SEARCH RESULT
  // ==========================================

  function selectLocation(location) {

    // Get timezone
    const timezone = tzlookup(
      Number(location.lat),
      Number(location.lon)
    );


    // Update selected location
    setSelectedLocation({

      ...location,

      timezone: timezone,

    });

  }


  // ==========================================
  // MANUAL MAP CLICK
  // ==========================================

  async function handleMapClick(coordinates) {

    try {

      setLoading(true);
      setError("");


      // Get address from coordinates
      const data = await reverseLocation(
        coordinates.lat,
        coordinates.lon
      );


      // Get timezone
      const timezone = tzlookup(
        Number(coordinates.lat),
        Number(coordinates.lon)
      );


      // Store location
      setSelectedLocation({

        ...data,

        lat: coordinates.lat,

        lon: coordinates.lon,

        timezone: timezone,

      });

    } catch (error) {

      console.error(
        "Map click error:",
        error
      );


      // Reverse geocoding failed
      // Coordinates + timezone still work

      try {

        const timezone = tzlookup(
          Number(coordinates.lat),
          Number(coordinates.lon)
        );


        setSelectedLocation({

          lat: coordinates.lat,

          lon: coordinates.lon,

          timezone: timezone,

          display_name:
            "Selected coordinates",

        });

      } catch (timezoneError) {

        console.error(
          "Timezone error:",
          timezoneError
        );


        setSelectedLocation({

          lat: coordinates.lat,

          lon: coordinates.lon,

          display_name:
            "Selected coordinates",

        });

      }


      setError(
        "Address could not be found, but coordinates are available."
      );

    } finally {

      setLoading(false);

    }

  }


  // ==========================================
  // CURRENT LOCATION
  // ==========================================

  function handleCurrentLocation() {

    // Check browser support
    if (!navigator.geolocation) {

      setError(
        "Geolocation is not supported by your browser."
      );

      return;
    }


    setLoading(true);
    setError("");


    navigator.geolocation.getCurrentPosition(

      // SUCCESS
      async (position) => {

        const lat =
          position.coords.latitude;

        const lon =
          position.coords.longitude;


        try {

          // Get address
          const data =
            await reverseLocation(
              lat,
              lon
            );


          // Get timezone
          const timezone =
            tzlookup(lat, lon);


          // Store current location
          setSelectedLocation({

            ...data,

            lat,

            lon,

            timezone,

          });


          // Clear old search results
          setLocations([]);

        } catch (error) {

          console.error(
            "Current location error:",
            error
          );


          // Even if address fails,
          // coordinates + timezone should work

          try {

            const timezone =
              tzlookup(lat, lon);


            setSelectedLocation({

              lat,

              lon,

              timezone,

              display_name:
                "Current Location",

            });

          } catch (timezoneError) {

            console.error(
              "Timezone error:",
              timezoneError
            );


            setSelectedLocation({

              lat,

              lon,

              display_name:
                "Current Location",

            });

          }


          setError(
            "Address could not be found, but your current location is available."
          );

        } finally {

          setLoading(false);

        }

      },

      // ERROR
      (error) => {

        console.error(
          "Geolocation error:",
          error
        );


        setLoading(false);


        if (error.code === 1) {

          setError(
            "Location permission was denied. Please allow location access."
          );

        } else if (error.code === 2) {

          setError(
            "Your current location could not be determined."
          );

        } else if (error.code === 3) {

          setError(
            "Location request timed out. Please try again."
          );

        } else {

          setError(
            "Unable to get your current location."
          );

        }

      }

    );

  }


  // ==========================================
  // RETURN VALUES TO APP.JSX
  // ==========================================

  return {

    search,

    setSearch,

    locations,

    selectedLocation,

    loading,

    error,

    handleSearch,

    selectLocation,

    handleMapClick,

    handleCurrentLocation,

  };

}


export default useLocationSearch;