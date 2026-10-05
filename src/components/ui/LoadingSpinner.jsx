function LoadingSpinner() {
  return (
    <div className="mb-6 flex items-center justify-center gap-3 rounded-xl bg-purple-50 p-4">

      <div
        className="
          h-6
          w-6
          animate-spin
          rounded-full
          border-4
          border-purple-200
          border-t-purple-600
        "
      />

      <p className="text-sm font-medium text-purple-700">
        Searching location...
      </p>

    </div>
  );
}

export default LoadingSpinner;