import { TastingSheetFormType } from '../../types'
import useAppearanceFormItems from './appearance/useAppearanceFormItems'
import useConclusionFormItems from './conclusion/useConclusionFormItems'
import useFlavorFormItems from './flavor/useFlavorFormItems'
import useTasteFormItems from './taste/useTasteFormItems'

const useGetFormItemsHooks = (type: TastingSheetFormType) => {
  switch (type) {
    case 'appearance':
      return useAppearanceFormItems
    case 'flavor':
      return useFlavorFormItems
    case 'taste':
      return useTasteFormItems
    case 'conclusion':
      return useConclusionFormItems
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default useGetFormItemsHooks
