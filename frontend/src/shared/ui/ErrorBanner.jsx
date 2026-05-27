export default function ErrorBanner({ message }) {
  if (!message) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="max-w-xl rounded-2xl border border-red-500/40 bg-red-600 px-8 py-6 text-center text-base font-semibold text-white shadow-2xl">
        {message}
      </div>
    </div>
  )
}
