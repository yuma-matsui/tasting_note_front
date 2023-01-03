import APPEARANCE_ITEMS_RED from './appearance/red/appearanceItemsRed'
import APPEARANCE_ITEMS_WHITE from './appearance/white/appearanceItemsWhite'
import CONCLUSION_ITEMS_RED from './conclusion/red/conclusionItemsRed'
import CONCLUSION_ITEMS_WHITE from './conclusion/white/conclusionItemsWhite'
import FLAVOR_ITEMS_RED from './flavor/red/flavorItemsRed'
import FLAVOR_ITEMS_WHITE from './flavor/white/flavorItemsWhite'
import TASTE_ITEMS_RED from './taste/red/tasteItemsRed'
import TASTE_ITEMS_WHITE from './taste/white/tasteItemsWhite'

const FORM_ITEMS = [
  {
    type: '外観',
    white: APPEARANCE_ITEMS_WHITE,
    red: APPEARANCE_ITEMS_RED
  },
  {
    type: '香り',
    white: FLAVOR_ITEMS_WHITE,
    red: FLAVOR_ITEMS_RED
  },
  {
    type: '味わい',
    white: TASTE_ITEMS_WHITE,
    red: TASTE_ITEMS_RED
  },
  {
    type: 'まとめ',
    white: CONCLUSION_ITEMS_WHITE,
    red: CONCLUSION_ITEMS_RED
  }
]

export default FORM_ITEMS
