import { FC, memo } from 'react'
import { WINE_COLORS } from '../../assets'
import { TastingSheetFormRegisterProps } from '../../types'
import { TastingSheetWineColorRadio } from '../atoms'

const TastingSheetWineColorRadios: FC<TastingSheetFormRegisterProps> = memo(({ register }) => (
  <div>
    <p>ワインの色</p>
    <div style={{ display: 'flex' }}>
      {WINE_COLORS.map((color) => (
        <TastingSheetWineColorRadio key={color} color={color} register={register} />
      ))}
    </div>
  </div>
))

export default TastingSheetWineColorRadios
