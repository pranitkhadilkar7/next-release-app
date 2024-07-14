import { LogoHeader } from '@/components/LogoHeader'
import { ReleaseTypeCards } from '@/components/ReleaseTypeCards'
import { ReleaseTypeLoadingCard } from '@/components/ReleaseTypeLoadingCard'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-overflow-auto">
      <LogoHeader />
      <div
        className="tw-grow tw-flex tw-flex-row tw-items-center tw-justify-center tw-px-6 tw-bg-back-swerl tw-bg-no-repeat 
          lg:tw-bg-50% lg:tw-bg-left-24 tw-bg-center tw-bg-cover"
      >
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-justify-center">
          <Suspense
            fallback={
              <>
                <ReleaseTypeLoadingCard />
                <ReleaseTypeLoadingCard />
              </>
            }
          >
            <ReleaseTypeCards />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
