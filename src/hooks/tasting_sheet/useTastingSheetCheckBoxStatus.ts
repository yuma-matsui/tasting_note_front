import useAppearanceStatus from './appearance/useAppearanceStatus'
import useFlavorStatus from './flavor/useFlavorStatus'

const useTastingSheetCheckBoxStatus = (type: string) => (type === 'appearance' ? useAppearanceStatus : useFlavorStatus)

export default useTastingSheetCheckBoxStatus
