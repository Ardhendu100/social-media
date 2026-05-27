import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '../../infra/auth/AuthProvider'

export default function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  )
}
