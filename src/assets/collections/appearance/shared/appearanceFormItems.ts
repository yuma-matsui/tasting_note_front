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
    name: 'clarity',
    heading: '清澄度',
    labels: {
      red: CLARITY_LABELS_RED,
      white: CLARITY_LABELS_WHITE
    }
  },
  {
    name: 'brightness',
    heading: '輝き',
    labels: {
      red: BRIGHTNESS_LABELS_RED,
      white: BRIGHTNESS_LABELS_WHITE
    }
  },
  {
    name: 'appearanceColors',
    heading: '色調',
    labels: {
      red: APPEARANCE_COLOR_LABELS_RED,
      white: APPEARANCE_COLOR_LABELS_WHITE
    },
    subHeading: '補助用語/メイン'
  },
  {
    name: 'intensity',
    heading: '濃淡',
    labels: {
      red: INTENSITY_LABELS_RED,
      white: INTENSITY_LABELS_WHITE
    }
  },
  {
    name: 'consistency',
    heading: '粘性',
    labels: CONSISTENCY_LABELS
  },
  {
    name: 'appearanceImpressions',
    heading: '外観の印象',
    labels: {
      red: APPEARANCE_IMPRESSION_LABELS_RED,
      white: APPEARANCE_IMPRESSION_LABELS_WHITE
    },
    subHeading: '若さ/成熟度'
  }
]

export default APPEARANCE_FORM_ITEMS
