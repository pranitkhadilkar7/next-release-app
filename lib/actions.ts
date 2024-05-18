'use server'

import { LatestRelease } from '@/types/Release'

export async function getLatestRelease() {
  const response = await fetch('http://localhost:3004/release/latest')
  if (!response.ok) {
    throw new Error('Failed to Load Release Latest Info')
  }
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await response.json()
  return data as LatestRelease
}

export async function loginAction() {}
