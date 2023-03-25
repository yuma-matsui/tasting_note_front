import { FC, memo, useEffect } from 'react'

import { useFetchATastingSheet, useTastingSheetContext, useTastingSheetLabels } from '../../hooks'
import { GoToAnotherPageButton, GoToNewWinePageButton } from '../atoms'
import TastingSheetDetailsTitle from '../molecules/titles/TastingSheetDetailsTitle'
import { TastingSheetDetailsTab, WineDetails } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailsPage: FC<{ tastingSheetId: number }> = memo(({ tastingSheetId }) => {
  const { setTastingSheet } = useTastingSheetContext()
  const { fetching, tastingSheet } = useFetchATastingSheet(tastingSheetId)
  const labels = useTastingSheetLabels()

  useEffect(() => {
    setTastingSheet(tastingSheet)
  }, [setTastingSheet, tastingSheet])

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <TastingSheetDetailsTitle />
      <TastingSheetDetailsTab labels={labels} />
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
