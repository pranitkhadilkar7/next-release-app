import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export function PrimaryLinkButton({ href, children, className }: Props) {
  return (
    <Link
      className={`tw-bg-primary tw-rounded-lg tw-border tw-border-primary tw-border-solid tw-text-white ${className}`}
      href={href}
    >
      {children}
    </Link>
  )
}
