import { UseFormRegister } from 'react-hook-form'

import SelectBoxNames from '../tasting_sheet/selectBoxNames'
import TastingSheetFormInputs from '../tasting_sheet/tastingSheetFormInputs'

type PolymorphicSelectBoxProps = {
  label: string
  options: string[]
  name: SelectBoxNames
  register: UseFormRegister<TastingSheetFormInputs>
}

export default PolymorphicSelectBoxProps
