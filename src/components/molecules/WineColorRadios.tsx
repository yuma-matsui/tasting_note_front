import { FC, memo } from 'react'

import { WINE_COLORS } from '../../assets'
import { TastingSheetCheckBox } from '../atoms'
import { WineColorRadiosProps } from '../../types'

const WineColorRadios: FC<WineColorRadiosProps> = memo(({ register }) => (
  <div className="flex flex-col items-center w-full mb-6">
    <span className="mb-2">ワインの色</span>
    <div className="flex justify-between md:justify-around w-1/2">
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
