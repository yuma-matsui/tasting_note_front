import { AppearanceItem } from '../../../../types'
import CONSISTENCY_LABELS from '../shared/consistencyLabels'
import APPEARANCE_COLOR_LABELS_RED from './appearanceColorLabelsRed'
import APPEARANCE_IMPRESSION_LABELS_RED from './appearanceImpressionLabelsRed'
import BRIGHTNESS_LABELS_RED from './brightnessLabelsRed'
import CLARITY_LABELS_RED from './clarityLabelsRed'
import INTENSITY_LABELS_RED from './intensityLabelsRed'

const APPEARANCE_ITEMS_RED: AppearanceItem[] = [
  { heading: '清澄度', name: 'clarity', labels: CLARITY_LABELS_RED },
  { heading: '輝き', name: 'brightness', labels: BRIGHTNESS_LABELS_RED },
  { heading: '色調', name: 'appearanceColor', subHeading: '補助用語/メイン', labels: APPEARANCE_COLOR_LABELS_RED },
  { heading: '濃淡', name: 'intensity', labels: INTENSITY_LABELS_RED },
  { heading: '粘性', name: 'consistency', labels: CONSISTENCY_LABELS },
  {
    heading: '外観の印象',
    name: 'appearanceImpression',
    subHeading: '若さ/成熟度',
    labels: APPEARANCE_IMPRESSION_LABELS_RED
  }
]

export default APPEARANCE_ITEMS_RED
