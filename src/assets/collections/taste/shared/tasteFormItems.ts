import { AbstractFormItem, TasteName } from '../../../../types'
import ACIDITY_LABELS_RED from '../red/acidityLabelsRed'
import ASTRINGENT_LABELS from '../red/astringentLabels'
import BALANCE_LABELS_RED from '../red/balanceLabelsRed'
import ACIDITY_LABELS_WHITE from '../white/acidityLabelsWhite'
import BALANCE_LABELS_WHITE from '../white/balanceLabelsWhite'
import BITTERNESS_LABELS from '../white/bitternessLabels'
import AFTER_TASTE_LABELS from './afterTasteLabels'
import ALCOHOL_LABELS from './alcoholLabels'
import ATTACK_LABELS from './attackLabels'
import SWEETNESS_LABELS from './sweetnessLabels'

const TASTE_FORM_ITEMS: AbstractFormItem<TasteName>[] = [
  {
    name: 'attack',
    heading: 'アタック',
    labels: ATTACK_LABELS
  },
  {
    name: 'sweetness',
    heading: '甘み',
    labels: SWEETNESS_LABELS,
    subHeading: '(アルコールのボリューム感も含む)'
  },
  {
    name: 'acidity',
    heading: '酸味',
    labels: {
      red: ACIDITY_LABELS_RED,
      white: ACIDITY_LABELS_WHITE
    },
    subHeading: '弱→強'
  },
  {
    name: 'astringent',
    heading: 'タンニン分',
    labels: ASTRINGENT_LABELS,
    subHeading: '弱→強'
  },
  {
    name: 'bitterness',
    heading: '苦味',
    labels: BITTERNESS_LABELS
  },
  {
    name: 'balance',
    heading: 'バランス',
    labels: {
      red: BALANCE_LABELS_RED,
      white: BALANCE_LABELS_WHITE
    },
    subHeading: '左上/右上/下'
  },
  {
    name: 'alcohol',
    heading: 'アルコール',
    labels: ALCOHOL_LABELS
  },
  {
    name: 'afterTaste',
    heading: '余韻',
    labels: AFTER_TASTE_LABELS
  }
]

export default TASTE_FORM_ITEMS
