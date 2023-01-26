import { FC, memo } from 'react'

import { useTastingSheetTimer } from '../../hooks'
import { TastingSheetTimerProps } from '../../types'

const TastingSheetTimer: FC<TastingSheetTimerProps> = memo(({ isLastStep }) => {
  const { convertToMin, convertToSecond, formatTime, secondTimer, timeUp, halfTime, leftAMinute } =
    useTastingSheetTimer()

  const timerColor = `${halfTime ? 'text-orange-400' : 'text-white'} ${leftAMinute ? 'text-red-700' : ''}`

  if (isLastStep) return null
  return (
    <div>
      {timeUp ? (
        <div>
          <p>Time&apos;s up</p>
          <span>記録を続けられます</span>
        </div>
      ) : (
        <p>
          残り時間：
          <span className={timerColor}>
            {convertToMin(secondTimer)}:{formatTime(convertToSecond(secondTimer))}
          </span>
        </p>
      )}
    </div>
  )
})

export default TastingSheetTimer
