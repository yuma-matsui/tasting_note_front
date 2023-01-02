import { FC, memo } from 'react'

import { CONCLUSION_SELECT_OPTIONS_RED, CONCLUSION_SELECT_OPTIONS_WHITE } from '../../assets'
import { useTastingSheetContext } from '../../hooks'
import { PolymorphicSelectBox } from '../atoms'

const ConclusionSelectBoxes: FC = memo(() => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()
  const items = color === 'white' ? CONCLUSION_SELECT_OPTIONS_WHITE : CONCLUSION_SELECT_OPTIONS_RED

  return (
    <>
      {items.map(({ label, name, options }) => (
        <PolymorphicSelectBox key={label} label={label} name={name} options={options.map((option) => String(option))} />
      ))}
    </>
  )
})

export default ConclusionSelectBoxes
