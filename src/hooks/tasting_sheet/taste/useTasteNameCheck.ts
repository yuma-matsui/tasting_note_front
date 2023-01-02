import { TasteName } from '../../../types'

const useTasteNameCheck = () => {
  const isValidName = (name: string): name is TasteName =>
    name === 'attack' ||
    name === 'sweetness' ||
    name === 'acidity' ||
    name === 'astringent' ||
    name === 'bitterness' ||
    name === 'balance' ||
    name === 'alcohol' ||
    name === 'afterTaste'

  return { isValidName }
}

export default useTasteNameCheck
