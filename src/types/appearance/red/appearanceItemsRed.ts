import Consistency from '../shared/consistency'
import AppearanceColorRed from './appearanceColorRed'
import AppearanceImpressionRed from './appearanceImpressionRed'
import BrightnessRed from './brightnessRed'
import ClarityRed from './clarityRed'
import IntensityRed from './intensityRed'

type AppearanceItemsRed = [
  { label: '清澄度'; collection: ClarityRed[] },
  { label: '輝き'; collection: BrightnessRed[] },
  { label: '色調'; collection: AppearanceColorRed[] },
  { label: '濃淡'; collection: IntensityRed[] },
  { label: '粘性'; collection: Consistency[] },
  { label: '外観の印象'; collection: AppearanceImpressionRed[] }
]

export default AppearanceItemsRed
