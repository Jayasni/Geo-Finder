import Card from "../../../components/ui/Card";

function CoordinateCard({
  title,
  value
}) {
  return (
    <Card className="p-5">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-purple-950">
            {Number(value).toFixed(6)}
          </p>
        </div>

        <div className="rounded-xl bg-purple-100 px-3 py-2 text-xs font-semibold text-purple-700">
          GPS
        </div>

      </div>

    </Card>
  );
}

export default CoordinateCard;