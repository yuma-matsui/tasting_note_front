import { AbstractFormItem, ConclusionName } from '../../../../types'
import EVALUATION_LABELS_RED from '../red/evaluationLabelsRed'
import OPTIMUM_TEMPERATURE_LABELS_RED from '../red/optimumTemperatureLabelsRed'
import EVALUATION_LABELS_WHITE from '../white/evaluationLabelsWhite'
import OPTIMUM_TEMPERATURE_LABELS_WHITE from '../white/optimumTemperatureLabelsWhite'
import DECANTAGE_LABELS from './decantageLabels'
import GLASS_LABELS from './glassLabels'

const CONCLUSION_FORM_ITEMS: AbstractFormItem<ConclusionName>[] = [
  {
    name: 'evaluation',
    heading: '評価',
    labels: {
      red: EVALUATION_LABELS_RED,
      white: EVALUATION_LABELS_WHITE
    },
    subHeading: '軽→重'
  },
  {
    name: 'optimumTemperature',
    heading: '適正温度',
    labels: {
      red: OPTIMUM_TEMPERATURE_LABELS_RED,
      white: OPTIMUM_TEMPERATURE_LABELS_WHITE
    }
  },
  {
    name: 'glass',
    heading: 'グラス',
    labels: GLASS_LABELS
  },
  {
    name: 'decantage',
    heading: 'デカンタージュ',
    labels: DECANTAGE_LABELS
  }
]

export default CONCLUSION_FORM_ITEMS
