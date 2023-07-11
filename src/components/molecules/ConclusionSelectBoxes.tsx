import { FC, memo } from 'react'

import { ConclusionSelectBoxesProps } from '../../types'
import { convertToFormName } from '../../utils'
import { TastingSheetSelectBox } from '../atoms'

const ConclusionSelectBoxes: FC<ConclusionSelectBoxesProps> = memo(({ options, register }) => (
  <>
    {options.map(({ name, heading, labels }) => (
      <TastingSheetSelectBox
        key={heading}
        id={name}
        register={register}
        name={convertToFormName(name)}
        options={labels}
        label={heading}
      />
    ))}
  </>
))

export default ConclusionSelectBoxes
