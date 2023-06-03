import { WineColor } from '../types'
import useCheckButtonStatus from './useCheckButtonStatus'

const useGetLabelClassName = (color: WineColor, checked: boolean | undefined) => {
  const { isRed, isWhite } = useCheckButtonStatus({ color })
  let className = 'label cursor-pointer'

  if (isRed && checked) className += ' bg-light-red'
  if (isWhite && checked) className += ' bg-light-green'

  return {
    className
  }
}

export default useGetLabelClassName
