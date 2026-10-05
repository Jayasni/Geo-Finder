function ErrorMessage({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4 text-red-700">
      <p className="font-medium">
        ⚠️ {message}
      </p>
    </div>
  );
}

export default ErrorMessage;