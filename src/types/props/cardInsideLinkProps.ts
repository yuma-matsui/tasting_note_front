import WineApi from '../api/wineApi'
import WineColor from '../tasting_sheet/wineColor'

type CardInsideLinkProps = {
  text: string
  to: string
  textColor: string
  state:
    | WineApi
    | {
        id: number
        name: string
        color: WineColor
      }
}

export default CardInsideLinkProps
