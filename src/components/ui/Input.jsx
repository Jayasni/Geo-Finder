function Input({
  value,
  onChange,
  placeholder,
  onKeyDown,
}) {
  return (
    <div className="relative flex-1">
      <span className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="
          block
          w-full
          min-w-0
          rounded-xl
          border
          border-purple-100
          bg-purple-50/40
          py-3
          pl-12
          pr-4
          text-gray-800
          outline-none
          transition
          placeholder:text-gray-400
          focus:border-purple-500
          focus:bg-white
          focus:ring-4
          focus:ring-purple-100
        "
      />
    </div>
  );
}

export default Input;