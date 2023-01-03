import { FLAVOR_FORM_ITEMS } from '../../../assets'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../useTastingSheetContext'

const useFlavorFormItems = () => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  const flavorItems = [...FLAVOR_FORM_ITEMS.map((item) => new FormItem({ color, ...item }).property)]

  return { flavorItems }
}

export default useFlavorFormItems
