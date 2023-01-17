import { TastingSheetAllFormItemsTuple } from '../../types'
import useAppearanceFormItems from './appearance/useAppearanceFormItems'
import useConclusionFormItems from './conclusion/useConclusionFormItems'
import useFlavorFormItems from './flavor/useFlavorFormItems'
import useTasteFormItems from './taste/useTasteFormItems'

const useTastingSheetFormAllItems = (): TastingSheetAllFormItemsTuple => {
  const appearanceItems = useAppearanceFormItems()
  const flavorItems = useFlavorFormItems()
  const tasteItems = useTasteFormItems()
  const conclusionItems = useConclusionFormItems()
  const conclusionOptions = useConclusionFormItems('select')

  return [
    { type: 'appearance', items: appearanceItems },
    { type: 'flavor', items: flavorItems },
    { type: 'taste', items: tasteItems },
    { type: 'conclusion', items: [...conclusionItems, ...conclusionOptions] }
  ]
}

export default useTastingSheetFormAllItems
