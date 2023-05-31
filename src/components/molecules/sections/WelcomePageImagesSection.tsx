import { FC, memo } from 'react'

import appearance_sheet from '../../../assets/images/sheets/appearance_sheet.jpg'
import flavor_sheet from '../../../assets/images/sheets/flavor_sheet.jpg'
import taste_sheet from '../../../assets/images/sheets/taste_sheet.jpg'
import conclusion_sheet from '../../../assets/images/sheets/conclusion_sheet.jpg'
import DemoImageContainer from '../DemoImageContainer'

const WelcomePageImagesSection: FC = memo(() => (
  <div className="sub-wrapper mb-4 grid grid-cols-2 gap-6">
    <DemoImageContainer text="外観" src={appearance_sheet} alt="appearance-sheet" />
    <DemoImageContainer text="香り" src={flavor_sheet} alt="flavor-sheet" />
    <DemoImageContainer text="味わい" src={taste_sheet} alt="taste-sheet" />
    <DemoImageContainer text="まとめ" src={conclusion_sheet} alt="conclusion-sheet" />
  </div>
))

export default WelcomePageImagesSection
