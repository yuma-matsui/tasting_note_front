import { UseFormRegister } from 'react-hook-form'
import TastingSheetFormItem from '../tasting_sheet/tastingSheetFormItem'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'

type ConclusionSelectBoxesProps = {
  register: UseFormRegister<TastingSheetFormState>
  options: TastingSheetFormItem[]
}

export default ConclusionSelectBoxesProps
