import { FC, memo } from 'react'

import { TastingSheetSelectBoxProps } from '../../../types'
import BaseSelectBox from './BaseSelectBox'

const TastingSheetSelectBox: FC<TastingSheetSelectBoxProps> = memo(({ id, name, label, options, register }) => (
  <div className="form-section-border">
    <h3 className="form-heading-text">{label}</h3>
    <BaseSelectBox id={id} register={register} name={name} options={options} label={label} />
  </div>
))

export default TastingSheetSelectBox
