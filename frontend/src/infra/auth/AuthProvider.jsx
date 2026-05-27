import { useEffect } from 'react'
import { useAuthStore } from '../../domains/auth/state/authStore'

export default function AuthProvider({ children }) {
  const initialize = useAuthStore((state) => state.initialize)

  useEffect(() => {
    initialize()
  }, [initialize])

  return children
}
