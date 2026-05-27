let inMemoryTokens = null

export const getTokens = () => {
  return inMemoryTokens
}

export const setTokens = (tokens) => {
  inMemoryTokens = tokens
}

export const clearTokens = () => {
  inMemoryTokens = null
}

export const getAccessToken = () => getTokens()?.access ?? null
export const getRefreshToken = () => getTokens()?.refresh ?? null
