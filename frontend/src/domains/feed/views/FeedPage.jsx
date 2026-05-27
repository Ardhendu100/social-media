import Button from '../../../shared/ui/Button'
import { useAuthStore } from '../../auth/state/authStore'

export default function FeedPage() {
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Your feed</h1>
            <p className="text-sm text-slate-400">Realtime feed placeholder. Connect posts and timeline next.</p>
          </div>
          <Button variant="secondary" onClick={logout}>
            Sign out
          </Button>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-slate-300">
          <p className="text-base">
            Phase 1 is live. Start wiring posts, reactions, and realtime updates from the backend services.
          </p>
        </div>
      </div>
    </div>
  )
}
