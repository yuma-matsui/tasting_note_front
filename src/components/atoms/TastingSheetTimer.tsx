import { FC, memo } from 'react'

import { useTastingSheetTimer } from '../../hooks'
import { TastingSheet } from '../../types'

const TastingSheetTimer: FC<{
  tastingSheet: TastingSheet
  isLastStep: boolean
}> = memo(({ tastingSheet, isLastStep }) => {
  const { timeUp, timerClassName, styleForSecond, styleForMinute } = useTastingSheetTimer(tastingSheet)

  if (isLastStep) return null
  return (
    <div>
      {timeUp ? (
        <div>
          <p>Time&apos;s up</p>
          <span>記録を続けられます</span>
        </div>
      ) : (
        <p className={timerClassName}>
          <span className="countdown font-mono text-2xl">
            残り時間
            <span style={styleForMinute} />:
            <span style={styleForSecond} />
          </span>
        </p>
      )}
    </div>
  )
})

export default TastingSheetTimer
