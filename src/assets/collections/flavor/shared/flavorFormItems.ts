import { AbstractFormItem, FlavorName } from '../../../../types'
import FLAVOR_FIRST_IMPRESSION_LABELS_RED from '../red/flavorFirstImpressionLabelsRed'
import FLAVOR_FLOWER_LABELS_RED from '../red/flavorFlowerLabelsRed'
import FLAVOR_FRUIT_LABELS_RED from '../red/flavorFruitLabelsRed'
import FLAVOR_IMPRESSION_LABELS_RED from '../red/flavorImpressionLabelsRed'
import FLAVOR_SPICE_LABELS_RED from '../red/flavorSpiceLabelsRed'
import FLAVOR_FIRST_IMPRESSION_LABELS_WHITE from '../white/flavorFirstImpressionLabelsWhite'
import FLAVOR_FLOWER_LABELS_WHITE from '../white/flavorFlowerLabelsWhite'
import FLAVOR_FRUIT_LABELS_WHITE from '../white/flavorFruitLabelsWhite'
import FLAVOR_IMPRESSION_LABELS_WHITE from '../white/flavorImpressionLabelsWhite'
import FLAVOR_SPICE_LABELS_WHITE from '../white/flavorSpiceLabelsWhite'

const FLAVOR_FORM_ITEMS: AbstractFormItem<FlavorName>[] = [
  {
    name: 'flavorFirstImpressions',
    heading: '第一印象',
    labels: {
      red: FLAVOR_FIRST_IMPRESSION_LABELS_RED,
      white: FLAVOR_FIRST_IMPRESSION_LABELS_WHITE
    },
    subHeading: '強さ/性質'
  },
  {
    name: 'flavorFruits',
    heading: '果実',
    labels: {
      red: FLAVOR_FRUIT_LABELS_RED,
      white: FLAVOR_FRUIT_LABELS_WHITE
    },
    subHeading: '熟成度低→高'
  },
  {
    name: 'flavorFlowers',
    heading: '花・植物',
    labels: {
      red: FLAVOR_FLOWER_LABELS_RED,
      white: FLAVOR_FLOWER_LABELS_WHITE
    },
    subHeading: '花/植物/ドライ/菌類'
  },
  {
    name: 'flavorSpices',
    heading: '香辛料・芳香・化学物質',
    labels: {
      red: FLAVOR_SPICE_LABELS_RED,
      white: FLAVOR_SPICE_LABELS_WHITE
    },
    subHeading: '香辛料/樽/動物/他'
  },
  {
    name: 'flavorImpressions',
    heading: '香りの印象',
    labels: {
      red: FLAVOR_IMPRESSION_LABELS_RED,
      white: FLAVOR_IMPRESSION_LABELS_WHITE
    },
    subHeading: '熟成感/特性'
  }
]

export default FLAVOR_FORM_ITEMS
