import { FC, memo, useRef } from 'react'

import { useBeforeUnload } from '../../hooks'
import { FormControllerProps } from '../../types'
import { FormControllerButton, ModalOpenButton } from '../atoms'
import { TastingSheetFormModalBox } from '../molecules'

const FormController: FC<FormControllerProps> = memo(
  ({ children, onClick, isFirstStep, isLastStep, isConclusionStep, disabled }) => {
    useBeforeUnload()

    const submitRef = useRef<HTMLInputElement>(null)
    const lastStepModalId = 'last-step-modal'

    const getButtonText = (type: 'next' | 'back') => {
      if (isFirstStep) return 'テイスティングを始める'
      if (isConclusionStep && type === 'next') return '回答確認'
      if (type === 'back') return '<< 戻る'
      return '次へ >>'
    }

    return (
      <>
        {children}
        {!isFirstStep && (
          <FormControllerButton
            value={getButtonText('back')}
            disabled={disabled}
            onClick={() => onClick('back', submitRef)}
          />
        )}
        {!isLastStep ? (
          <FormControllerButton
            value={getButtonText('next')}
            disabled={disabled}
            onClick={() => onClick('next', submitRef)}
          />
        ) : (
          <ModalOpenButton id={lastStepModalId} text="提出する" />
        )}
        <input type="submit" hidden ref={submitRef} />
        <TastingSheetFormModalBox id={lastStepModalId} />
      </>
    )
  }
)

export default FormController
