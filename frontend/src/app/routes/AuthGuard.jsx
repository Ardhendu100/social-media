import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../../domains/auth/state/authStore'
import { routes } from '../../config/constants/routes'

export default function AuthGuard({ children }) {
  const accessToken = useAuthStore((state) => state.accessToken)

  if (!accessToken) {
    return <Navigate to={routes.login} replace />
  }

  return children
}
