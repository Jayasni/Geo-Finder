import Card from "../../../components/ui/Card";

function SearchResults({ locations, onSelect }) {
  if (locations.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-purple-950">
            Search Results
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Select a result to view it on the map.
          </p>
        </div>

        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
          {locations.length} results
        </span>
      </div>

      <div className="space-y-3">
        {locations.map((location) => (
          <Card
            key={location.place_id}
            className="cursor-pointer p-4 hover:border-purple-300 hover:bg-purple-50/50 hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => onSelect(location)}
              className="w-full text-left"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  📍
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-purple-950">
                    {location.display_name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {Number(location.lat).toFixed(4)}
                    {" , "}
                    {Number(location.lon).toFixed(4)}
                  </p>
                </div>

                <span className="text-purple-500">
                  →
                </span>
              </div>
            </button>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default SearchResults;