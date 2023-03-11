import { APPEARANCE_FORM_ITEMS } from '../../../assets'
import { AppearanceName } from '../../../types'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../../context/useTastingSheetContext'

const useAppearanceLabels = () => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  return [...APPEARANCE_FORM_ITEMS.map((item) => new FormItem<AppearanceName>({ color, ...item }).property)]
}

export default useAppearanceLabels
