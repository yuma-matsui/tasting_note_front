import { UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'
import TastingSheetUseFormName from '../tasting_sheet/tastingSheetUseFormName'

type TastingSheetCheckBoxProps = {
  id: string
  value: string
  name: TastingSheetUseFormName
  disabled: boolean
  register: UseFormRegister<TastingSheetFormState>
}

export default TastingSheetCheckBoxProps
