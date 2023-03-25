import { TASTE_FORM_ITEMS } from '../../../assets'
import { TasteName } from '../../../types'
import WineColor from '../../../types/tasting_sheet/wineColor'
import { FormItem } from '../../../utils'

const useTasteLabels = (color: WineColor) => {
  const filterTarget = color === 'white' ? 'astringent' : 'bitterness'

  return [
    ...TASTE_FORM_ITEMS.map((item) => new FormItem<TasteName>({ color, ...item }).property).filter(
      ({ name }) => name !== filterTarget
    )
  ]
}

export default useTasteLabels
