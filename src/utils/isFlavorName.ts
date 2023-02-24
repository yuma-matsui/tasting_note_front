import { FlavorName } from '../types'

function isFlavorName(name: string): name is FlavorName {
  return (
    name === 'flavorFirstImpressions' ||
    name === 'flavorFruits' ||
    name === 'flavorFlowers' ||
    name === 'flavorSpices' ||
    name === 'flavorImpressions'
  )
}

export default isFlavorName
