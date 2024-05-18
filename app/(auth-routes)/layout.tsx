import { ReactNode } from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'

type Props = {
  children: ReactNode
}

export default function AuthRoutesLayout({ children }: Props) {
  return (
    <section className="tw-flex tw-flex-col tw-h-full tw-overflow-auto">
      <div className="tw-grow tw-flex tw-flex-row tw-items-center tw-justify-center">
        <div className="tw-flex tw-flex-col tw-items-center tw-max-w-full tw-min-w-50 md:tw-max-w-100 md:tw-min-w-100">
          <Image src={logo} alt="Company Logo" priority height={20} />
          {children}
        </div>
      </div>
    </section>
  )
}
