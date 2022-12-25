import { AppearanceImpressionWhite } from '../../../../types'
import APPEARANCE_IMPRESSIONS_MATURITY_WHITE from './appearanceImpressionsMaturityWhite'
import APPEARANCE_IMPRESSIONS_YOUTH_WHITE from './appearanceImpressionsYouthWhite'

const APPEARANCE_IMPRESSIONS_WHITE: AppearanceImpressionWhite[] = [
  ...APPEARANCE_IMPRESSIONS_YOUTH_WHITE,
  ...APPEARANCE_IMPRESSIONS_MATURITY_WHITE
]

export default APPEARANCE_IMPRESSIONS_WHITE
