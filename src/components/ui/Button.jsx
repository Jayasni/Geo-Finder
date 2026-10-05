function Button({
  children,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        rounded-xl
        bg-purple-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-md
        shadow-purple-200
        transition
        hover:bg-purple-700
        hover:shadow-lg
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {children}
    </button>
  );
}

export default Button;