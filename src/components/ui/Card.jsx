function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-purple-100
        bg-white
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;