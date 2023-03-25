import { FC } from 'react'

import { useFetchATastingSheet, useTastingSheetLabels } from '../../hooks'
import { GoToAnotherPageButton, GoToNewWinePageButton } from '../atoms'
import TastingSheetDetailsTitle from '../molecules/titles/TastingSheetDetailsTitle'
import { TastingSheetDetailsTab, WineDetails } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailsPage: FC<{ tastingSheetId: number }> = ({ tastingSheetId }) => {
  const { fetching, wine } = useFetchATastingSheet(tastingSheetId)
  const labels = useTastingSheetLabels()

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <TastingSheetDetailsTitle />
      <TastingSheetDetailsTab labels={labels} />
      {!wine && <GoToNewWinePageButton />}
      {wine && (
        <>
          <div className="divider" />
          <WineDetails wine={wine} />
        </>
      )}
      <div className="divider" />
      <GoToAnotherPageButton text="戻る" to="/" />
    </DefaultLayout>
  )
}

export default TastingSheetDetailsPage
