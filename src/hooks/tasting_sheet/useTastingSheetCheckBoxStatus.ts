import useAppearanceStatus from './appearance/useAppearanceStatus'
import useFlavorStatus from './flavor/useFlavorStatus'

const useTastingSheetCheckBoxStatus = (type: string) => (type === '外観' ? useAppearanceStatus : useFlavorStatus)

export default useTastingSheetCheckBoxStatus
