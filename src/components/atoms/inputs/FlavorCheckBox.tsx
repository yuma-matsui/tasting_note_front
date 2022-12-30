import { FC, memo } from 'react'
import { useFlavorContext, useFlavorStatus, useTastingSheetCheckBoxOnChange } from '../../../hooks'

import { FlavorCheckBoxProps } from '../../../types'
import BaseCheckBox from './BaseCheckBox'

const FlavorCheckBox: FC<FlavorCheckBoxProps> = memo(({ name, label }) => {
  const { dispatch } = useFlavorContext()
  const { checked, disabled } = useFlavorStatus(name, label)
  const { onChange } = useTastingSheetCheckBoxOnChange(dispatch)

  return <BaseCheckBox label={label} name={name} checked={checked} disabled={disabled} onChange={onChange} />
})

export default FlavorCheckBox
