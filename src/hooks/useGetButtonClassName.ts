import { TastingSheet } from '../types'

const useGetButtonClassName = ({ color }: TastingSheet) => {
  let className = 'base-btn '
  if (color === 'red') className += 'bg-theme-red'
  if (color === 'white') className += 'bg-theme-green'

  return {
    className
  }
}

export default useGetButtonClassName
