import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import { NavMenu } from './NavMenu'

export function LogoHeader() {
  return (
    <header className="tw-w-full tw-flex tw-justify-between tw-items-center tw-py-6 tw-px-28">
      <Image src={logo} alt="Company Logo" priority height={20} />
      <NavMenu />
    </header>
  )
}
