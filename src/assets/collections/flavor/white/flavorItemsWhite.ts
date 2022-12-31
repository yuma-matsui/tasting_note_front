import FLAVOR_FIRST_IMPRESSION_LABELS_WHITE from './flavorFirstImpressionLabelsWhite'
import FLAVOR_FLOWER_LABELS_WHITE from './flavorFlowerLabelsWhite'
import FLAVOR_FRUIT_LABELS_WHITE from './flavorFruitLabelsWhite'
import FLAVOR_IMPRESSION_LABELS_WHITE from './flavorImpressionLabelsWhite'
import FLAVOR_SPICE_LABELS_WHITE from './flavorSpiceLabelsWhite'

const FLAVOR_ITEMS_WHITE = [
  {
    heading: '第一印象',
    name: 'flavorFirstImpression',
    subHeading: '強さ/性質',
    labels: FLAVOR_FIRST_IMPRESSION_LABELS_WHITE
  },
  {
    heading: '果実',
    name: 'flavorFruit',
    subHeading: '熟成度低→高',
    labels: FLAVOR_FRUIT_LABELS_WHITE
  },
  {
    heading: '花・植物',
    name: 'flavorFlower',
    subHeading: '花/植物/ドライ/菌類',
    labels: FLAVOR_FLOWER_LABELS_WHITE
  },
  {
    heading: '香辛料・芳香・化学物質',
    name: 'flavorSpice',
    subHeading: '香辛料/樽/動物/他',
    labels: FLAVOR_SPICE_LABELS_WHITE
  },
  {
    heading: '香りの印象',
    name: 'flavorImpression',
    subHeading: '熟成感/特性',
    labels: FLAVOR_IMPRESSION_LABELS_WHITE
  }
]

export default FLAVOR_ITEMS_WHITE
