import { AppearanceName } from '../types'

function isAppearanceName(name: string): name is AppearanceName {
  return (
    name === 'clarity' ||
    name === 'brightness' ||
    name === 'appearanceColor' ||
    name === 'intensity' ||
    name === 'consistency' ||
    name === 'appearanceImpression'
  )
}

export default isAppearanceName
