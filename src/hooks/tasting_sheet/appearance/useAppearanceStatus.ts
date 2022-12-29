import { AppearanceAllLabels, AppearanceName } from '../../../types'
import useAppearanceContext from './useAppearanceContext'

const useAppearanceStatus = (name: AppearanceName, label: AppearanceAllLabels) => {
  const { appearance } = useAppearanceContext()

  const isColorOrImpression = () => name === 'appearanceColor' || name === 'appearanceImpression'

  const checked = isColorOrImpression() ? appearance[name].includes(label) : appearance[name] === label

  const disabled = isColorOrImpression() ? appearance[name].length === 2 && !appearance[name].includes(label) : false

  return { checked, disabled }
}

export default useAppearanceStatus
