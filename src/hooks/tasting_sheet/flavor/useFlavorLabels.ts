import { FLAVOR_FORM_ITEMS } from '../../../assets'
import { FlavorName } from '../../../types'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../../context/useTastingSheetContext'

const useFlavorLabels = () => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  return [...FLAVOR_FORM_ITEMS.map((item) => new FormItem<FlavorName>({ color, ...item }).property)]
}

export default useFlavorLabels
