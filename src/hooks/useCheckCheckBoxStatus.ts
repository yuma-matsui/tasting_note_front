import { WineColor } from '../types'
import useCheckButtonStatus from './useCheckButtonStatus'

const useCheckCheckBoxStatus = (type: string, color: WineColor) => {
  const { isRed, isWhite } = useCheckButtonStatus({ color })

  return {
    isCheckBox: type === 'checkbox',
    isRed,
    isWhite
  }
}

export default useCheckCheckBoxStatus
