import Clarity from '../shared/clarity'
import Consistency from '../shared/consistency'
import AppearanceColorWhite from './appearanceColorWhite'
import AppearanceImpressionWhite from './appearanceImpressionWhite'
import BrightnessWhite from './brightnessWhite'
import IntensityWhite from './intensityWhite'

type AppearanceWhite = {
  clarity: Clarity
  brightness: BrightnessWhite
  appearanceColor: AppearanceColorWhite[]
  intensity: IntensityWhite
  consistency: Consistency
  appearanceImpression: AppearanceImpressionWhite[]
}

export default AppearanceWhite
