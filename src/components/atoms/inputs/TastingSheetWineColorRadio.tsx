import { ChangeEvent, FC, memo } from 'react'
import { useTastingSheetContext } from '../../../hooks'
import { WineColorRadioProps } from '../../../types'

const TastingSheetWineColorRadio: FC<WineColorRadioProps> = memo(({ color }) => {
  const { tastingSheet, setTastingSheet } = useTastingSheetContext()

  const onChangeWineColor = (e: ChangeEvent<HTMLInputElement>) => {
    const wineColor = e.target.value
    setTastingSheet((prev) => ({ ...prev, color: wineColor }))
  }

  return (
    <label htmlFor={color}>
      <input
        type="radio"
        id={color}
        value={color}
        checked={tastingSheet.color === color}
        onChange={onChangeWineColor}
      />
      {color === 'white' ? '白' : '赤'}
    </label>
  )
})

export default TastingSheetWineColorRadio
