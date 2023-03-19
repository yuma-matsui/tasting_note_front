import { FC, memo } from 'react'

import { WineSelectBoxProps } from '../../../types'

const WineSelectBox: FC<WineSelectBoxProps> = memo(({ name, register, options, label }) => (
  <label htmlFor={name}>
    {label}
    <select id={name} {...register(name, { required: true })} className="block">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
))

export default WineSelectBox
