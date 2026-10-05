import Card from "../../../components/ui/Card";

function AddressDisplay({ location }) {
  return (
    <Card
      className="
        border-purple-200
        bg-gradient-to-br
        from-purple-50
        to-white
        p-5
      "
    >

      <div className="flex items-start gap-4">

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-purple-600
            text-xl
            text-white
            shadow-md
          "
        >
          📍
        </div>

        <div className="min-w-0">

          <p className="text-xs font-semibold uppercase tracking-wider text-purple-500">
            Address
          </p>

          <h2 className="mt-1 break-words text-lg font-bold text-purple-950">
            {location.display_name ||
              "Selected coordinates"}
          </h2>

        </div>

      </div>

    </Card>
  );
}

export default AddressDisplay;