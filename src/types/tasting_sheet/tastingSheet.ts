import Appearance from './appearance/appearance'
import Conclusion from './conclusion/conclusion'
import Flavor from './flavor/flavor'
import Taste from './taste/taste'

type TastingSheet = {
  name?: string
  time: number
  color: string
  appearance: Appearance
  flavor: Flavor
  taste: Taste
  conclusion: Conclusion
}

export default TastingSheet
