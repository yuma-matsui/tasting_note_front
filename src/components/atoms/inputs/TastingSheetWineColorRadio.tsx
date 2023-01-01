import { FC, memo } from 'react'
import { useTastingSheetContext, useTastingSheetOnChange } from '../../../hooks'
import { WineColorRadioProps } from '../../../types'
import BaseCheckBox from './BaseCheckBox'

const TastingSheetWineColorRadio: FC<WineColorRadioProps> = memo(({ color }) => {
  const { tastingSheet } = useTastingSheetContext()
  const { onChange } = useTastingSheetOnChange()

  return (
    <BaseCheckBox
      type="radio"
      label={color}
      name="color"
      onChange={onChange}
      checked={tastingSheet.color === color}
      text={color === 'white' ? '白' : '赤'}
    />
  )
})

export default TastingSheetWineColorRadio
