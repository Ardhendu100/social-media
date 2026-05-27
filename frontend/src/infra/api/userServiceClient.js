import { env } from '../../config/env'
import { createHttpClient } from './httpClient'

export const userServiceClient = createHttpClient(env.USER_SERVICE_URL)
