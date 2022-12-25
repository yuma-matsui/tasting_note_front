import { AppearanceItemsWhite } from '../../../../types'
import CLARITY_ITEMS from '../shared/clarityItems'
import CONSISTENCY_ITEMS from '../shared/consistencyItems'
import APPEARANCE_COLORS_WHITE from './appearanceColorsWhite'
import APPEARANCE_IMPRESSIONS_WHITE from './appearanceImpressionsWhite'
import BRIGHTNESS_ITEMS_WHITE from './brightnessItemsWhite'
import INTENSITY_ITEMS_WHITE from './intensityItemsWhite'

const APPEARANCE_ITEMS_WHITE: AppearanceItemsWhite = [
  { label: '清澄度', collection: CLARITY_ITEMS },
  { label: '輝き', subLabel: '補助用語/メイン', collection: BRIGHTNESS_ITEMS_WHITE },
  { label: '色調', collection: APPEARANCE_COLORS_WHITE },
  { label: '濃淡', collection: INTENSITY_ITEMS_WHITE },
  { label: '粘性', collection: CONSISTENCY_ITEMS },
  { label: '外観の印象', subLabel: '外観の印象/成熟度', collection: APPEARANCE_IMPRESSIONS_WHITE }
]

export default APPEARANCE_ITEMS_WHITE
