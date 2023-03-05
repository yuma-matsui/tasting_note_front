import { FC, memo, useRef } from 'react'

import {
  useBeforeUnload,
  useBlockBrowserBack,
  usePostTastingSheet,
  useResetTastingSheet,
  useAuthContext,
  useOnClickOpenModal
} from '../../hooks'
import { FormControllerProps } from '../../types'
import { FormControllerButton, GoToTopPageButton, SignInAndPostButton } from '../atoms'

const FormController: FC<FormControllerProps> = memo(
  ({ children, onClick, isFirstStep, isLastStep, disabled, backButtonText, nextButtonText }) => {
    useBeforeUnload()
    useBlockBrowserBack()
    useResetTastingSheet()

    const { currentUser } = useAuthContext()
    const { postTastingSheet } = usePostTastingSheet()
    const onClickPost = () => postTastingSheet()
    const { onClickOpenModal } = useOnClickOpenModal({
      text: '記録せずに終了しますか？',
      content: (
        <>
          <GoToTopPageButton text="OK" />
          <SignInAndPostButton />
        </>
      )
    })

    const submitRef = useRef<HTMLInputElement>(null)

    return (
      <>
        {children}
        {!isFirstStep && (
          <FormControllerButton value={backButtonText} disabled={disabled} onClick={() => onClick('back', submitRef)} />
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
