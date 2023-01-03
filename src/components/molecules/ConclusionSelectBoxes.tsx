import { FC, memo } from 'react'

import useConclusionFormItems from '../../hooks/tasting_sheet/conclusion/useConclusionFormItems'
import { PolymorphicSelectBox } from '../atoms'

const ConclusionSelectBoxes: FC = memo(() => {
  const { conclusionItems } = useConclusionFormItems('select')

  return (
    <>
      {conclusionItems.map(({ heading, name, labels }) => (
        <PolymorphicSelectBox key={heading} label={heading} name={name} options={labels} />
      ))}
    </>
  )
})

export default ConclusionSelectBoxes
