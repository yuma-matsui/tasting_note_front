import COUNTRIES from '../shared/countries'
import VINTAGES from '../shared/vintages'
import GRAPES_WHITE from './grapesWhite'

const CONCLUSION_SELECT_OPTIONS_WHITE = [
  {
    label: '収穫年',
    name: 'vintage',
    options: VINTAGES
  },
  {
    label: '生産国',
    name: 'country',
    options: COUNTRIES
  },
  {
    label: '主なぶどう品種',
    name: 'grape',
    options: GRAPES_WHITE
  }
]

export default CONCLUSION_SELECT_OPTIONS_WHITE
