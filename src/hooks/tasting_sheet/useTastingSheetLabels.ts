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
    { items: appearanceLabels, options: [], type: 'appearance' },
    { items: flavorLabels, options: [], type: 'flavor' },
    { items: tasteLabels, options: [], type: 'taste' },
    { items: conclusionLabels, options: conclusionOptions, type: 'conclusion' }
  ]
}

export default useTastingSheetLabels
