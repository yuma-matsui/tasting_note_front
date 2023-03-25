import { APPEARANCE_FORM_ITEMS } from '../../../assets'
import { AppearanceName } from '../../../types'
import WineColor from '../../../types/tasting_sheet/wineColor'
import { FormItem } from '../../../utils'

const useAppearanceLabels = (color: WineColor) => [
  ...APPEARANCE_FORM_ITEMS.map((item) => new FormItem<AppearanceName>({ color, ...item }).property)
]

export default useAppearanceLabels
