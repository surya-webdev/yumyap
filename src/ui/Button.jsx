function Button({ type, className, children, onClick, disabled, href }) {
  return (
    <button
      type={type}
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md bg-primary px-2 py-2 text-sm text-black sm:px-6 sm:py-2 md:text-lg ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
