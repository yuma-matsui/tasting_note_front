import { FC } from 'react'

import { useFetchATastingSheet, useTastingSheetContext, useTastingSheetLabels } from '../../hooks'
import { TastingSheetDetailsTab } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailsPage: FC = () => {
  const { fetching } = useFetchATastingSheet()
  const { tastingSheet } = useTastingSheetContext()
  const labels = useTastingSheetLabels()

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <h2>{tastingSheet.name}</h2>
      <TastingSheetDetailsTab labels={labels} />
    </DefaultLayout>
  )
}

export default TastingSheetDetailsPage
