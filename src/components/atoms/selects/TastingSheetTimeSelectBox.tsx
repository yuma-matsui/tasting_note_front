import { FC, memo } from 'react'

import { TastingSheetSelectBoxProps } from '../../../types'
import BaseSelectBox from './BaseSelectBox'

const TastingSheetTimeSelectBox: FC<TastingSheetSelectBoxProps> = memo(({ id, register, name, options, label }) => (
  <label htmlFor={id} className="mb-6 label flex flex-col">
    <span className="label-text mb-2 leading-6 self-start">{label}</span>
    <BaseSelectBox id={id} register={register} name={name} options={options} label={label} />
  </label>
))

export default TastingSheetTimeSelectBox
