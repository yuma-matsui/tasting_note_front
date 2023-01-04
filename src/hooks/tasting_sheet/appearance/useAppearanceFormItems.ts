import { APPEARANCE_FORM_ITEMS } from '../../../assets'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../useTastingSheetContext'

const useAppearanceFormItems = () => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  return [...APPEARANCE_FORM_ITEMS.map((item) => new FormItem({ color, ...item }).property)]
}

export default useAppearanceFormItems
