'use server'

import { LatestRelease, Release, ReleaseType } from '@/types/Release'
import { get } from '../http/httpInstance'
import { GET_LATEST_RELEASE, GET_RELEASES } from '../constants/api-urls'

export async function getLatestRelease() {
  const latestRelease = await get<LatestRelease>(GET_LATEST_RELEASE)
  return latestRelease
}

export async function getFspReleases(pageSize?: number) {
  const data = new URLSearchParams({
    type: 'FSP',
    ...(pageSize ? { pageSize: pageSize + '' } : {}),
  })
  const fspReleases = await get<{ data: Release[]; total: number }>(
    GET_RELEASES + '?' + data.toString()
  )
  return fspReleases.data
}

export async function getReleasesByType(releaseType: ReleaseType) {
  const data = new URLSearchParams({
    type: releaseType,
  })
  const releases = await get<{ data: Release[]; total: number }>(
    GET_RELEASES + '?' + data.toString()
  )
  return releases.data
}
