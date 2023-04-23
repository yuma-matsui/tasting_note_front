import { FC, memo } from 'react'

import { TastingSheetSelectBoxProps } from '../../../types'

const BaseSelectBox: FC<TastingSheetSelectBoxProps> = memo(({ id, register, name, options, label }) => (
  <select
    id={id}
    {...register(name, { required: true })}
    className="select select-bordered w-full max-w-xs border-black select-sm m-2"
  >
    <option disabled>{`${label}を選択してください`}</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
))

export default BaseSelectBox
