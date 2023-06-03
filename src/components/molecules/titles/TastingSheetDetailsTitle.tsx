import { FC, memo, useState } from 'react'

import { TastingSheetApi } from '../../../types'
import UpdateSheetNameForm from '../forms/UpdateSheetNameForm'

const TastingSheetDetailsTitle: FC<{ tastingSheet: TastingSheetApi }> = memo(({ tastingSheet }) => {
  const [isEditing, setIsEditing] = useState(false)
  const onClick = () => setIsEditing(true)

  return isEditing ? (
    <UpdateSheetNameForm tastingSheet={tastingSheet} />
  ) : (
    <h2 className="page-title">
      {tastingSheet.name}
      <span className="text-gray-300 text-sm font-normal ml-2">
        <button type="button" onClick={onClick}>
          変更
        </button>
      </span>
    </h2>
  )
})

export default TastingSheetDetailsTitle
