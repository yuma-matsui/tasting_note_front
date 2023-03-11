import { FC } from 'react'

import { useFetchATastingSheet, useTastingSheetContext, useTastingSheetFormAllItems } from '../../hooks'
import { TastingSheetConfirmationTab } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailPage: FC = () => {
  const { fetching } = useFetchATastingSheet()
  const { tastingSheet } = useTastingSheetContext()
  const formItems = useTastingSheetFormAllItems()

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <h2>{tastingSheet.name}</h2>
      <TastingSheetConfirmationTab formItems={formItems} />
    </DefaultLayout>
  )
}

export default TastingSheetDetailPage
