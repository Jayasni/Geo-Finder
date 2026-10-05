import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import LoadingSpinner from "./components/ui/LoadingSpinner";
import ErrorMessage from "./components/ui/ErrorMessage";

import LocationSearch from "./features/location/components/LocationSearch";
import SearchResults from "./features/location/components/SearchResults";
import MapView from "./features/location/components/MapView";
import LocationInfo from "./features/location/components/LocationInfo";

import useLocationSearch from "./features/location/hooks/useLocationSearch";

function App() {
  const {
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
  } = useLocationSearch();

  return (
    <div className="min-h-screen bg-[#F8F7FF]">

      {/* Header */}
      <Header />

      <main
        className="
          mx-auto
          max-w-7xl
          px-4
          py-10
          sm:px-6
          lg:px-8
        "
      >

        {/* =========================
            SEARCH SECTION
        ========================== */}
        <LocationSearch
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
          onCurrentLocation={handleCurrentLocation}
          loading={loading}
        />

        {/* =========================
            LOADING
        ========================== */}
        {loading && <LoadingSpinner />}

        {/* =========================
            ERROR
        ========================== */}
        <ErrorMessage message={error} />

        {/* =========================
            MAP + LOCATION INFORMATION
        ========================== */}
        <section
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[1.6fr_1fr]
          "
        >

          {/* Map */}
          <MapView
            location={selectedLocation}
            onMapClick={handleMapClick}
          />

          {/* Location Information */}
          <LocationInfo
            location={selectedLocation}
          />

        </section>

        {/* =========================
            SEARCH RESULTS
        ========================== */}
        <SearchResults
          locations={locations}
          onSelect={selectLocation}
        />

        {/* =========================
            ABOUT SECTION
        ========================== */}
        <section
          id="about"
          className="
            mt-12
            rounded-2xl
            border
            border-purple-100
            bg-white
            p-8
            shadow-sm
          "
        >

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-purple-600
              "
            >
              About GeoFinder
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-bold
                text-purple-950
                sm:text-3xl
              "
            >
              Explore locations with ease
            </h2>

            <p
              className="
                mt-4
                leading-7
                text-gray-500
              "
            >
              GeoFinder helps you search for cities, places,
              and addresses and view their exact coordinates
              on an interactive map.
            </p>

            {/* About Cards */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-3
              "
            >

              {/* Search Card */}
              <div
                className="
                  rounded-xl
                  bg-purple-50
                  p-5
                "
              >
                <div className="text-2xl">
                  🔍
                </div>

                <h3
                  className="
                    mt-2
                    font-semibold
                    text-purple-950
                  "
                >
                  Search
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-500
                  "
                >
                  Find cities and places quickly.
                </p>
              </div>

              {/* Map Card */}
              <div
                className="
                  rounded-xl
                  bg-purple-50
                  p-5
                "
              >
                <div className="text-2xl">
                  🗺️
                </div>

                <h3
                  className="
                    mt-2
                    font-semibold
                    text-purple-950
                  "
                >
                  Explore Map
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-500
                  "
                >
                  View locations on an interactive map.
                </p>
              </div>

              {/* Coordinates Card */}
              <div
                className="
                  rounded-xl
                  bg-purple-50
                  p-5
                "
              >
                <div className="text-2xl">
                  📍
                </div>

                <h3
                  className="
                    mt-2
                    font-semibold
                    text-purple-950
                  "
                >
                  Coordinates
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-500
                  "
                >
                  Get latitude and longitude information.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;