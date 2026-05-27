import axios from 'axios'
import { getAccessToken } from '../auth/tokenStorage'
import { refreshTokens } from '../auth/refreshTokens'

export const createHttpClient = (baseURL) => {
  const client = axios.create({
    baseURL,
    timeout: 15000,
    withCredentials: true,
  })

  client.interceptors.request.use((config) => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      if (error.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true
        const tokens = await refreshTokens()
        if (tokens?.access) {
          originalRequest.headers.Authorization = `Bearer ${tokens.access}`
          return client(originalRequest)
        }
      }
      return Promise.reject(error)
    },
  )

  return client
}
