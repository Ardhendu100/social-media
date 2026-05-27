export const normalizeApiError = (error) => {
  if (!error) {
    return 'Unexpected error'
  }

  if (typeof error === 'string') {
    return error
  }

  const responseMessage = error.response?.data?.detail || error.response?.data?.message
  if (responseMessage) {
    return responseMessage
  }

  if (error.message) {
    return error.message
  }

  return 'Something went wrong. Please try again.'
}
