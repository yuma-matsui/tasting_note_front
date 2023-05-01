import { WineColor } from '../types'

const useGetButtonClassName = (color: WineColor, disabled = false, value?: string) => {
  let className = 'base-btn '
  if (color === 'red') className += 'bg-theme-red'
  if (value !== 'テイスティングをはじめる' && color === 'white') className += 'bg-theme-green'
  if (value && value === 'テイスティングをはじめる') className += ' bg-theme-red'
  if (value && (value === '次へ >>' || value === '<< 戻る')) className += ' w-28'
  if (disabled) className += ' opacity-25'

  return {
    className
  }
}

export default useGetButtonClassName
