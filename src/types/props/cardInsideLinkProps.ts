import WineApi from '../api/wineApi'
import WineColor from '../tasting_sheet/wineColor'

type CardInsideLinkProps = {
  state:
    | WineApi
    | {
        id: number
        name: string
        color: WineColor
      }
  text: string
  textColor: string
  to: string
}

export default CardInsideLinkProps
