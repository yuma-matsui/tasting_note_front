import { WINE_COLORS } from '../../assets'
import { WineColor } from '../../types'

const useWineColorStatus = () => {
  const isWineColor = (color: string): color is WineColor => WINE_COLORS.includes(color)
  return { isWineColor }
}

export default useWineColorStatus
