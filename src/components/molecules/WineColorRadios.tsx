import { FC, memo } from 'react'

import { WINE_COLORS } from '../../assets'
import { TastingSheetCheckBox } from '../atoms'
import { WineColorRadiosProps } from '../../types'

const WineColorRadios: FC<WineColorRadiosProps> = memo(({ register }) => (
  <div className="flex flex-col items-center form-control w-full max-w-xs mb-6">
    <span className="mb-2 self-start">ワインの色</span>
    <div className="flex justify-around w-full">
      {WINE_COLORS.map((color) => (
        <TastingSheetCheckBox
          key={color}
          id={color}
          value={color}
          register={register}
          name="tastingSheet.color"
          label={color === 'white' ? '白' : '赤'}
          color={color}
        />
      ))}
    </div>
  </div>
))

export default WineColorRadios
