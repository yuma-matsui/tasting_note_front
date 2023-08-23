import { FC, memo, useRef } from 'react'

import { useBeforeUnload, useCurrentUserContext, useGetButtonFlexType } from '../../hooks'
import { FormControllerProps } from '../../types'
import { ConfirmationAndBackButton, FinishTastingButton, FormControllerButton, PostTastingSheetButton } from '../atoms'

const FormController: FC<FormControllerProps> = memo(
  ({
    backButtonText,
    children,
    disabled,
    isAppearanceStep,
    isFirstStep,
    isLastStep,
    nextButtonText,
    onClick,
    tastingSheet
  }) => {
    useBeforeUnload()
    const submitRef = useRef<HTMLInputElement>(null)
    const currentUser = useCurrentUserContext()
    const { getButtonFlexType } = useGetButtonFlexType()

    return (
      <>
        {children}
        <div className={`w-full flex ${getButtonFlexType(isFirstStep)}`}>
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
          {isLastStep && !currentUser && <FinishTastingButton color={tastingSheet.color} />}
          {/* {isLastStep && !currentUser && <SaveSheetButton tastingSheet={tastingSheet} />} */}
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
