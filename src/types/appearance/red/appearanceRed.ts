import Consistency from '../shared/consistency'
import AppearanceColorRed from './appearanceColorRed'
import AppearanceImpressionRed from './appearanceImpressionRed'
import BrightnessRed from './brightnessRed'
import ClarityRed from './clarityRed'
import IntensityRed from './intensityRed'

type AppearanceRed = {
  clarity: ClarityRed
  brightness: BrightnessRed
  appearanceColor: AppearanceColorRed[]
  intensity: IntensityRed
  consistency: Consistency
  appearanceImpression: AppearanceImpressionRed[]
}

export default AppearanceRed
