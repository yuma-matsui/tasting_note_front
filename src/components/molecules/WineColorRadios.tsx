import { FC, memo } from 'react'

import { UseFormRegister } from 'react-hook-form'
import { TastingSheetFormState } from '../../types'
import { WINE_COLORS } from '../../assets'
import { TastingSheetCheckBox } from '../atoms'

const WineColorRadios: FC<{
  register: UseFormRegister<TastingSheetFormState>
}> = memo(({ register }) => (
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
        />
      ))}
    </div>
  </div>
))

export default WineColorRadios
