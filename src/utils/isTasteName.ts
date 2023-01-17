import { TasteName } from '../types'

function isTasteName(name: string): name is TasteName {
  return (
    name === 'attack' ||
    name === 'sweetness' ||
    name === 'acidity' ||
    name === 'bitterness' ||
    name === 'astringent' ||
    name === 'alcohol' ||
    name === 'balance' ||
    name === 'afterTaste'
  )
}

export default isTasteName
