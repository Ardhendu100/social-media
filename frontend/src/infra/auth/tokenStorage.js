const STORAGE_KEY = 'social.auth.tokens'

let inMemoryTokens = null

const isBrowser = () => typeof window !== 'undefined'

export const getTokens = () => {
  if (inMemoryTokens) {
    return inMemoryTokens
  }

  if (!isBrowser()) {
    return null
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return null
  }

  try {
    const parsed = JSON.parse(raw)
    inMemoryTokens = parsed
    return parsed
  } catch {
    return null
  }
}

export const setTokens = (tokens) => {
  inMemoryTokens = tokens
  if (isBrowser()) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens))
  }
}

export const clearTokens = () => {
  inMemoryTokens = null
  if (isBrowser()) {
    window.localStorage.removeItem(STORAGE_KEY)
  }
}

export const getAccessToken = () => getTokens()?.access ?? null
export const getRefreshToken = () => getTokens()?.refresh ?? null
