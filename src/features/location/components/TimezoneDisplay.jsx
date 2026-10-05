import { useEffect, useState } from "react";

function TimezoneDisplay({ timezone }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (!timezone) {
      setCurrentTime("");
      return;
    }

    function updateTime() {
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());

      setCurrentTime(time);
    }

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timezone]);

  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">

      {/* Time Zone */}
      <div>
        <p className="text-sm font-medium text-gray-500">
          Time Zone
        </p>

        <p className="mt-2 text-lg font-bold text-purple-950">
          {timezone || "Unknown"}
        </p>
      </div>

      {/* Current Time */}
      <div className="mt-4 border-t border-purple-100 pt-4">
        <p className="text-sm font-medium text-gray-500">
          Current Time
        </p>

        <p className="mt-2 text-2xl font-bold text-purple-700">
          {currentTime || "--:--:--"}
        </p>
      </div>

    </div>
  );
}

export default TimezoneDisplay;