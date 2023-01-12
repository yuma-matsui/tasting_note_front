import { UseFormRegister } from 'react-hook-form'

import SelectBoxNames from '../tasting_sheet/selectBoxNames'
import TastingSheetSettingFormInputs from '../tasting_sheet/tastingSheetSettingFormInputs'

type PolymorphicSelectBoxProps = {
  label: string
  options: string[]
  name: SelectBoxNames
  register: UseFormRegister<TastingSheetSettingFormInputs>
}

export default PolymorphicSelectBoxProps
