import { AppearanceItemWhite } from '../../../../types'
import CONSISTENCY_ITEMS from '../shared/consistencyItems'
import APPEARANCE_COLORS_WHITE from './appearanceColorsWhite'
import APPEARANCE_IMPRESSIONS_WHITE from './appearanceImpressionsWhite'
import BRIGHTNESS_ITEMS_WHITE from './brightnessItemsWhite'
import CLARITY_ITEMS_WHITE from './clarityItemsWhite'
import INTENSITY_ITEMS_WHITE from './intensityItemsWhite'

const APPEARANCE_ITEMS_WHITE: AppearanceItemWhite[] = [
  { label: '清澄度', name: 'clarity', collection: CLARITY_ITEMS_WHITE },
  { label: '輝き', name: 'brightness', collection: BRIGHTNESS_ITEMS_WHITE },
  { label: '色調', name: 'appearanceColor', subLabel: '補助用語/メイン', collection: APPEARANCE_COLORS_WHITE },
  { label: '濃淡', name: 'intensity', collection: INTENSITY_ITEMS_WHITE },
  { label: '粘性', name: 'consistency', collection: CONSISTENCY_ITEMS },
  {
    label: '外観の印象',
    name: 'appearanceImpression',
    subLabel: '外観の印象/成熟度',
    collection: APPEARANCE_IMPRESSIONS_WHITE
  }
]

export default APPEARANCE_ITEMS_WHITE
