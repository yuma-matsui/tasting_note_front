import { CONCLUSION_FORM_ITEMS, CONCLUSION_SELECT_OPTIONS } from '../../../assets'
import { ConclusionName } from '../../../types'
import WineColor from '../../../types/tasting_sheet/wineColor'
import { FormItem } from '../../../utils'

const useConclusionLabels = (color: WineColor, type?: 'select' | undefined) => {
  const items = type === 'select' ? CONCLUSION_SELECT_OPTIONS : CONCLUSION_FORM_ITEMS
  const filterTarget = color === 'white' ? 'decantage' : ''

  return [
    ...items
      .map((item) => new FormItem<ConclusionName>({ color, ...item }).property)
      .filter(({ name }) => name !== filterTarget)
  ]
}

export default useConclusionLabels
