import { UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'
import TastingSheetUseFormName from '../tasting_sheet/tastingSheetUseFormName'
import WineColor from '../tasting_sheet/wineColor'

type TastingSheetCheckBoxProps = {
  id: string
  name: TastingSheetUseFormName
  checked?: boolean
  color: WineColor
  disabled?: boolean
  label?: string | undefined
  register: UseFormRegister<TastingSheetFormState>
  value: string
}

export default TastingSheetCheckBoxProps
