import { AbstractFormItem, ConclusionName } from '../../../../types'
import GRAPES_RED from '../red/grapesRed'
import GRAPES_WHITE from '../white/grapesWhite'
import COUNTRIES from './countries'
import VINTAGES from './vintages'

const CONCLUSION_SELECT_OPTIONS: AbstractFormItem<ConclusionName>[] = [
  {
    name: 'vintage',
    heading: '収穫年',
    labels: VINTAGES
  },
  {
    name: 'country',
    heading: '生産国',
    labels: COUNTRIES
  },
  {
    name: 'grape',
    heading: '主なぶどう品種',
    labels: {
      red: GRAPES_RED,
      white: GRAPES_WHITE
    }
  }
]

export default CONCLUSION_SELECT_OPTIONS
