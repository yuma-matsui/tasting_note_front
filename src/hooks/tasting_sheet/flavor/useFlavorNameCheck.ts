import { FlavorName } from '../../../types'

const useFlavorNameCheck = () => {
  const isValidName = (name: string): name is FlavorName =>
    name === 'flavorFirstImpression' ||
    name === 'flavorFruit' ||
    name === 'flavorFlower' ||
    name === 'flavorSpice' ||
    name === 'flavorImpression'

  return { isValidName }
}

export default useFlavorNameCheck
