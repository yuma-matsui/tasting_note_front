import { AppearanceImpressionRed } from '../../../../types'
import APPEARANCE_IMPRESSIONS_MATURITY_RED from './appearanceImpressionsMaturityRed'
import APPEARANCE_IMPRESSIONS_YOUTH_RED from './appearanceImpressionsYouthRed'

const APPEARANCE_IMPRESSIONS_RED: AppearanceImpressionRed[] = [
  ...APPEARANCE_IMPRESSIONS_YOUTH_RED,
  ...APPEARANCE_IMPRESSIONS_MATURITY_RED
]

export default APPEARANCE_IMPRESSIONS_RED
