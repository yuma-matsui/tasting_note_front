import TastingSheetFormItem from '../tasting_sheet/tastingSheetFormItem'
import TastingSheetFormType from '../tasting_sheet/tastingSheetFormType'

type TastingSheetBaseFormProps = {
  type: TastingSheetFormType
  items: TastingSheetFormItem[]
  options: TastingSheetFormItem[]
}

export default TastingSheetBaseFormProps
