import { FC, memo } from 'react'
import { useTastingSheetCheckBoxStatus, useTastingSheetOnChange } from '../../../hooks'
import { TastingSheetCheckBoxProps } from '../../../types'
import BaseCheckBox from './BaseCheckBox'

const PolymorphicCheckBox: FC<TastingSheetCheckBoxProps> = memo(({ type, name, label }) => {
  const statusHooks = useTastingSheetCheckBoxStatus(type)
  const { checked, disabled } = statusHooks(name, label)
  const { onChange } = useTastingSheetOnChange()

  return (
    <BaseCheckBox type="checkbox" label={label} name={name} checked={checked} disabled={disabled} onChange={onChange} />
  )
})

export default PolymorphicCheckBox
