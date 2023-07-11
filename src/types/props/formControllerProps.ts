import { ReactElement } from 'react'

import TastingSheet from '../tasting_sheet/tastingSheet'

type FormControllerProps = {
  backButtonText: string
  children: ReactElement | undefined
  disabled: boolean
  isAppearanceStep: boolean
  isFirstStep: boolean
  isLastStep: boolean
  nextButtonText: string
  onClick: (type: 'back' | 'next', ref: React.RefObject<HTMLInputElement>) => void
  tastingSheet: TastingSheet
}

export default FormControllerProps
