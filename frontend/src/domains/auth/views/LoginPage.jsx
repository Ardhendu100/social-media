import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../shared/ui/Button'
import TextInput from '../../../shared/ui/TextInput'
import { routes } from '../../../config/constants/routes'
import { useAuthStore } from '../state/authStore'

export default function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  const status = useAuthStore((state) => state.status)
  const error = useAuthStore((state) => state.error)

  const [formState, setFormState] = useState({ username: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const ok = await login({
      username: formState.username.trim(),
      password: formState.password,
    })

    if (ok) {
      navigate(routes.app)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-6 py-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
            Social Platform • Auth
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Welcome back. Build your network in real time.
          </h1>
          <p className="text-base text-slate-300">
            Sign in to access your personalized feed, analytics, and real-time notifications.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl">
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="mt-2 text-sm text-slate-400">Use your username and password.</p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <TextInput
              id="username"
              label="Username"
              name="username"
              value={formState.username}
              onChange={handleChange}
              placeholder="jane.doe"
              autoComplete="username"
            />
            <TextInput
              id="password"
              label="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="current-password"
            />

            {error ? <p className="text-sm text-rose-400">{error}</p> : null}

            <Button type="submit" className="w-full" disabled={status === 'loading'}>
              {status === 'loading' ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <div className="mt-6 text-sm text-slate-400">
            New here?{' '}
            <Link className="font-semibold text-sky-400 hover:text-sky-300" to={routes.register}>
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
