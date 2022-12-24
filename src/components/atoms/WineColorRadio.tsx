import { FC } from 'react'
import { WineColorRadioProps } from '../../types'

const WineColorRadio: FC<WineColorRadioProps> = ({ color, checked, onChange }) => (
  <label htmlFor={color}>
    <input type="radio" id={color} value={color} checked={checked} onChange={onChange} />
    {color === 'white' ? '白' : '赤'}
  </label>
)

export default WineColorRadio
