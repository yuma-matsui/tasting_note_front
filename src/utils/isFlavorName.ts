import { FlavorName } from '../types'

function isFlavorName(name: string): name is FlavorName {
  return (
    name === 'flavorFirstImpression' ||
    name === 'flavorFruit' ||
    name === 'flavorFlower' ||
    name === 'flavorSpice' ||
    name === 'flavorImpression'
  )
}

export default isFlavorName
