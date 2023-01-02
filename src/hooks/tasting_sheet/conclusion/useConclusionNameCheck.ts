import { ConclusionName } from '../../../types'

const useConclusionNameCheck = () => {
  const isValidName = (name: string): name is ConclusionName =>
    name === 'evaluation' ||
    name === 'optimumTemperature' ||
    name === 'glass' ||
    name === 'decantage' ||
    name === 'vintage' ||
    name === 'country' ||
    name === 'grape'

  return { isValidName }
}

export default useConclusionNameCheck
