import axios from 'axios'
import { env } from '../../config/env'
import { clearTokens, setTokens } from './tokenStorage'

export const refreshTokens = async () => {
  try {
    const response = await axios.post(
      `${env.USER_SERVICE_URL}/accounts/token/refresh/`,
      {},
      { withCredentials: true },
    )

    const tokens = {
      access: response.data.access,
    }

    setTokens(tokens)
    return tokens
  } catch (error) {
    clearTokens()
    return null
  }
}
