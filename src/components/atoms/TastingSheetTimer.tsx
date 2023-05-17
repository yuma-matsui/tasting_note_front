import { FC, memo } from 'react'

import { useTastingSheetTimer } from '../../hooks'
import { TastingSheet } from '../../types'

const TastingSheetTimer: FC<{
  tastingSheet: TastingSheet
  isLastStep: boolean
}> = memo(({ tastingSheet, isLastStep }) => {
  const { timerClassName, styleForSecond, styleForMinute } = useTastingSheetTimer(tastingSheet)

  if (isLastStep) return null
  return (
    <p className="mb-4">
      残り時間：
      <span className="countdown text-lg leading-none">
        <span style={styleForMinute} className={timerClassName} />：
        <span style={styleForSecond} className={timerClassName} />
      </span>
    </p>
  )
})

export default TastingSheetTimer
