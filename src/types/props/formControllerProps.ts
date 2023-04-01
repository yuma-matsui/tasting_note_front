import { ReactElement } from 'react'

import TastingSheet from '../tasting_sheet/tastingSheet'

type FormControllerProps = {
  children: ReactElement | undefined
  onClick: (type: 'back' | 'next', ref: React.RefObject<HTMLInputElement>) => void
  isFirstStep: boolean
  isLastStep: boolean
  isAppearanceStep: boolean
  backButtonText: string
  nextButtonText: string
  disabled: boolean
  tastingSheet: TastingSheet
}

export default FormControllerProps
