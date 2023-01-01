import { ConclusionName } from '../../../types'

const useConclusionNameCheck = () => {
  const isValidName = (name: string): name is ConclusionName =>
    name === 'evaluation' || name === 'optimumTemperature' || name === 'glass' || name === 'decantage'

  return { isValidName }
}

export default useConclusionNameCheck
