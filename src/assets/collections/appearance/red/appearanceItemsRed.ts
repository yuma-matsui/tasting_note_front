import { AppearanceItemsRed } from '../../../../types'
import CONSISTENCY_ITEMS from '../shared/consistencyItems'
import APPEARANCE_COLORS_RED from './appearanceColorsRed'
import APPEARANCE_IMPRESSIONS_RED from './appearanceImpressionsRed'
import BRIGHTNESS_ITEMS_RED from './brightnessItemsRed'
import CLARITY_ITEMS_RED from './clarityItemsRed'
import INTENSITY_ITEMS_RED from './intensityItemsRed'

const APPEARANCE_ITEMS_RED: AppearanceItemsRed = [
  { label: '清澄度', collection: CLARITY_ITEMS_RED },
  { label: '輝き', collection: BRIGHTNESS_ITEMS_RED },
  { label: '色調', subLabel: '補助用語/メイン', collection: APPEARANCE_COLORS_RED },
  { label: '濃淡', collection: INTENSITY_ITEMS_RED },
  { label: '粘性', collection: CONSISTENCY_ITEMS },
  { label: '外観の印象', subLabel: '外観の印象/成熟度', collection: APPEARANCE_IMPRESSIONS_RED }
]

export default APPEARANCE_ITEMS_RED
