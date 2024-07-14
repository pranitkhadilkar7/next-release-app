'use client'

import {
  Menu,
  Transition,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import { useRouter } from 'next/navigation'

export function NavMenu() {
  const router = useRouter()

  return (
    <Menu as="div" className="tw-relative">
      <div>
        <MenuButton className="tw-relative tw-rounded-full focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary focus:tw-ring-offset-2 focus:tw-ring-offset-white">
          <Image
            className="tw-h-8 tw-w-8 tw-rounded-full"
            src="https://picsum.photos/200/300"
            alt=""
            height={32}
            width={32}
          />
        </MenuButton>
      </div>
      <Transition
        as={Fragment}
        enter="tw-transition tw-ease-out tw-duration-100"
        enterFrom="tw-transform tw-opacity-0 tw-scale-95"
        enterTo="tw-transform tw-opacity-100 tw-scale-100"
        leave="tw-transition tw-ease-in tw-duration-75"
        leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
        leaveTo="tw-transform tw-opacity-0 tw-scale-95"
      >
        <MenuItems
          className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg
        tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"
        >
          <MenuItem>
            <a
              className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 tw-cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                router.push('/create-release')
              }}
            >
              Create New Release
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 tw-cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              Sign out
            </a>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
