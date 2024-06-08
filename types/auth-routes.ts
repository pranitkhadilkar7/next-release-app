export type AuthFormError = {
  email?: string
  password?: string
}

export type AuthFormInitialState = {
  data?: any
  error?: AuthFormError | string
  statusCode?: number
}

export type LoginResponse = {
  accessToken: string
  message: string
}
