import { AppearanceName } from '../../../types'

const useAppearanceNameCheck = () => {
  const isValidName = (name: string): name is AppearanceName =>
    name === 'clarity' ||
    name === 'brightness' ||
    name === 'appearanceColor' ||
    name === 'intensity' ||
    name === 'consistency' ||
    name === 'appearanceImpression'

  return { isValidName }
}

export default useAppearanceNameCheck
