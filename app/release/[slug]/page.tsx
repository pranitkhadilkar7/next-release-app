import { getReleasesByType } from '@/common/actions/release'
import { Release } from '@/components/Release'
import logo from '@/assets/images/dark-theme-logo.png'
import Image from 'next/image'
import { RELEASE_TYPES } from '@/common/constants/variables'
import { ReleaseType } from '@/types/Release'

export function generateStaticParams() {
  return RELEASE_TYPES.map((releaseType) => ({
    slug: releaseType,
  }))
}

export default async function Releases({
  params,
}: {
  params: { slug: ReleaseType }
}) {
  const releases = await getReleasesByType(params.slug)
  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-overflow-auto tw-bg-relase-page tw-bg-no-repeat tw-bg-cover tw-bg-[#25313e]">
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-py-6 tw-px-30">
        <Image src={logo} alt="EMTECH Logo" priority height={20} />
        <div className="tw-flex tw-flex-col tw-justify-between tw-pl-6 tw-text-white">
          <p className="tw-text-base">Emtech FSP Release notes</p>
          <a href="/" className="tw-text-sm">
            emtech.com
          </a>
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-px-10 md:tw-mx-auto md:tw-w-3/5 md:tw-px-0">
        {releases?.data?.map((release, index) => (
          <Release
            key={`${release.id}`}
            id={release.id}
            name={release.name}
            descriptions={release.descriptions}
            month={release.month}
            year={release.year}
            newFeatures={release.newFeatures}
            upgrades={release.upgrades}
            fixes={release.fixes}
            className={
              releases.data.length > 1 && index < releases.data.length - 1
                ? 'tw-border-b-2 tw-border-solid tw-border-border-1 tw-text-white tw-mt-3'
                : 'tw-text-white tw-mt-3'
            }
          />
        ))}
        <div className="tw-text-white tw-text-lg tw-font-normal">
          <p className="tw-mb-6">Do you have questions?</p>
          <p className="tw-mb-6">
            If you have any questions about this release, please send us an
            email at{' '}
            <a href="mailto:support@emtech.com" className="tw-text-secondary">
              support@emtech.com
            </a>
          </p>
          <p className="tw-mb-8">{`We'd love to hear from you!`}</p>
        </div>
      </div>
    </div>
  )
}
