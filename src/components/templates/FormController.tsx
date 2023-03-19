import { FC, memo, useRef } from 'react'

import {
  useBeforeUnload,
  usePostTastingSheet,
  useResetTastingSheet,
  useAuthContext,
  useOnClickOpenModal
} from '../../hooks'
import { FormControllerProps } from '../../types'
import { FormControllerButton, GoToTopPageButton, SignInAndPostButton } from '../atoms'

const FormController: FC<FormControllerProps> = memo(
  ({ children, onClick, isFirstStep, isAppearanceStep, isLastStep, disabled, backButtonText, nextButtonText }) => {
    useBeforeUnload()
    useResetTastingSheet()

    const { currentUser } = useAuthContext()

    const { postTastingSheet } = usePostTastingSheet()
    const onClickPost = () => postTastingSheet()

    const submitRef = useRef<HTMLInputElement>(null)

    const { onClickOpenModal } = useOnClickOpenModal({
      text: '記録せずに終了しますか？',
      leftButton: <GoToTopPageButton text="OK" />,
      rightButton: <SignInAndPostButton />
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
