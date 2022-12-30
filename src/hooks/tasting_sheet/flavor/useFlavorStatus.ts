import { FlavorAllLabels, FlavorName } from '../../../types/tasting_sheet/flavor'
import useFlavorContext from './useFlavorContext'

const useFlavorStatus = (name: FlavorName, label: FlavorAllLabels) => {
  const { flavor } = useFlavorContext()

  const checked = flavor[name].includes(label)
  const disabled = flavor[name].length === 2 && !flavor[name].includes(label)

  return { checked, disabled }
}

export default useFlavorStatus
