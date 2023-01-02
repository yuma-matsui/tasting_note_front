import useAppearanceStatus from './appearance/useAppearanceStatus'
import useConclusionStatus from './conclusion/useConclusionStatus'
import useFlavorStatus from './flavor/useFlavorStatus'
import useTasteStatus from './taste/useTasteStatus'

const useTastingSheetCheckBoxStatus = (type: string) => {
  switch (type) {
    case '外観':
      return useAppearanceStatus
    case '香り':
      return useFlavorStatus
    case '味わい':
      return useTasteStatus
    case 'まとめ':
      return useConclusionStatus
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default useTastingSheetCheckBoxStatus
