import AddressDisplay from "./AddressDisplay";
import CoordinateCard from "./CoordinateCard";
import TimezoneDisplay from "./TimezoneDisplay";

function LocationInfo({ location }) {
  if (!location) {
    return (
      <div className="flex min-h-[520px] items-center justify-center rounded-2xl border border-purple-100 bg-white p-8 text-center shadow-sm">
        <div>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl">
            📍
          </div>

          <h3 className="text-lg font-semibold text-purple-950">
            No location selected
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Search for a place or click anywhere on the map.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex min-h-[520px] flex-col rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">

      {/* Heading */}
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
          Selected Location
        </p>
      </div>

      {/* Address */}
      <AddressDisplay location={location} />

      {/* Latitude, Longitude, Timezone */}
      <div className="mt-4 grid grid-cols-1 gap-4">

        <CoordinateCard
          title="Latitude"
          value={location.lat}
        />

        <CoordinateCard
          title="Longitude"
          value={location.lon}
        />

        <TimezoneDisplay
          timezone={location.timezone}
        />

      </div>

      {/* Tip */}
      <div className="mt-auto rounded-xl bg-purple-50 p-4">

        <p className="text-xs font-medium text-purple-600">
          TIP
        </p>

        <p className="mt-1 text-sm text-purple-900">
          Click anywhere on the map to select another location.
        </p>

      </div>

    </section>
  );
}

export default LocationInfo;