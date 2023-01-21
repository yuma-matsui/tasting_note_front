import { FC, memo, useRef } from 'react'
import { FormControllerProps } from '../../types'

import { FormControllerButton, ModalOpenButton } from '../atoms'
import { TastingSheetFormModalBox } from '../molecules'

const FormController: FC<FormControllerProps> = memo(
  ({ children, back, next, isFirstStep, isLastStep, isAppearanceStep, isConclusionStep, disabled }) => {
    const submitRef = useRef<HTMLInputElement>(null)

    const appearanceStepModalId = 'appearance-step-modal'
    const lastStepModalId = 'last-step-modal'

    const getButtonText = (type: 'next' | 'back') => {
      if (isFirstStep) return 'テイスティングを始める'
      if (isConclusionStep && type === 'next') return '回答確認'
      if (type === 'back') return '<< 戻る'
      return '次へ >>'
    }

    const onClick = (type: 'next' | 'back') => {
      submitRef.current?.click()
      if (type === 'back') back()
      if (type === 'next') next()
    }

    return (
      <>
        {children}
        {!isFirstStep &&
          (isAppearanceStep ? (
            <ModalOpenButton id={appearanceStepModalId} text="<< 戻る" />
          ) : (
            <FormControllerButton value={getButtonText('back')} disabled={disabled} onClick={() => onClick('back')} />
          ))}
        {!isLastStep ? (
          <FormControllerButton value={getButtonText('next')} disabled={disabled} onClick={() => onClick('next')} />
        ) : (
          <ModalOpenButton id={lastStepModalId} text="提出する" />
        )}
        <input type="submit" hidden ref={submitRef} />
        <TastingSheetFormModalBox id={appearanceStepModalId} isLastStep={isLastStep} />
        <TastingSheetFormModalBox id={lastStepModalId} isLastStep={isLastStep} />
      </>
    )
  }
)

export default FormController
