import { ReactNode } from 'react'

import TastingSheetFormItem from '../tasting_sheet/tastingSheetFormItem'

type PolymorphicFormProps = {
  type: string
  items: TastingSheetFormItem[]
  children?: ReactNode
}

export default PolymorphicFormProps
