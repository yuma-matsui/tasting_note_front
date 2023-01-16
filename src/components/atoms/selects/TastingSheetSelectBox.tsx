import { FC, memo } from 'react'
import { TastingSheetSelectBoxProps } from '../../../types'

const TastingSheetSelectBox: FC<TastingSheetSelectBoxProps> = memo(({ id, register, name, options }) => (
  <label htmlFor={id}>
    <select id={id} {...register(name, { required: true })}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
))

export default TastingSheetSelectBox
