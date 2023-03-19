import { UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'
import TastingSheetUseFormName from '../tasting_sheet/tastingSheetUseFormName'

type TastingSheetSelectBoxProps = {
  id: string
  register: UseFormRegister<TastingSheetFormState>
  name: TastingSheetUseFormName
  options: string[]
  label: string
}

export default TastingSheetSelectBoxProps
