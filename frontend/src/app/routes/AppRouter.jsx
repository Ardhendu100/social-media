import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../../domains/auth/views/LoginPage'
import RegisterPage from '../../domains/auth/views/RegisterPage'
import FeedPage from '../../domains/feed/views/FeedPage'
import AuthGuard from './AuthGuard'
import PublicRoute from './PublicRoute'
import { routes } from '../../config/constants/routes'

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path={routes.login}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path={routes.register}
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path={routes.app}
        element={
          <AuthGuard>
            <FeedPage />
          </AuthGuard>
        }
      />
      <Route path="/" element={<Navigate to={routes.login} replace />} />
      <Route path="*" element={<Navigate to={routes.login} replace />} />
    </Routes>
  )
}
