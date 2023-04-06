import { CSSProperties, useCallback, useEffect, useLayoutEffect, useState } from 'react'

import { TastingSheet } from '../../types'
import useToastContext from '../context/useToastContext'

const SIXTY_SECONDS = 60

const useTastingSheetTimer = ({ time }: TastingSheet) => {
  const [isJustBeforeTimeUp, setIsJustBeforeTimeUp] = useState(false)
  const [secondTimer, setSecondTimer] = useState(0)
  const { showToast } = useToastContext()

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

  const timeUp = secondTimer === 0 && isJustBeforeTimeUp
  const halfTime = secondTimer <= (Number(time) * SIXTY_SECONDS) / 2 && secondTimer !== 0
  const leftAMinute = secondTimer <= SIXTY_SECONDS && secondTimer !== 0

  const getTimerClassName = () => `${halfTime ? 'text-orange-400' : 'text-black'} ${leftAMinute ? 'text-red-700' : ''}`

  useLayoutEffect(() => {
    setSecondTimer(Number(time) * SIXTY_SECONDS)
  }, [setSecondTimer, time])

  useEffect(() => {
    const timer = window.setInterval(countDown, 1000)
    if (timeUp) window.clearInterval(timer)

    return () => window.clearInterval(timer)
  }, [countDown, timeUp])

  useEffect(() => {
    if (secondTimer === 1) setIsJustBeforeTimeUp(true)
  }, [secondTimer])

  useEffect(() => {
    if (halfTime) showToast({ text: '残り時間半分です', type: 'warning' })
    if (leftAMinute) showToast({ text: '残り時間1分です', type: 'warning' })
    if (timeUp) showToast({ text: '時間切れです', type: 'error' })
  }, [halfTime, leftAMinute, showToast, timeUp])

  return {
    timeUp,
    timerClassName: getTimerClassName(),
    styleForMinute: getTimerStyle(convertToMin(secondTimer)),
    styleForSecond: getTimerStyle(convertToSecond(secondTimer))
  }
}

export default useTastingSheetTimer
