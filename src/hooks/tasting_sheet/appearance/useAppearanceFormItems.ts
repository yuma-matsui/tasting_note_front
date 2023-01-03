import { APPEARANCE_FORM_ITEMS } from '../../../assets'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../useTastingSheetContext'

const useAppearanceFormItems = () => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  const appearanceItems = [...APPEARANCE_FORM_ITEMS.map((item) => new FormItem({ color, ...item }).property)]

  return { appearanceItems }
}

export default useAppearanceFormItems
