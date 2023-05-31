import { FC, memo } from 'react'
import { useCheckEditingForm } from '../../hooks'

import { FormWrapperProps } from '../../types'
import { formTitleFormat } from '../../utils'

const TastingSheetFormWrapper: FC<FormWrapperProps> = memo(({ title, children }) => {
  const { isEditing } = useCheckEditingForm()

  return (
    <>
      {isEditing && (
        <h2
          className="
            font-semibold
            text-xl
            text-center
            w-full
            text-white
            py-2
            rounded
            bg-zinc-500
            font-mincho
          "
        >
          {formTitleFormat(title)}
        </h2>
      )}
      {children}
    </>
  )
})

export default TastingSheetFormWrapper
