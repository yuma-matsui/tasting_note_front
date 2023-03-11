import { FC } from 'react'

import { useFetchATastingSheet } from '../../hooks'
import { DefaultLayout } from '../templates'

const TastingSheetDetailPage: FC = () => {
  const { tastingSheet, fetching } = useFetchATastingSheet()
  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <p>{tastingSheet.id}</p>
    </DefaultLayout>
  )
}

export default TastingSheetDetailPage
