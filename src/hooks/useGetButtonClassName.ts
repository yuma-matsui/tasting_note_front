import { WineColor } from '../types'
import useCheckButtonStatus from './useCheckButtonStatus'

const useGetButtonClassName = (color: WineColor, disabled = false, value?: string) => {
  const { isBack, isRed, isStart, isWhite } = useCheckButtonStatus({ color, value })

  let className = 'base-btn'
  if (isBack) className += ' bg-transparent border w-32'
  if (isBack && isWhite) className += ' border-theme-green text-theme-green'
  if (isBack && isRed) className += ' border-theme-red text-theme-red'
  if ((isRed && !isBack) || isStart) className += ' bg-theme-red'
  if (!isStart && !isBack && isWhite) className += ' bg-theme-green'
  if (!isBack && !isStart) className += ' w-44'
  if (disabled) className += ' opacity-25'

  return {
    className
  }
}

export default useGetButtonClassName
