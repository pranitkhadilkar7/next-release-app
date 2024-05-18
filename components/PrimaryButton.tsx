'use client'

import { useFormStatus } from 'react-dom'
import { Spinner } from '../icons/Spinner'

type Props = {
  title: string
  className?: string
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  showSpinner?: boolean
}

export function PrimaryButton({
  title,
  className,
  type,
  disabled,
  showSpinner,
}: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      type={type}
      className={`tw-bg-primary tw-rounded-lg tw-border tw-border-primary tw-border-solid tw-text-white 
        disabled:tw-bg-gray-500 disabled:tw-border-gray-500 tw-flex tw-flex-row tw-items-center tw-justify-around ${className}`}
      disabled={disabled}
    >
      {showSpinner || pending ? <Spinner /> : title}
    </button>
  )
}
