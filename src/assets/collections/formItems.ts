import APPEARANCE_ITEMS_RED from './appearance/red/appearanceItemsRed'
import APPEARANCE_ITEMS_WHITE from './appearance/white/appearanceItemsWhite'
import FLAVOR_ITEMS_RED from './flavor/red/flavorItemsRed'
import FLAVOR_ITEMS_WHITE from './flavor/white/flavorItemsWhite'

const FORM_ITEMS = [
  { type: '外観', white: APPEARANCE_ITEMS_WHITE, red: APPEARANCE_ITEMS_RED },
  { type: '香り', white: FLAVOR_ITEMS_WHITE, red: FLAVOR_ITEMS_RED }
]

export default FORM_ITEMS
