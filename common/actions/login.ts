'use server'

import { z } from 'zod'
import { post } from '../http/httpInstance'
import { AuthFormInitialState, LoginResponse } from '@/types/auth-routes'
import { LOGIN_USER } from '../constants/api-urls'

export async function loginUser(
  prenState: AuthFormInitialState,
  formData: FormData
) {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: 'Email can not be empty' })
      .email('Email is not valid'),
    password: z.string().min(1, { message: 'Password can not be empty' }),
  })
  const parse = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  if (parse.success) {
    const response = await post<LoginResponse>(LOGIN_USER, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    })
    return response
  }
  return {
    error: JSON.parse(parse.error.message)?.map((err: any) => err.message),
  }
}
