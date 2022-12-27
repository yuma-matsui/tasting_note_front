import ConsistencyTuple from '../shared/consistencyTuple'
import AppearanceColorTupleWhite from './appearanceColorTupleWhite'
import AppearanceImpressionTupleWhite from './appearanceImpressionTupleWhite'
import BrightnessTupleWhite from './brightnessTupleWhite'
import ClarityTupleWhite from './clarityTupleWhite'
import IntensityTupleWhite from './intensityTupleWhite'

type AppearanceLabelsWhite =
  | ClarityTupleWhite
  | BrightnessTupleWhite
  | AppearanceColorTupleWhite
  | IntensityTupleWhite
  | ConsistencyTuple
  | AppearanceImpressionTupleWhite

export default AppearanceLabelsWhite
