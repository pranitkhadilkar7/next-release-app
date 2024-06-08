import { getLatestRelease } from '@/common/actions/release'
import { ReleaseTypeCard } from './ReleaseTypeCard'

export async function ReleaseTypeCards() {
  const release = await getLatestRelease()

  return (
    <>
      <ReleaseTypeCard
        title="Regulator Release notes"
        navigateTo="/"
        lastUpdateMonth={release?.data?.regRelease?.month ?? '--'}
        lastUpdateYear={release?.data?.regRelease?.year ?? '--'}
        buttonText="I'm a Regulator"
        className="tw-bg-white-house tw-bg-no-repeat tw-bg-50% tw-bg-right"
      />
      <ReleaseTypeCard
        title="FSP Release notes"
        navigateTo="/"
        lastUpdateMonth={release?.data?.fspRelease?.month ?? '--'}
        lastUpdateYear={release?.data?.fspRelease?.year ?? '--'}
        buttonText="I'm a FSP"
        className="tw-bg-rocket tw-bg-no-repeat tw-bg-50% tw-bg-right"
      />
    </>
  )
}
