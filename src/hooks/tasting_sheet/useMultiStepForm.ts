import { ReactElement, RefObject, useState } from 'react'

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

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
    if (type === 'back') return '<< 戻る'
    return '次へ >>'
  }

  const onClickPageControl = (type: 'back' | 'next', ref: RefObject<HTMLInputElement>) => {
    ref.current?.click()
    if (type === 'back') back()
    if (type === 'next') next()
  }

  return {
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    isFirstStep,
    isLastStep: currentStepIndex === steps.length - 1,
    isAppearanceStep,
    onClickPageControl,
    getButtonText
  }
}

export default useMultiStepForm
