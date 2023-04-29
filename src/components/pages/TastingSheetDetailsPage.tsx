import { FC, memo } from 'react'

import { useFetchATastingSheet } from '../../hooks'
import { GoToNewWinePageButton, LoadingSpinner } from '../atoms'
import TastingSheetDetailsTitle from '../molecules/titles/TastingSheetDetailsTitle'
import { TastingSheetDetailsTab, WineDetails } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailsPage: FC<{ tastingSheetId: number }> = memo(({ tastingSheetId }) => {
  const { fetching, tastingSheet } = useFetchATastingSheet(tastingSheetId)

  if (fetching) return <LoadingSpinner />

  return (
    <DefaultLayout>
      <TastingSheetDetailsTitle tastingSheet={tastingSheet} />
      <TastingSheetDetailsTab tastingSheet={tastingSheet} />
      {tastingSheet.wine && (
        <>
          <div className="divider" />
          <WineDetails wine={tastingSheet.wine} />
        </>
      )}
      {!tastingSheet.wine && <GoToNewWinePageButton tastingSheet={tastingSheet} />}
    </DefaultLayout>
  )
})

export default TastingSheetDetailsPage
