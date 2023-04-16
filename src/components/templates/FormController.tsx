import { FC, memo, useRef } from 'react'

import { useBeforeUnload, usePostTastingSheet, useAuthContext, useOnClickOpenModal } from '../../hooks'
import { FormControllerProps } from '../../types'
import { FormControllerButton, GoToAnotherPageButton, SignInAndPostButton } from '../atoms'

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
    const { currentUser } = useAuthContext()

    const { postTastingSheet } = usePostTastingSheet()
    const onClickPost = () => postTastingSheet(tastingSheet)

    const submitRef = useRef<HTMLInputElement>(null)

    const { onClickOpenModal } = useOnClickOpenModal({
      text: '記録せずに終了しますか？',
      leftButton: <GoToAnotherPageButton to="/" text="OK" />,
      rightButton: <SignInAndPostButton tastingSheet={tastingSheet} />
    })
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
          <button type="button" onClick={currentUser ? onClickPost : onClickOpenModal} className="btn">
            提出する
          </button>
        ) : (
          <FormControllerButton value={nextButtonText} disabled={disabled} onClick={() => onClick('next', submitRef)} />
        )}
        <input type="submit" hidden ref={submitRef} />
      </>
    )
  }
)

export default FormController
