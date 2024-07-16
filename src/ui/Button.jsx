function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-primary rounded-md px-4 py-2 text-sm text-black sm:px-6 sm:py-2 md:text-lg"
    >
      {children}
    </button>
  );
}

export default Button;
