import { TASTE_FORM_ITEMS } from '../../../assets'
import { TasteName } from '../../../types'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../../context/useTastingSheetContext'

const useTasteLabels = () => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  const filterTarget = color === 'white' ? 'astringent' : 'bitterness'

  return [
    ...TASTE_FORM_ITEMS.map((item) => new FormItem<TasteName>({ color, ...item }).property).filter(
      ({ name }) => name !== filterTarget
    )
  ]
}

export default useTasteLabels
