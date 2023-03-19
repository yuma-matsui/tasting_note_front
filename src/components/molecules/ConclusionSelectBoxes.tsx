import { FC, memo } from 'react'

import { ConclusionSelectBoxesProps } from '../../types'
import { convertToFormName } from '../../utils'
import { TastingSheetSelectBox } from '../atoms'

const ConclusionSelectBoxes: FC<ConclusionSelectBoxesProps> = memo(({ register, options }) => (
  <>
    {options.map(({ heading, name, labels }) => (
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
