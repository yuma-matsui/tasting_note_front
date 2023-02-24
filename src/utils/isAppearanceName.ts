import { AppearanceName } from '../types'

function isAppearanceName(name: string): name is AppearanceName {
  return (
    name === 'clarity' ||
    name === 'brightness' ||
    name === 'appearanceColors' ||
    name === 'intensity' ||
    name === 'consistency' ||
    name === 'appearanceImpressions'
  )
}

export default isAppearanceName
