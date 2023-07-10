/* eslint-disable @typescript-eslint/no-namespace */

import { Appearance, Conclusion, Flavor, Taste } from '../../src/types'

declare global {
  namespace Cypress {
    interface Chainable {
      checkAppearanceForm: (appearance: Appearance) => void
      checkConclusionForm: (conclusion: Conclusion) => void
      checkFlavorForm: (flavor: Flavor) => void
      checkTasteForm: (taste: Taste) => void
      inputSettingForm: (color: '白' | '赤') => void
      stepToAppearanceForm: () => void
      stepToConclusionForm: () => void
      stepToConfirmationTab: () => void
      stepToFlavorForm: () => void
      stepToTasteForm: () => void
    }
  }
}

export {}
