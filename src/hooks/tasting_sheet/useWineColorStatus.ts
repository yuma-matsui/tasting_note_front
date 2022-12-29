import { WineColor } from '../../types'

const useWineColorStatus = () => {
  const isWineColor = (color: string): color is WineColor => color === 'white' || color === 'red'
  return { isWineColor }
}

export default useWineColorStatus
