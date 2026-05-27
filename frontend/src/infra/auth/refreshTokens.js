import axios from 'axios'
import { env } from '../../config/env'
import { clearTokens, getRefreshToken, setTokens } from './tokenStorage'

export const refreshTokens = async () => {
  const refresh = getRefreshToken()
  if (!refresh) {
    clearTokens()
    return null
  }

  try {
    const response = await axios.post(`${env.USER_SERVICE_URL}/accounts/token/refresh/`, {
      refresh,
    })

    const tokens = {
      access: response.data.access,
      refresh,
    }

    setTokens(tokens)
    return tokens
  } catch (error) {
    clearTokens()
    return null
  }
}
