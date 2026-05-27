const variants = {
  primary: 'bg-sky-500 text-white hover:bg-sky-400',
  secondary: 'bg-slate-800 text-white hover:bg-slate-700',
  ghost: 'bg-transparent text-slate-200 hover:bg-slate-800',
}

export default function Button({
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
        variants[variant]
      } ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
