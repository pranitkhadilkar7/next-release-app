import { HTMLInputTypeAttribute } from 'react'

type Props = {
  id: string
  label: string
  placeholder: string
  name: string
  required?: boolean
  type?: HTMLInputTypeAttribute
}

export function TextInput({
  id,
  label,
  placeholder,
  name,
  required,
  type,
}: Props) {
  return (
    <div className="tw-w-full">
      <label
        htmlFor={id}
        className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900 tw-font-proxima_novabold"
      >
        {label}
        {required && '*'}
      </label>
      <div className="tw-mt-2">
        <input
          type={type}
          id={id}
          className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-outline-none sm:tw-text-sm sm:tw-leading-6 tw-ring-gray-300 focus:tw-ring-primary"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
