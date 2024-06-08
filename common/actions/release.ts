'use server'

import { LatestRelease } from '@/types/Release'
import { get } from '../http/httpInstance'
import { GET_LATEST_RELEASE } from '../constants/api-urls'

export async function getLatestRelease() {
  const latestRelease = await get<LatestRelease>(GET_LATEST_RELEASE)
  return latestRelease
}
