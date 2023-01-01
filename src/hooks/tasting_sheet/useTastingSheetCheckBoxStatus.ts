import useAppearanceStatus from './appearance/useAppearanceStatus'
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
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default useTastingSheetCheckBoxStatus
