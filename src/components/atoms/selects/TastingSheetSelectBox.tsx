import { FC, memo } from 'react'

import { TastingSheetSelectBoxProps } from '../../../types'

const TastingSheetSelectBox: FC<TastingSheetSelectBoxProps> = memo(({ id, register, name, options, label }) => (
  <label htmlFor={id} className="mb-6 label flex flex-col">
    <span className="label-text mb-2 leading-6 text-base">{label}</span>
    <select
      id={id}
      {...register(name, { required: true })}
      className="select select-bordered w-full max-w-xs border-black select-sm"
    >
      <option disabled>{`${label}を選択してください`}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
))

export default TastingSheetSelectBox
