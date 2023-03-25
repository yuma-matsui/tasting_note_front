import { TastingSheetLabelsTuple } from '../../types'
import WineColor from '../../types/tasting_sheet/wineColor'
import useAppearanceLabels from './appearance/useAppearanceLabels'
import useConclusionLabels from './conclusion/useConclusionLabels'
import useFlavorLabels from './flavor/useFlavorLabels'
import useTasteLabels from './taste/useTasteLabels'

const useTastingSheetLabels = (color: WineColor): TastingSheetLabelsTuple => {
  const appearanceLabels = useAppearanceLabels(color)
  const flavorLabels = useFlavorLabels(color)
  const tasteLabels = useTasteLabels(color)
  const conclusionLabels = useConclusionLabels(color)
  const conclusionOptions = useConclusionLabels(color, 'select')

  return [
    { type: 'appearance', items: appearanceLabels, options: [] },
    { type: 'flavor', items: flavorLabels, options: [] },
    { type: 'taste', items: tasteLabels, options: [] },
    { type: 'conclusion', items: conclusionLabels, options: conclusionOptions }
  ]
}

export default useTastingSheetLabels
