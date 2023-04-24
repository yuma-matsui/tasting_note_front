import { isFlavorName } from '../../utils'

const useGetIsMultipleInputs = () => {
  const isMultipleInputs = (name: string) =>
    isFlavorName(name) || name === 'appearanceColors' || name === 'appearanceImpressions'

  return {
    isMultipleInputs
  }
}

export default useGetIsMultipleInputs
