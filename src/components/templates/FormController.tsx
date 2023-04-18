import { FC, memo, useRef } from 'react'

import { useBeforeUnload, useOnClickOpenModal } from '../../hooks'
import { FormControllerProps } from '../../types'
import { FormControllerButton, PostTastingSheetButton } from '../atoms'

const FormController: FC<FormControllerProps> = memo(
  ({
    children,
    onClick,
    isFirstStep,
    isAppearanceStep,
    isLastStep,
    disabled,
    backButtonText,
    nextButtonText,
    tastingSheet
  }) => {
    useBeforeUnload()
    const submitRef = useRef<HTMLInputElement>(null)

    const { onClickOpenModal: onClickBackAndOpenModal } = useOnClickOpenModal({
      text: '記録の途中ですがよろしいですか？',
      rightButton: (
        <button type="button" onClick={() => window.location.reload()}>
          はい
        </button>
      )
    })

    return (
      <>
        {children}
        {!isFirstStep && !isAppearanceStep && (
          <FormControllerButton value={backButtonText} disabled={disabled} onClick={() => onClick('back', submitRef)} />
        )}
        {isAppearanceStep && (
          <button type="button" className="btn" onClick={onClickBackAndOpenModal}>
            {backButtonText}
          </button>
        )}
        {isLastStep ? (
          <PostTastingSheetButton tastingSheet={tastingSheet} />
        ) : (
          <FormControllerButton value={nextButtonText} disabled={disabled} onClick={() => onClick('next', submitRef)} />
        )}
        <input type="submit" hidden ref={submitRef} />
      </>
    )
  }
)

export default FormController
