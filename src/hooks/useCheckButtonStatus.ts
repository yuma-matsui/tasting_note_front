import { UseCheckButtonStatusProps } from '../types'

const useCheckButtonStatus = ({ color, value }: UseCheckButtonStatusProps) => ({
  isBack: value === '戻る',
  isNext: value === '次へ',
  isRed: color === 'red',
  isStart: value === 'テイスティングをはじめる',
  isWhite: color === 'white'
})

export default useCheckButtonStatus
