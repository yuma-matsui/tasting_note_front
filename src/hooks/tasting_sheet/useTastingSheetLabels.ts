import { TastingSheetLabelsTuple } from '../../types'
import useAppearanceLabels from './appearance/useAppearanceLabels'
import useConclusionLabels from './conclusion/useConclusionLabels'
import useFlavorLabels from './flavor/useFlavorLabels'
import useTasteLabels from './taste/useTasteLabels'

const useTastingSheetLabels = (): TastingSheetLabelsTuple => {
  const appearanceLabels = useAppearanceLabels()
  const flavorLabels = useFlavorLabels()
  const tasteLabels = useTasteLabels()
  const conclusionLabels = useConclusionLabels()
  const conclusionOptions = useConclusionLabels('select')

  return [
    { type: 'appearance', items: appearanceLabels, options: [] },
    { type: 'flavor', items: flavorLabels, options: [] },
    { type: 'taste', items: tasteLabels, options: [] },
    { type: 'conclusion', items: conclusionLabels, options: conclusionOptions }
  ]
}

export default useTastingSheetLabels
