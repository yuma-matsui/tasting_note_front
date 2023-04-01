import { CSSProperties, useCallback, useEffect, useLayoutEffect, useState } from 'react'

import { TastingSheet } from '../../types'

const SIXTY_SECONDS = 60

const useTastingSheetTimer = ({ time }: TastingSheet) => {
  const [secondTimer, setSecondTimer] = useState(Number(time) * SIXTY_SECONDS)

  const countDown = useCallback(
    () =>
      setSecondTimer((prev) => {
        if (prev === 0) return prev
        return prev - 1
      }),
    [setSecondTimer]
  )

  const convertToMin = (second: number) => Math.floor(second / SIXTY_SECONDS)
  const convertToSecond = (min: number) => min % SIXTY_SECONDS

  const getTimerStyle = (target: number) => ({ '--value': target } as CSSProperties)

  const getTimerClassName = () => {
    const halfTime = secondTimer <= (Number(time) * SIXTY_SECONDS) / 2
    const leftAMinute = secondTimer <= SIXTY_SECONDS
    return `${halfTime ? 'text-orange-400' : 'text-black'} ${leftAMinute ? 'text-red-700' : ''}`
  }

  useLayoutEffect(() => {
    setSecondTimer(Number(time) * SIXTY_SECONDS)
  }, [setSecondTimer, time])

  useEffect(() => {
    const timer = window.setInterval(countDown, 1000)
    if (secondTimer === 0) window.clearInterval(timer)

    return () => window.clearInterval(timer)
  }, [countDown, secondTimer])

  return {
    timeUp: secondTimer === 0,
    timerClassName: getTimerClassName(),
    styleForMinute: getTimerStyle(convertToMin(secondTimer)),
    styleForSecond: getTimerStyle(convertToSecond(secondTimer))
  }
}

export default useTastingSheetTimer
