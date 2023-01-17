import { AbstractFormItem, ConclusionName } from '../../../../types'
import GRAPES_RED from '../red/grapesRed'
import GRAPES_WHITE from '../white/grapesWhite'
import COUNTRIES from './countries'
import VINTAGES from './vintages'

const CONCLUSION_SELECT_OPTIONS: AbstractFormItem<ConclusionName>[] = [
  {
    heading: '収穫年',
    name: 'vintage',
    labels: VINTAGES
  },
  {
    heading: '生産国',
    name: 'country',
    labels: COUNTRIES
  },
  {
    heading: '主なぶどう品種',
    name: 'grape',
    labels: {
      white: GRAPES_WHITE,
      red: GRAPES_RED
    }
  }
]

export default CONCLUSION_SELECT_OPTIONS
