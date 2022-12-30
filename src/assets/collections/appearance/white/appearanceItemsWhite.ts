import { AppearanceItem } from '../../../../types/tasting_sheet/appearance'
import CONSISTENCY_LABELS from '../shared/consistencyLabels'
import APPEARANCE_COLOR_LABELS_WHITE from './appearanceColorLabelsWhite'
import APPEARANCE_IMPRESSION_LABELS_WHITE from './appearanceImpressionLabelsWhite'
import BRIGHTNESS_LABELS_WHITE from './brightnessLabelsWhite'
import CLARITY_LABELS_WHITE from './clarityLabelsWhite'
import INTENSITY_LABELS_WHITE from './intensityLabelsWhite'

const APPEARANCE_ITEMS_WHITE: AppearanceItem[] = [
  { heading: '清澄度', name: 'clarity', labels: CLARITY_LABELS_WHITE },
  { heading: '輝き', name: 'brightness', labels: BRIGHTNESS_LABELS_WHITE },
  { heading: '色調', name: 'appearanceColor', subHeading: '補助用語/メイン', labels: APPEARANCE_COLOR_LABELS_WHITE },
  { heading: '濃淡', name: 'intensity', labels: INTENSITY_LABELS_WHITE },
  { heading: '粘性', name: 'consistency', labels: CONSISTENCY_LABELS },
  {
    heading: '外観の印象',
    name: 'appearanceImpression',
    subHeading: '若さ/成熟度',
    labels: APPEARANCE_IMPRESSION_LABELS_WHITE
  }
]

export default APPEARANCE_ITEMS_WHITE
