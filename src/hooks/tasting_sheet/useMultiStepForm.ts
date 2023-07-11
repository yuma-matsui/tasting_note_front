import { ReactElement, RefObject, useEffect, useState } from 'react'

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  useEffect(() => {
    window.scroll(0, 0)
  }, [currentStepIndex])

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

  const isFirstStep = currentStepIndex === 0
  const isAppearanceStep = currentStepIndex === 1
  const isConclusionStep = currentStepIndex === steps.length - 2

  const getButtonText = (type: 'next' | 'back') => {
    if (isFirstStep) return 'テイスティングをはじめる'
    if (isConclusionStep && type === 'next') return '回答確認'
    if (type === 'back') return '戻る'
    return '次へ'
  }

  const onClickPageControl = (type: 'back' | 'next', ref: RefObject<HTMLInputElement>) => {
    ref.current?.click()
    if (type === 'back') back()
    if (type === 'next') next()
  }

  return {
    currentStepIndex,
    getButtonText,
    isAppearanceStep,
    isFirstStep,
    isLastStep: currentStepIndex === steps.length - 1,
    onClickPageControl,
    step: steps[currentStepIndex],
    steps
  }
}

export default useMultiStepForm
