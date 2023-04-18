import { FC, memo, useRef } from 'react'

import { useBeforeUnload } from '../../hooks'
import { FormControllerProps } from '../../types'
import { ConfirmationAndBackButton, FormControllerButton, PostTastingSheetButton } from '../atoms'

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

    return (
      <>
        {children}
        {!isFirstStep && !isAppearanceStep && (
          <FormControllerButton value={backButtonText} disabled={disabled} onClick={() => onClick('back', submitRef)} />
        )}
        {isAppearanceStep && <ConfirmationAndBackButton tastingSheet={tastingSheet} />}
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
