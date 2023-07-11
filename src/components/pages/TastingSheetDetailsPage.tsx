import { FC, memo } from 'react'

import { useFetchATastingSheet } from '../../hooks'
import { GoToNewWinePageButton, LoadingSpinner } from '../atoms'
import { DetailsPageBottomButtons, HeadMeta, TastingSheetDetailsTitle } from '../molecules'
import { TastingSheetDetailsTab, WineDetails } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailsPage: FC<{ tastingSheetId: number }> = memo(({ tastingSheetId }) => {
  const { fetching, tastingSheet } = useFetchATastingSheet(tastingSheetId)

  if (fetching) return <LoadingSpinner />

  return (
    <HeadMeta
      title={`Tasting Note | ${tastingSheet.name}`}
      description={`${tastingSheet.name}の詳細ページ`}
      path={`/tasting_sheets/${tastingSheetId}`}
    >
      <DefaultLayout>
        <TastingSheetDetailsTitle tastingSheet={tastingSheet} />
        <TastingSheetDetailsTab tastingSheet={tastingSheet} />
        {tastingSheet.wine && (
          <>
            <div className="divider my-6" />
            <WineDetails wine={tastingSheet.wine} tastingSheet={tastingSheet} />
          </>
        )}
        {!tastingSheet.wine && (
          <DetailsPageBottomButtons rightButton={<GoToNewWinePageButton tastingSheet={tastingSheet} />} />
        )}
      </DefaultLayout>
    </HeadMeta>
  )
})

export default TastingSheetDetailsPage
