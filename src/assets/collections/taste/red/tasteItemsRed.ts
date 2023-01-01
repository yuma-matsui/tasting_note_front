import AFTER_TASTE_LABELS from '../shared/afterTasteLabels'
import ALCOHOL_LABELS from '../shared/alcoholLabels'
import ATTACK_LABELS from '../shared/attackLabels'
import SWEETNESS_LABELS from '../shared/sweetnessLabels'
import ACIDITY_LABELS_RED from './acidityLabelsRed'
import ASTRINGENT_LABELS from './astringentLabels'
import BALANCE_LABELS_RED from './balanceLabelsRed'

const TASTE_ITEMS_RED = [
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
    labels: ACIDITY_LABELS_RED
  },
  {
    heading: 'タンニン分',
    name: 'astringent',
    subHeading: '弱→強',
    labels: ASTRINGENT_LABELS
  },
  {
    heading: 'バランス',
    name: 'balance',
    subHeading: '左上/右上/下',
    labels: BALANCE_LABELS_RED
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

export default TASTE_ITEMS_RED
