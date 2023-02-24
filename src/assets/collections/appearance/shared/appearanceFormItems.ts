import { AbstractFormItem, AppearanceName } from '../../../../types'
import APPEARANCE_COLOR_LABELS_RED from '../red/appearanceColorLabelsRed'
import APPEARANCE_IMPRESSION_LABELS_RED from '../red/appearanceImpressionLabelsRed'
import BRIGHTNESS_LABELS_RED from '../red/brightnessLabelsRed'
import CLARITY_LABELS_RED from '../red/clarityLabelsRed'
import INTENSITY_LABELS_RED from '../red/intensityLabelsRed'
import APPEARANCE_COLOR_LABELS_WHITE from '../white/appearanceColorLabelsWhite'
import APPEARANCE_IMPRESSION_LABELS_WHITE from '../white/appearanceImpressionLabelsWhite'
import BRIGHTNESS_LABELS_WHITE from '../white/brightnessLabelsWhite'
import CLARITY_LABELS_WHITE from '../white/clarityLabelsWhite'
import INTENSITY_LABELS_WHITE from '../white/intensityLabelsWhite'
import CONSISTENCY_LABELS from './consistencyLabels'

const APPEARANCE_FORM_ITEMS: AbstractFormItem<AppearanceName>[] = [
  {
    heading: '清澄度',
    name: 'clarity',
    labels: {
      white: CLARITY_LABELS_WHITE,
      red: CLARITY_LABELS_RED
    }
  },
  {
    heading: '輝き',
    name: 'brightness',
    labels: {
      white: BRIGHTNESS_LABELS_WHITE,
      red: BRIGHTNESS_LABELS_RED
    }
  },
  {
    heading: '色調',
    name: 'appearanceColors',
    subHeading: '補助用語/メイン',
    labels: {
      white: APPEARANCE_COLOR_LABELS_WHITE,
      red: APPEARANCE_COLOR_LABELS_RED
    }
  },
  {
    heading: '濃淡',
    name: 'intensity',
    labels: {
      white: INTENSITY_LABELS_WHITE,
      red: INTENSITY_LABELS_RED
    }
  },
  {
    heading: '粘性',
    name: 'consistency',
    labels: CONSISTENCY_LABELS
  },
  {
    heading: '外観の印象',
    name: 'appearanceImpressions',
    subHeading: '若さ/成熟度',
    labels: {
      white: APPEARANCE_IMPRESSION_LABELS_WHITE,
      red: APPEARANCE_IMPRESSION_LABELS_RED
    }
  }
]

export default APPEARANCE_FORM_ITEMS
