import { FC, memo, useState } from 'react'

import { TastingSheetApi } from '../../../types'
import UpdateSheetNameForm from '../forms/UpdateSheetNameForm'

const TastingSheetDetailsTitle: FC<{ tastingSheet: TastingSheetApi }> = memo(({ tastingSheet }) => {
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
