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
    labels: {
      white: ACIDITY_LABELS_WHITE,
      red: ACIDITY_LABELS_RED
    }
  },
  {
    heading: 'タンニン分',
    name: 'astringent',
    subHeading: '弱→強',
    labels: ASTRINGENT_LABELS
  },
  {
    heading: '苦味',
    name: 'bitterness',
    labels: BITTERNESS_LABELS
  },
  {
    heading: 'バランス',
    name: 'balance',
    subHeading: '左上/右上/下',
    labels: {
      white: BALANCE_LABELS_WHITE,
      red: BALANCE_LABELS_RED
    }
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

export default TASTE_FORM_ITEMS
