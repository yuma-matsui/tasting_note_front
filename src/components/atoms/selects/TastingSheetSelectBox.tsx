import { FC, memo } from 'react'

import { TastingSheetSelectBoxProps } from '../../../types'
import BaseSelectBox from './BaseSelectBox'

const TastingSheetSelectBox: FC<TastingSheetSelectBoxProps> = memo(({ id, register, name, options, label }) => (
  <div>
    <h3 className="text-lg font-semibold p-2 bg-gray-300 border-y border-gray-400 box-content">{label}</h3>
    <BaseSelectBox id={id} register={register} name={name} options={options} label={label} />
  </div>
))

export default TastingSheetSelectBox
