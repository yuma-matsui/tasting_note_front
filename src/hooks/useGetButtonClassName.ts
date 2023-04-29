import { TastingSheet } from '../types'

const useGetButtonClassName = ({ color }: TastingSheet, disabled = false, value?: string) => {
  let className = 'base-btn '
  if (color === 'red') className += 'bg-theme-red'
  if (value !== 'テイスティングをはじめる' && color === 'white') className += 'bg-theme-green'
  if (value && value === 'テイスティングをはじめる') className += ' bg-theme-red'
  if (disabled) className += ' opacity-25'

  return {
    className
  }
}

export default useGetButtonClassName
