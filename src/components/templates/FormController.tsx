import { FC, memo, useRef } from 'react'

import { useBeforeUnload } from '../../hooks'
import { FormControllerProps } from '../../types'
import { ConfirmationAndBackButton, FormControllerButton, PostTastingSheetButton } from '../atoms'
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
    const { getButtonsFlexType } = useGetButtonsFlexType()

    return (
      <>
        {children}
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
          {isLastStep ? (
            <PostTastingSheetButton tastingSheet={tastingSheet} />
          ) : (
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
