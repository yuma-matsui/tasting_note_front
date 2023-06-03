import { FC, memo } from 'react'
import { useCheckEditingForm } from '../../hooks'

import { FormWrapperProps } from '../../types'
import { formTitleFormat } from '../../utils'

const TastingSheetFormWrapper: FC<FormWrapperProps> = memo(({ title, children }) => {
  const { isEditing } = useCheckEditingForm()

  return (
    <>
      {isEditing && <h2 className="page-title">{formTitleFormat(title)}</h2>}
      {children}
    </>
  )
})

export default TastingSheetFormWrapper
