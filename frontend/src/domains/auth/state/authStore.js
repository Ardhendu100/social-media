import { create } from 'zustand'
import { loginUser, registerUser } from '../api/authApi'
import { normalizeApiError } from '../../../infra/api/normalizeError'
import { clearTokens, getTokens, setTokens } from '../../../infra/auth/tokenStorage'

const initialState = {
  user: null,
  accessToken: null,
  status: 'idle',
  error: null,
}

export const useAuthStore = create((set, get) => ({
  ...initialState,
  initialize: async () => {
    const tokens = getTokens()
    if (tokens?.access) {
      set({
        accessToken: tokens.access,
        status: 'authenticated',
      })
      return
    }

    const refreshed = await refreshTokens()
    if (refreshed?.access) {
      set({
        accessToken: refreshed.access,
        status: 'authenticated',
      })
    }
  },
  login: async ({ username, password }) => {
    set({ status: 'loading', error: null })
    try {
      const data = await loginUser({ username, password })
      setTokens({ access: data.access })
      set({
        accessToken: data.access,
        user: { username },
        status: 'authenticated',
      })
      return true
    } catch (error) {
      set({ status: 'error', error: normalizeApiError(error) })
      return false
    }
  },
  register: async ({ username, password }) => {
    set({ status: 'loading', error: null })
    try {
      await registerUser({ username, password })
      return await get().login({ username, password })
    } catch (error) {
      set({ status: 'error', error: normalizeApiError(error) })
      return false
    }
  },
  logout: () => {
    clearTokens()
    set({ ...initialState })
  },
}))
