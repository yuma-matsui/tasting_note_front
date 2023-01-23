import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

import useTastingSheetContext from './useTastingSheetContext'

const SIXTY_SECONDS = 60

const useTastingSheetTimer = () => {
  const {
    tastingSheet: { time }
  } = useTastingSheetContext()
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

  const formatTime = (target: number) => {
    if (target < 10) return `0${target}`
    return target
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
    convertToMin,
    convertToSecond,
    formatTime,
    secondTimer,
    timeUp: secondTimer === 0,
    halfTime: secondTimer <= (Number(time) * SIXTY_SECONDS) / 2,
    leftAMinute: secondTimer <= SIXTY_SECONDS
  }
}

export default useTastingSheetTimer
