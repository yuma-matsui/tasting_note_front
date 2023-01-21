import { FC, memo, ReactElement, useRef } from 'react'

type TastingSheetFormStepButtonsProps = {
  children: ReactElement | undefined
  back: () => void
  next: () => void
  isFirstStep: boolean
  isLastStep: boolean
  disabled: boolean
}

const TastingSheetStepButtons: FC<TastingSheetFormStepButtonsProps> = memo(
  ({ children, back, next, isFirstStep, isLastStep, disabled }) => {
    const submitRef = useRef<HTMLInputElement>(null)
    const onClick = (type: 'next' | 'back') => {
      submitRef.current?.click()
      if (type === 'back') back()
      if (type === 'next') next()
    }

    return (
      <>
        {children}
        {!isFirstStep && (
          <input type="button" value="前へ" className="btn" disabled={disabled} onClick={() => onClick('back')} />
        )}
        {!isLastStep && (
          <input type="button" value="次へ" className="btn" disabled={disabled} onClick={() => onClick('next')} />
        )}
        <input type="submit" hidden ref={submitRef} />
      </>
    )
  }
)

export default TastingSheetStepButtons
