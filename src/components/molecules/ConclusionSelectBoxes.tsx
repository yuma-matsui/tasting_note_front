import { FC, memo } from 'react'

import { ConclusionSelectBoxesProps } from '../../types'
import { PolymorphicSelectBox } from '../atoms'

const ConclusionSelectBoxes: FC<ConclusionSelectBoxesProps> = memo(({ items }) => (
  <>
    {items.map(({ heading, name, labels }) => (
      <PolymorphicSelectBox key={heading} label={heading} name={name} options={labels} />
    ))}
  </>
))

export default ConclusionSelectBoxes
