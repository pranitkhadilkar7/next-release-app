'use client'

import { loginUser } from '@/common/actions/login'
import { PrimaryButton } from '@/components/PrimaryButton'
import { AuthFormInitialState } from '@/types/auth-routes'
import Link from 'next/link'
import { useActionState } from 'react'

const initialState: any = {}

export default function Login() {
  const [state, action] = useActionState(loginUser, initialState)

  console.log(state)

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-items-center">
      <h3 className="tw-font-bold tw-text-[1.75rem] tw-leading-9 tw-mt-2 tw-text-[#1e252d] tw-mb-2">
        Sign In to your account
      </h3>
      <form className="tw-w-full" action={action}>
        <label
          htmlFor="email"
          className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
        >
          Email
        </label>
        <div className="tw-mt-2">
          <input
            type="email"
            id="email"
            className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset 
                  tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-primary focus:tw-outline-none 
                  sm:tw-text-sm sm:tw-leading-6"
            placeholder="you@example.com"
            name="email"
            required
          />
        </div>
        <div className="tw-w-full tw-my-4">
          <label
            htmlFor="password"
            className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
          >
            Password
          </label>
          <div className="tw-mt-2">
            <input
              type="password"
              id="password"
              className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset 
                  tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-primary focus:tw-outline-none 
                  sm:tw-text-sm sm:tw-leading-6"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <PrimaryButton
            title="Sign In"
            className="tw-h-10 tw-w-full tw-mt-5"
            type="submit"
          />
        </div>
      </form>
      {state?.error?.message && (
        <p className="tw-text-sm tw-text-red-600">{state?.error?.message}</p>
      )}
      {!!state?.error?.length && (
        <>
          {state.error.map((err: string) => (
            <p className="tw-text-sm tw-text-red-600" key={err}>
              {err}
            </p>
          ))}
        </>
      )}
      <p className="tw-mt-4 tw-text-sm tw-text-gray-500">
        Not a member?{' '}
        <Link
          href="/signup"
          className="tw-font-semibold tw-leading-6 tw-text-primary hover:tw-text-primary"
        >
          Register for free
        </Link>
      </p>
      <p className="tw-mt-1 tw-text-sm tw-text-gray-500">
        Not here to create a release?{' '}
        <a
          href="/"
          className="tw-font-semibold tw-leading-6 tw-text-primary hover:tw-text-primary"
        >
          Check our releases
        </a>
      </p>
    </div>
  )
}
