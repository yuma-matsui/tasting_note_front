import { UseFormRegister } from 'react-hook-form'

import TastingSheetFormItem from '../tasting_sheet/tastingSheetFormItem'
import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'

type ConclusionSelectBoxesProps = {
  options: TastingSheetFormItem[]
  register: UseFormRegister<TastingSheetFormState>
}

export default ConclusionSelectBoxesProps
