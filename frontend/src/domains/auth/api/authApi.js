import { userServiceClient } from '../../../infra/api/userServiceClient'

export const registerUser = async ({ username, password }) => {
  const response = await userServiceClient.post('/accounts/register/', {
    username,
    password,
  })
  return response.data
}

export const loginUser = async ({ username, password }) => {
  const response = await userServiceClient.post('/accounts/login/', {
    username,
    password,
  })
  return response.data
}

export const refreshAccessToken = async ({ refresh }) => {
  const response = await userServiceClient.post('/accounts/token/refresh/', {
    refresh,
  })
  return response.data
}
