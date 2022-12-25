import Clarity from '../shared/clarity'
import Consistency from '../shared/consistency'
import AppearanceColorWhite from './appearanceColorWhite'
import AppearanceImpressionWhite from './appearanceImpressionWhite'
import BrightnessWhite from './brightnessWhite'
import IntensityWhite from './intensityWhite'

type AppearanceCollectionWhite =
  | Clarity[]
  | BrightnessWhite[]
  | AppearanceColorWhite[]
  | IntensityWhite[]
  | Consistency[]
  | AppearanceImpressionWhite[]

export default AppearanceCollectionWhite
