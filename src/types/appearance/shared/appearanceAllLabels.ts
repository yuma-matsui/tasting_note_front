import AppearanceColorRed from '../red/appearanceColorRed'
import AppearanceImpressionRed from '../red/appearanceImpressionRed'
import BrightnessRed from '../red/brightnessRed'
import ClarityRed from '../red/clarityRed'
import IntensityRed from '../red/intensityRed'
import AppearanceColorWhite from '../white/appearanceColorWhite'
import AppearanceImpressionWhite from '../white/appearanceImpressionWhite'
import BrightnessWhite from '../white/brightnessWhite'
import IntensityWhite from '../white/intensityWhite'
import Consistency from './consistency'

type AppearanceAllLabels =
  | ClarityRed
  | BrightnessWhite
  | BrightnessRed
  | AppearanceColorWhite
  | AppearanceColorRed
  | IntensityWhite
  | IntensityRed
  | Consistency
  | AppearanceImpressionWhite
  | AppearanceImpressionRed

export default AppearanceAllLabels
