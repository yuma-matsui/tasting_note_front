import { AbstractFormItem, ConclusionName } from '../../../../types'
import EVALUATION_LABELS_RED from '../red/evaluationLabelsRed'
import OPTIMUM_TEMPERATURE_LABELS_RED from '../red/optimumTemperatureLabelsRed'
import EVALUATION_LABELS_WHITE from '../white/evaluationLabelsWhite'
import OPTIMUM_TEMPERATURE_LABELS_WHITE from '../white/optimumTemperatureLabelsWhite'
import DECANTAGE_LABELS from './decantageLabels'
import GLASS_LABELS from './glassLabels'

const CONCLUSION_FORM_ITEMS: AbstractFormItem<ConclusionName>[] = [
  {
    heading: '評価',
    name: 'evaluation',
    subHeading: '軽→重',
    labels: {
      white: EVALUATION_LABELS_WHITE,
      red: EVALUATION_LABELS_RED
    }
  },
  {
    heading: '適正温度',
    name: 'optimumTemperature',
    labels: {
      white: OPTIMUM_TEMPERATURE_LABELS_WHITE,
      red: OPTIMUM_TEMPERATURE_LABELS_RED
    }
  },
  {
    heading: 'グラス',
    name: 'glass',
    labels: GLASS_LABELS
  },
  {
    heading: 'デカンタージュ',
    name: 'decantage',
    labels: DECANTAGE_LABELS
  }
]

export default CONCLUSION_FORM_ITEMS
