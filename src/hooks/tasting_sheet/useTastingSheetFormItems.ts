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
    { type: '外観', items: appearanceItems },
    { type: '香り', items: flavorItems },
    { type: '味わい', items: tasteItems },
    { type: 'まとめ', items: conclusionItems }
  ]

  return { formItems }
}

export default useTastingSheetFormItems
