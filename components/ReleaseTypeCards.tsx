import { getLatestRelease } from '@/lib/actions'
import { ReleaseTypeCard } from './ReleaseTypeCard'

export async function ReleaseTypeCards() {
  const release = await getLatestRelease()

  return (
    <>
      <ReleaseTypeCard
        title="Regulator Release notes"
        navigateTo="/"
        lastUpdateMonth={release?.regRelease?.month ?? '--'}
        lastUpdateYear={release?.regRelease?.year ?? '--'}
        buttonText="I'm a Regulator"
        className="tw-bg-white-house tw-bg-no-repeat tw-bg-50% tw-bg-right"
      />
      <ReleaseTypeCard
        title="FSP Release notes"
        navigateTo="/"
        lastUpdateMonth={release?.fspRelease?.month ?? '--'}
        lastUpdateYear={release?.fspRelease?.year ?? '--'}
        buttonText="I'm a FSP"
        className="tw-bg-white-house tw-bg-no-repeat tw-bg-50% tw-bg-right"
      />
    </>
  )
}
