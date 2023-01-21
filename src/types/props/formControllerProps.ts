import { ReactElement } from 'react'

type FormControllerProps = {
  children: ReactElement | undefined
  onClick: (type: 'back' | 'next', ref: React.RefObject<HTMLInputElement>) => void
  isFirstStep: boolean
  isLastStep: boolean
  isAppearanceStep: boolean
  isConclusionStep: boolean
  disabled: boolean
}

export default FormControllerProps
