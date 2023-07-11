import { UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'
import TastingSheetUseFormName from '../tasting_sheet/tastingSheetUseFormName'

type TastingSheetSelectBoxProps = {
  id: string
  name: TastingSheetUseFormName
  label: string
  options: string[]
  register: UseFormRegister<TastingSheetFormState>
}

export default TastingSheetSelectBoxProps
