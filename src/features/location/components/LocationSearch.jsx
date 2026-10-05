import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

function LocationSearch({
  search,
  setSearch,
  onSearch,
  onCurrentLocation,
  loading,
}) {

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onSearch();
    }
  }

  return (
    <section
      id="search"
      className="mb-8"
    >

      {/* =========================
          HEADING
      ========================== */}

      <div className="mb-5">

        <p
          className="
            mb-2
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-purple-600
          "
        >
          Location Explorer
        </p>

        <h2
          className="
            text-3xl
            font-bold
            tracking-tight
            text-purple-950
            sm:text-4xl
          "
        >
          Find any location
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            text-gray-500
          "
        >
          Search places, use your current location,
          and explore coordinates on the map.
        </p>

      </div>


      {/* =========================
          SEARCH + CURRENT LOCATION
      ========================== */}

      <div
        className="
          flex
          flex-col
          gap-3
          rounded-2xl
          border
          border-purple-100
          bg-white
          p-3
          shadow-sm
          sm:flex-row
        "
      >

        {/* Search Input */}

        <Input
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Search for a city, place or address..."
        />


        {/* Search Button */}

        <Button
          onClick={onSearch}
          disabled={loading}
        >
          {loading
            ? "Searching..."
            : "Search"}
        </Button>


        {/* Current Location Button */}

        <Button
          onClick={onCurrentLocation}
          disabled={loading}
        >
          {loading
            ? "Getting Location..."
            : "📍 My Location"}
        </Button>

      </div>

    </section>
  );
}

export default LocationSearch;