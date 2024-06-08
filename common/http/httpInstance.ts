export const BASE_URL = process.env.API_BASE_URL

type Response<T> = {
  data?: T
  error?: { message: string }
  statusCode: number
}

export async function get<T>(
  url: string,
  init?: RequestInit
): Promise<Response<T>> {
  const res = await fetch(`${BASE_URL}${url}`, { ...init, method: 'GET' })
  const data = await res.json()
  if (!res.ok) {
    return {
      error: {
        message: data?.message ?? 'Somethin went wrong',
      },
      statusCode: res.status,
    }
  }
  return {
    data,
    statusCode: res.status,
  }
}

export async function post<T>(
  url: string,
  init?: RequestInit
): Promise<Response<T>> {
  const res = await fetch(`${BASE_URL}${url}`, { ...init, method: 'POST' })
  const data = await res.json()
  if (!res.ok) {
    return {
      error: {
        message: data?.message ?? 'Somethin went wrong',
      },
      statusCode: res.status,
    }
  }
  return {
    data,
    statusCode: res.status,
  }
}

export async function put<T>(
  url: string,
  init?: RequestInit
): Promise<Response<T>> {
  const res = await fetch(`${BASE_URL}${url}`, { ...init, method: 'PUT' })
  const data = await res.json()
  if (!res.ok) {
    return {
      error: {
        message: data?.message ?? 'Somethin went wrong',
      },
      statusCode: res.status,
    }
  }
  return {
    data,
    statusCode: res.status,
  }
}

export async function remove<T>(
  url: string,
  init?: RequestInit
): Promise<Response<T>> {
  const res = await fetch(`${BASE_URL}${url}`, { ...init, method: 'DELETE' })
  const data = await res.json()
  if (!res.ok) {
    return {
      error: {
        message: data?.message ?? 'Somethin went wrong',
      },
      statusCode: res.status,
    }
  }
  return {
    data,
    statusCode: res.status,
  }
}
