import { FC, memo, useRef } from 'react'

import { useAuthContext, useBeforeUnload } from '../../hooks'
import { FormControllerProps } from '../../types'
import {
  ConfirmationAndBackButton,
  FinishTastingButton,
  FormControllerButton,
  PostTastingSheetButton,
  SaveSheetButton
} from '../atoms'
import useGetButtonsFlexType from '../../hooks/useGetButtonsFlexType'

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
    const { currentUser } = useAuthContext()
    const { getButtonsFlexType } = useGetButtonsFlexType()

    return (
      <>
        {children}
        {isLastStep && !currentUser && <FinishTastingButton />}
        <div className={`w-full flex ${getButtonsFlexType(isFirstStep)}`}>
          {!isFirstStep && !isAppearanceStep && (
            <FormControllerButton
              value={backButtonText}
              disabled={disabled}
              onClick={() => onClick('back', submitRef)}
              tastingSheet={tastingSheet}
            />
          )}
          {isAppearanceStep && <ConfirmationAndBackButton tastingSheet={tastingSheet} />}
          {isLastStep && currentUser && <PostTastingSheetButton tastingSheet={tastingSheet} />}
          {isLastStep && !currentUser && <SaveSheetButton tastingSheet={tastingSheet} />}
          {!isLastStep && (
            <FormControllerButton
              value={nextButtonText}
              disabled={disabled}
              onClick={() => onClick('next', submitRef)}
              tastingSheet={tastingSheet}
            />
          )}
          <input type="submit" hidden ref={submitRef} />
        </div>
      </>
    )
  }
)

export default FormController
