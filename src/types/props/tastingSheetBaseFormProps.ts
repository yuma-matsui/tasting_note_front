import { UseFormGetValues, UseFormRegister } from 'react-hook-form'

import TastingSheetFormItem from '../tasting_sheet/tastingSheetFormItem'
import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'
import TastingSheetFormType from '../tasting_sheet/tastingSheetFormType'

type TastingSheetBaseFormProps = {
  type: TastingSheetFormType
  items: TastingSheetFormItem[]
  options: TastingSheetFormItem[]
  register: UseFormRegister<TastingSheetFormState>
  getValues: UseFormGetValues<TastingSheetFormState>
}

export default TastingSheetBaseFormProps
