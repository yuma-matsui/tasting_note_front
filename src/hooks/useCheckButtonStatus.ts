import { UseCheckButtonStatusProps } from '../types'

const useCheckButtonStatus = ({ value, color }: UseCheckButtonStatusProps) => ({
  isBack: value === '戻る',
  isNext: value === '次へ',
  isStart: value === 'テイスティングをはじめる',
  isRed: color === 'red',
  isWhite: color === 'white'
})

export default useCheckButtonStatus
