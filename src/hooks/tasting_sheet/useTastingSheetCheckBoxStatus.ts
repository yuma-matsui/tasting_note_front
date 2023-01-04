import useAppearanceStatus from './appearance/useAppearanceStatus'
import useConclusionStatus from './conclusion/useConclusionStatus'
import useFlavorStatus from './flavor/useFlavorStatus'
import useTasteStatus from './taste/useTasteStatus'

const useTastingSheetCheckBoxStatus = (type: string) => {
  switch (type) {
    case 'appearance':
      return useAppearanceStatus
    case 'flavor':
      return useFlavorStatus
    case 'taste':
      return useTasteStatus
    case 'conclusion':
      return useConclusionStatus
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default useTastingSheetCheckBoxStatus
