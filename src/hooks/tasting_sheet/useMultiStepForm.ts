import { ReactElement, RefObject, useState } from 'react'

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

  const next = () => {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index
      return index + 1
    })
  }

  const back = () => {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index
      return index - 1
    })
  }

  const isAppearanceStep = currentStepIndex === 1

  const onClickPageControl = (type: 'back' | 'next', ref: RefObject<HTMLInputElement>) => {
    if (type === 'back' && isAppearanceStep) {
      window.location.reload()
      return
    }

    ref.current?.click()
    if (type === 'back') back()
    if (type === 'next') next()
  }

  return {
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    isAppearanceStep,
    isConclusionStep: currentStepIndex === steps.length - 2,
    onClickPageControl
  }
}

export default useMultiStepForm
