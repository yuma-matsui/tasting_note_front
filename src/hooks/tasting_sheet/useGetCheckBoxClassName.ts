import WineColor from '../../types/tasting_sheet/wineColor'
import useCheckCheckBoxStatus from '../useCheckCheckBoxStatus'

const useGetCheckBoxClassName = (type: string, color: WineColor) => {
  const { isCheckBox, isRed, isWhite } = useCheckCheckBoxStatus(type, color)
  let className = isCheckBox ? 'checkbox checkbox-sm' : 'radio radio-sm'

  let boxColor = ''
  if (isRed) boxColor += isCheckBox ? ' checkbox-error' : ' radio-error'
  if (isWhite) boxColor += isCheckBox ? ' checkbox-success' : ' radio-success'
  className += boxColor

  return {
    className
  }
}

export default useGetCheckBoxClassName
