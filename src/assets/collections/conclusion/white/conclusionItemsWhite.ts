import DECANTAGE_LABELS from '../shared/decantageLabels'
import GLASS_LABELS from '../shared/glassLabels'
import EVALUATION_LABELS_WHITE from './evaluationLabelsWhite'
import OPTIMUM_TEMPERATURE_LABELS_WHITE from './optimumTemperatureLabelsWhite'

const CONCLUSION_ITEMS_WHITE = [
  {
    heading: '評価',
    name: 'evaluation',
    subHeading: '軽→重',
    labels: EVALUATION_LABELS_WHITE
  },
  {
    heading: '適正温度',
    name: 'optimumTemperature',
    labels: OPTIMUM_TEMPERATURE_LABELS_WHITE
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

export default CONCLUSION_ITEMS_WHITE
