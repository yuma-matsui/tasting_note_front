import WineColor from '../../types/tasting_sheet/wineColor'

const useGetCheckBoxClassName = (type: string, color: WineColor | undefined) => {
  let className = type === 'checkbox' ? 'checkbox checkbox-sm ' : 'radio radio-sm '
  let boxColor = ''
  if (color === 'red') boxColor += type === 'checkbox' ? 'checkbox-error' : 'radio-error'
  if (color === 'white') boxColor += type === 'checkbox' ? 'checkbox-success' : 'radio-success'
  className += boxColor

  return {
    className
  }
}

export default useGetCheckBoxClassName
