export default function TextInput({
  id,
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
}) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-200" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-sky-500"
      />
      {error ? <span className="text-xs text-rose-400">{error}</span> : null}
    </label>
  )
}
