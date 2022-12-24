import { FC, memo } from 'react'
import { WineColorRadioProps } from '../../../../types'

const TastingSheetWineColorRadio: FC<WineColorRadioProps> = memo(({ color, checked, onChange }) => (
  <label htmlFor={color}>
    <input type="radio" id={color} value={color} checked={checked} onChange={onChange} />
    {color === 'white' ? '白' : '赤'}
  </label>
))

export default TastingSheetWineColorRadio
