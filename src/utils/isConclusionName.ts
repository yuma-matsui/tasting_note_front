import { ConclusionName } from '../types'

function isConclusionName(name: string): name is ConclusionName {
  return (
    name === 'evaluation' ||
    name === 'optimumTemperature' ||
    name === 'glass' ||
    name === 'decantage' ||
    name === 'country' ||
    name === 'grape' ||
    name === 'vintage'
  )
}

export default isConclusionName
