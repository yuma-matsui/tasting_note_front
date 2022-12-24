import { ChangeEvent, FC, useState } from 'react'
import { WINE_COLORS } from '../../assets'
import { useTastingSheetContext, useWineColorStatus } from '../../hooks'
import { WineColor } from '../../types'
import { TastingSheetWineColorRadio } from '../atoms'

const TastingSheetWineColorRadios: FC = () => {
  const { setTastingSheet } = useTastingSheetContext()
  const { isWineColor } = useWineColorStatus()

  const [wineColor, setWineColor] = useState<WineColor>('white')

  const onChangeWineColor = (e: ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value
    if (isWineColor(color)) {
      setWineColor(color)
      setTastingSheet((prev) => ({ ...prev, color }))
    }
  }

  return (
    <>
      <p>ワインの色</p>
      <div style={{ display: 'flex' }}>
        {WINE_COLORS.map((_color) => (
          <TastingSheetWineColorRadio
            key={_color}
            color={_color}
            checked={wineColor === _color}
            onChange={onChangeWineColor}
          />
        ))}
      </div>
    </>
  )
}

export default TastingSheetWineColorRadios
