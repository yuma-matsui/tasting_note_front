import { ReactElement } from 'react'

type FormControllerProps = {
  children: ReactElement | undefined
  onClick: (type: 'back' | 'next', ref: React.RefObject<HTMLInputElement>) => void
  isFirstStep: boolean
  isLastStep: boolean
  backButtonText: string
  nextButtonText: string
  disabled: boolean
}

export default FormControllerProps
