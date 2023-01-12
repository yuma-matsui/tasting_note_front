import { FC, memo } from 'react'

import { BaseSelectBoxProps } from '../../../types'

const BaseSelectBox: FC<BaseSelectBoxProps> = memo(({ label, name, value, onChange, options, register }) => (
  <label htmlFor={name}>
    {name === 'time' ? label : <h3>{label}</h3>}
    <select id={name} value={value} {...register(name, { onChange, required: true })}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
))

export default BaseSelectBox
