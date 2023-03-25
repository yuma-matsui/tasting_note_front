import { FC, memo } from 'react'

import { useFetchATastingSheet } from '../../hooks'
import { GoToAnotherPageButton, GoToNewWinePageButton } from '../atoms'
import TastingSheetDetailsTitle from '../molecules/titles/TastingSheetDetailsTitle'
import { TastingSheetDetailsTab, WineDetails } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailsPage: FC<{ tastingSheetId: number }> = memo(({ tastingSheetId }) => {
  const { fetching, tastingSheet } = useFetchATastingSheet(tastingSheetId)

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <TastingSheetDetailsTitle tastingSheet={tastingSheet} />
      <TastingSheetDetailsTab tastingSheet={tastingSheet} />
      {!tastingSheet.wine && <GoToNewWinePageButton />}
      {tastingSheet.wine && (
        <>
          <div className="divider" />
          <WineDetails wine={tastingSheet.wine} />
        </>
      )}
      <div className="divider" />
      <GoToAnotherPageButton text="戻る" to="/" />
    </DefaultLayout>
  )
})

export default TastingSheetDetailsPage
