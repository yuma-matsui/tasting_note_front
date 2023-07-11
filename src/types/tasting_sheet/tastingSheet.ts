import Appearance from './appearance/appearance'
import Conclusion from './conclusion/conclusion'
import Flavor from './flavor/flavor'
import Taste from './taste/taste'
import WineColor from './wineColor'

type TastingSheet = {
  name: string
  appearance: Appearance
  color: WineColor
  conclusion: Conclusion
  flavor: Flavor
  taste: Taste
  time: string
}

export default TastingSheet
