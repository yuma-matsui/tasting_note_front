import { TastingSheet } from '../types'

const useGetButtonClassName = ({ color }: TastingSheet, value?: string, disabled = false) => {
  let className = 'base-btn '
  if (color === 'red') className += 'bg-theme-red'
  if (color === 'white') className += 'bg-theme-green'
  if (value && value === 'テイスティングをはじめる') className += ' bg-theme-pink'
  if (disabled) className += ' opacity-25'

  return {
    className
  }
}

export default useGetButtonClassName
