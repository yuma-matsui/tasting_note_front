import ConsistencyTuple from '../shared/consistencyTuple'
import AppearanceColorTupleRed from './appearanceColorTupleRed'
import AppearanceImpressionTupleRed from './appearanceImpressionTupleRed'
import BrightnessTupleRed from './brightnessTupleRed'
import ClarityTupleRed from './clarityTupleRed'
import IntensityTupleRed from './intensityTupleRed'

type AppearanceLabelsRed =
  | ClarityTupleRed
  | BrightnessTupleRed
  | AppearanceColorTupleRed
  | IntensityTupleRed
  | ConsistencyTuple
  | AppearanceImpressionTupleRed

export default AppearanceLabelsRed
