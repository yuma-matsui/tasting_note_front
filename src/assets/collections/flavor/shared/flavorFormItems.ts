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
    heading: '第一印象',
    name: 'flavorFirstImpressions',
    subHeading: '強さ/性質',
    labels: {
      white: FLAVOR_FIRST_IMPRESSION_LABELS_WHITE,
      red: FLAVOR_FIRST_IMPRESSION_LABELS_RED
    }
  },
  {
    heading: '果実',
    name: 'flavorFruits',
    subHeading: '熟成度低→高',
    labels: {
      white: FLAVOR_FRUIT_LABELS_WHITE,
      red: FLAVOR_FRUIT_LABELS_RED
    }
  },
  {
    heading: '花・植物',
    name: 'flavorFlowers',
    subHeading: '花/植物/ドライ/菌類',
    labels: {
      white: FLAVOR_FLOWER_LABELS_WHITE,
      red: FLAVOR_FLOWER_LABELS_RED
    }
  },
  {
    heading: '香辛料・芳香・化学物質',
    name: 'flavorSpices',
    subHeading: '香辛料/樽/動物/他',
    labels: {
      white: FLAVOR_SPICE_LABELS_WHITE,
      red: FLAVOR_SPICE_LABELS_RED
    }
  },
  {
    heading: '香りの印象',
    name: 'flavorImpressions',
    subHeading: '熟成感/特性',
    labels: {
      white: FLAVOR_IMPRESSION_LABELS_WHITE,
      red: FLAVOR_IMPRESSION_LABELS_RED
    }
  }
]

export default FLAVOR_FORM_ITEMS
