import AFTER_TASTE_LABELS from '../shared/afterTasteLabels'
import ALCOHOL_LABELS from '../shared/alcoholLabels'
import ATTACK_LABELS from '../shared/attackLabels'
import SWEETNESS_LABELS from '../shared/sweetnessLabels'
import ACIDITY_LABELS_WHITE from './acidityLabelsWhite'
import BALANCE_LABELS_WHITE from './balanceLabelsWhite'
import BITTERNESS_LABELS from './bitternessLabels'

const TASTE_ITEMS_WHITE = [
  {
    heading: 'アタック',
    name: 'attack',
    labels: ATTACK_LABELS
  },
  {
    heading: '甘み',
    name: 'sweetness',
    subHeading: '(アルコールのボリューム感も含む)',
    labels: SWEETNESS_LABELS
  },
  {
    heading: '酸味',
    name: 'acidity',
    subHeading: '弱→強',
    labels: ACIDITY_LABELS_WHITE
  },
  {
    heading: '苦味',
    name: 'bitterness',
    labels: BITTERNESS_LABELS
  },
  {
    heading: 'バランス',
    name: 'balance',
    subHeading: '左下/左上/右上/右下',
    labels: BALANCE_LABELS_WHITE
  },
  {
    heading: 'アルコール',
    name: 'alcohol',
    labels: ALCOHOL_LABELS
  },
  {
    heading: '余韻',
    name: 'afterTaste',
    labels: AFTER_TASTE_LABELS
  }
]

export default TASTE_ITEMS_WHITE
