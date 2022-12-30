import { FC, memo } from 'react'
import { WINE_COLORS } from '../../assets'
import { TastingSheetWineColorRadio } from '../atoms'

const TastingSheetWineColorRadios: FC = memo(() => (
  <div>
    <p>ワインの色</p>
    <div style={{ display: 'flex' }}>
      {WINE_COLORS.map((color) => (
        <TastingSheetWineColorRadio key={color} color={color} />
      ))}
    </div>
  </div>
))

export default TastingSheetWineColorRadios
