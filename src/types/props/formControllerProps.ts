import { ReactElement } from 'react'

type FormControllerProps = {
  children: ReactElement | undefined
  back: () => void
  next: () => void
  isFirstStep: boolean
  isLastStep: boolean
  isAppearanceStep: boolean
  isConclusionStep: boolean
  disabled: boolean
}

export default FormControllerProps
