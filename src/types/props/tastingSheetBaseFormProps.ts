import { UseFormGetValues, UseFormRegister } from 'react-hook-form'

import TastingSheetFormItem from '../tasting_sheet/tastingSheetFormItem'
import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'
import TastingSheetFormType from '../tasting_sheet/tastingSheetFormType'

type TastingSheetBaseFormProps = {
  getValues: UseFormGetValues<TastingSheetFormState>
  items: TastingSheetFormItem[]
  options: TastingSheetFormItem[]
  register: UseFormRegister<TastingSheetFormState>
  type: TastingSheetFormType
}

export default TastingSheetBaseFormProps
