import useAppearanceFormItems from './appearance/useAppearanceFormItems'
import useConclusionFormItems from './conclusion/useConclusionFormItems'
import useFlavorFormItems from './flavor/useFlavorFormItems'
import useTasteFormItems from './taste/useTasteFormItems'

const useTastingSheetFormItems = () => {
  const { appearanceItems } = useAppearanceFormItems()
  const { flavorItems } = useFlavorFormItems()
  const { tasteItems } = useTasteFormItems()
  const { conclusionItems } = useConclusionFormItems()

  const formItems = [
    { type: 'appearance', items: appearanceItems },
    { type: 'flavor', items: flavorItems },
    { type: 'taste', items: tasteItems },
    { type: 'conclusion', items: conclusionItems }
  ]

  return { formItems }
}

export default useTastingSheetFormItems
