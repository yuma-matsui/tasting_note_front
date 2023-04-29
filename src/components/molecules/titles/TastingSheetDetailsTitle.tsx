import { FC, memo, useState } from 'react'

import { TastingSheetApi } from '../../../types'
import UpdateSheetNameForm from '../forms/UpdateSheetNameForm'
import { useTastingSheetCardColor } from '../../../hooks'

const TastingSheetDetailsTitle: FC<{ tastingSheet: TastingSheetApi }> = memo(({ tastingSheet }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { bgColor } = useTastingSheetCardColor(tastingSheet)
  const onClick = () => setIsEditing(true)

  return isEditing ? (
    <UpdateSheetNameForm tastingSheet={tastingSheet} />
  ) : (
    <div className="flex items-center justify-center">
      <h2 className="page-title">{tastingSheet.name}</h2>
      <span className="text-xs font-normal text-white ml-2">
        <button
          type="button"
          className={`rounded-full shadow-md py-1 px-2 border-transparent ${bgColor}`}
          onClick={onClick}
        >
          変更
        </button>
      </span>
    </div>
  )
})

export default TastingSheetDetailsTitle
