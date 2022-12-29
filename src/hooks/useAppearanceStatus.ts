import { AppearanceAllLabels } from '../types'
import AppearanceName from '../types/appearance/shared/appearanceName'
import useAppearanceContext from './useAppearanceContext'

const useAppearanceStatus = (name: AppearanceName, label: AppearanceAllLabels) => {
  const { appearance } = useAppearanceContext()

  const isColorOrImpression = () => name === 'appearanceColor' || name === 'appearanceImpression'

  const checked = isColorOrImpression() ? appearance[name].includes(label) : appearance[name] === label

  const disabled = isColorOrImpression() ? appearance[name].length === 2 && !appearance[name].includes(label) : false

  return { checked, disabled }
}

export default useAppearanceStatus
