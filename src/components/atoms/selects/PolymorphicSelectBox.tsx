import { FC, memo } from 'react'

import { useTastingSheetOnChange, useTastingSheetSelectValue } from '../../../hooks'
import { PolymorphicSelectBoxProps } from '../../../types'
import BaseSelectBox from './BaseSelectBox'

const PolymorphicSelectBox: FC<PolymorphicSelectBoxProps> = memo(({ label, name, options, register }) => {
  const getValueHooks = useTastingSheetSelectValue(name)
  const { value } = getValueHooks(name)
  const { onChange } = useTastingSheetOnChange<'select'>()

  return (
    <BaseSelectBox label={label} name={name} onChange={onChange} value={value} options={options} register={register} />
  )
})

export default PolymorphicSelectBox
