import COUNTRIES from '../shared/countries'
import VINTAGES from '../shared/vintages'
import GRAPES_RED from './grapesRed'

const CONCLUSION_SELECT_OPTIONS_RED = [
  {
    heading: '収穫年',
    name: 'vintage',
    options: VINTAGES
  },
  {
    heading: '生産国',
    name: 'country',
    options: COUNTRIES
  },
  {
    heading: '主なぶどう品種',
    name: 'grape',
    options: GRAPES_RED
  }
]

export default CONCLUSION_SELECT_OPTIONS_RED
