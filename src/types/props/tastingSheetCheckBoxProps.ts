import { UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'
import TastingSheetUseFormName from '../tasting_sheet/tastingSheetUseFormName'
import WineColor from '../tasting_sheet/wineColor'

type TastingSheetCheckBoxProps = {
  id: string
  value: string
  name: TastingSheetUseFormName
  label?: string
  disabled?: boolean
  register: UseFormRegister<TastingSheetFormState>
  color: WineColor
}

export default TastingSheetCheckBoxProps
