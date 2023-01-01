import Appearance from './appearance/appearance'
import Flavor from './flavor/flavor'
import Taste from './taste/taste'

type TastingSheet = {
  name?: string
  time: number
  color: string
  appearance: Appearance
  flavor: Flavor
  taste: Taste
}

export default TastingSheet
