import Consistency from '../shared/consistency'
import AppearanceColorRed from './appearanceColorRed'
import AppearanceImpressionRed from './appearanceImpressionRed'
import BrightnessRed from './brightnessRed'
import ClarityRed from './clarityRed'
import IntensityRed from './intensityRed'

type AppearanceCollectionRed =
  | ClarityRed[]
  | BrightnessRed[]
  | AppearanceColorRed[]
  | IntensityRed[]
  | Consistency[]
  | AppearanceImpressionRed[]

export default AppearanceCollectionRed
