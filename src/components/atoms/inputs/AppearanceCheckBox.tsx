import { FC, memo } from 'react'
import { useAppearanceContext, useAppearanceStatus, useTastingSheetCheckBoxOnChange } from '../../../hooks'
import { AppearanceCheckBoxProps } from '../../../types'
import BaseCheckBox from './BaseCheckBox'

const AppearanceCheckBox: FC<AppearanceCheckBoxProps> = memo(({ name, label }) => {
  const { dispatch } = useAppearanceContext()
  const { checked, disabled } = useAppearanceStatus(name, label)
  const { onChange } = useTastingSheetCheckBoxOnChange(dispatch)

  return <BaseCheckBox label={label} name={name} checked={checked} disabled={disabled} onChange={onChange} />
})

export default AppearanceCheckBox
