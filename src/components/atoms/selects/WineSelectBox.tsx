import { FC, memo } from 'react'

import { WineSelectBoxProps } from '../../../types'

const WineSelectBox: FC<WineSelectBoxProps> = memo(({ name, register, options, label }) => (
  <div className="wine-form-control">
    <label htmlFor={name} className="wine-form-label">
      <span className="wine-form-label-text">{label}</span>
      <select
        id={name}
        {...register(name, { required: true })}
        className="select select-bordered w-full max-w-md border-gray-700 select-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  </div>
))

export default WineSelectBox
