import { ReactElement, useState } from 'react'

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

  return {
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    back
  }
}

export default useMultiStepForm
