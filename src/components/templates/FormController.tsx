import { FC, memo, useRef } from 'react'

import {
  useBeforeUnload,
  useBlockBrowserBack,
  usePostTastingSheet,
  useResetTastingSheet,
  useAuthContext
} from '../../hooks'
import { FormControllerProps } from '../../types'
import { FormControllerButton, ModalOpenButton } from '../atoms'
import { TastingSheetFormModalBox } from '../molecules'

const FormController: FC<FormControllerProps> = memo(
  ({ children, onClick, isFirstStep, isLastStep, disabled, backButtonText, nextButtonText }) => {
    useBeforeUnload()
    useBlockBrowserBack()
    useResetTastingSheet()

    const { currentUser } = useAuthContext()
    const { postTastingSheet } = usePostTastingSheet()

    const submitRef = useRef<HTMLInputElement>(null)
    const lastStepModalId = 'last-step-modal'

    return (
      <>
        {children}
        {!isFirstStep && (
          <FormControllerButton value={backButtonText} disabled={disabled} onClick={() => onClick('back', submitRef)} />
        )}
        {!isLastStep && (
          <FormControllerButton value={nextButtonText} disabled={disabled} onClick={() => onClick('next', submitRef)} />
        )}
        {isLastStep &&
          (currentUser === null ? (
            <ModalOpenButton id={lastStepModalId} text="提出する" />
          ) : (
            <button type="button" onClick={postTastingSheet} className="btn">
              提出する
            </button>
          ))}
        <input type="submit" hidden ref={submitRef} />
        <TastingSheetFormModalBox id={lastStepModalId} />
      </>
    )
  }
)

export default FormController
