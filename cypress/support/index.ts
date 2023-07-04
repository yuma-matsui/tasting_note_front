/* eslint-disable @typescript-eslint/no-namespace */

import { Appearance, Conclusion, Flavor, Taste } from '../../src/types'

declare global {
  namespace Cypress {
    interface Chainable {
      inputSettingForm: (color: '白' | '赤') => void
      stepToAppearanceForm: () => void
      checkAppearanceForm: (appearance: Appearance) => void
      stepToFlavorForm: () => void
      checkFlavorForm: (flavor: Flavor) => void
      stepToTasteForm: () => void
      checkTasteForm: (taste: Taste) => void
      stepToConclusionForm: () => void
      checkConclusionForm: (conclusion: Conclusion) => void
      stepToConfirmationTab: () => void
    }
  }
}

export {}
