import Clarity from '../shared/clarity'
import Consistency from '../shared/consistency'
import AppearanceColorWhite from './appearanceColorWhite'
import AppearanceImpressionWhite from './appearanceImpressionWhite'
import BrightnessWhite from './brightnessWhite'
import IntensityWhite from './intensityWhite'

type AppearanceItemsWhite = [
  { label: '清澄度'; collection: Clarity[] },
  { label: '輝き'; collection: BrightnessWhite[] },
  { label: '色調'; collection: AppearanceColorWhite[] },
  { label: '濃淡'; collection: IntensityWhite[] },
  { label: '粘性'; collection: Consistency[] },
  { label: '外観の印象'; collection: AppearanceImpressionWhite[] }
]

export default AppearanceItemsWhite
