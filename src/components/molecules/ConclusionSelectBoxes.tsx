import { FC, memo } from 'react'

import { ConclusionSelectBoxesProps } from '../../types'
import { convertToFormName } from '../../utils'
import { TastingSheetSelectBox } from '../atoms'

const ConclusionSelectBoxes: FC<ConclusionSelectBoxesProps> = memo(({ register, options }) => (
  <>
    {options.map(({ heading, name, labels }) => (
      <div key={heading}>
        <h3>{heading}</h3>
        <div>
          <TastingSheetSelectBox id={name} register={register} name={convertToFormName(name)} options={labels} />
        </div>
      </div>
    ))}
  </>
))

export default ConclusionSelectBoxes
