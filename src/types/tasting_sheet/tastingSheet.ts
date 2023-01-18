import Appearance from './appearance/appearance'
import Conclusion from './conclusion/conclusion'
import Flavor from './flavor/flavor'
import Taste from './taste/taste'
import WineColor from './wineColor'

type TastingSheet = {
  name: string
  time: string
  color: WineColor
  appearance: Appearance
  flavor: Flavor
  taste: Taste
  conclusion: Conclusion
}

export default TastingSheet
