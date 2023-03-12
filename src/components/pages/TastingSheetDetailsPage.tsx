import { FC, useState } from 'react'

import { useFetchATastingSheet, useTastingSheetContext, useTastingSheetLabels } from '../../hooks'
import { UpdateSheetNameForm } from '../molecules'
import { TastingSheetDetailsTab } from '../organisms'
import { DefaultLayout } from '../templates'

const TastingSheetDetailsPage: FC = () => {
  const { fetching } = useFetchATastingSheet()
  const { tastingSheet } = useTastingSheetContext()
  const labels = useTastingSheetLabels()

  const [isEditing, setIsEditing] = useState(false)
  const onClick = () => setIsEditing(true)

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      {isEditing ? (
        <UpdateSheetNameForm setIsEditing={setIsEditing} />
      ) : (
        <div className="flex">
          <h2>{tastingSheet.name}</h2>
          <button type="button" className="btn" onClick={onClick}>
            変更
          </button>
        </div>
      )}
      <TastingSheetDetailsTab labels={labels} />
    </DefaultLayout>
  )
}

export default TastingSheetDetailsPage
