import { FC, memo } from 'react'
import { TastingSheetSelectBoxProps } from '../../../types'

const TastingSheetSelectBox: FC<TastingSheetSelectBoxProps> = memo(({ id, register, name, options, label }) => (
  <label htmlFor={id}>
    {label}
    <select id={id} {...register(name, { required: true })} className="block">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
))

export default TastingSheetSelectBox
