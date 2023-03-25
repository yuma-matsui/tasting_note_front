import { FLAVOR_FORM_ITEMS } from '../../../assets'
import { FlavorName } from '../../../types'
import WineColor from '../../../types/tasting_sheet/wineColor'
import { FormItem } from '../../../utils'

const useFlavorLabels = (color: WineColor) => [
  ...FLAVOR_FORM_ITEMS.map((item) => new FormItem<FlavorName>({ color, ...item }).property)
]

export default useFlavorLabels
