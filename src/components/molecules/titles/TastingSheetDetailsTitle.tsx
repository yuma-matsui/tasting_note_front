import { FC, memo, useState } from 'react'

import { useTastingSheetContext } from '../../../hooks'
import UpdateSheetNameForm from '../forms/UpdateSheetNameForm'

const TastingSheetDetailsTitle: FC = memo(() => {
  const { tastingSheet } = useTastingSheetContext()
  const [isEditing, setIsEditing] = useState(false)
  const onClick = () => setIsEditing(true)

  return isEditing ? (
    <UpdateSheetNameForm setIsEditing={setIsEditing} />
  ) : (
    <h2>
      {tastingSheet.name}
      <span>
        <button type="button" className="btn" onClick={onClick}>
          変更
        </button>
      </span>
    </h2>
  )
})

export default TastingSheetDetailsTitle
