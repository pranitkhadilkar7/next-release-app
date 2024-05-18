'use server'

import { LatestRelease } from '@/types/Release'
import { z } from 'zod'

export async function getLatestRelease() {
  const response = await fetch('http://localhost:3004/release/latest')
  if (!response.ok) {
    throw new Error('Failed to Load Release Latest Info')
  }
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await response.json()
  return data as LatestRelease
}

export async function loginAction(formData: FormData) {
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
    const response = await fetch('http://localhost:3004/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parse.data),
    })
    if (!response.ok) {
      throw new Error('Failed to Load Release Latest Info')
    }
    const data = await response.json()
    console.log(data)
  }
}
