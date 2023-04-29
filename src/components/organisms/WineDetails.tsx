import { FC, memo } from 'react'

import { TastingSheetApi, WineApi } from '../../types'
import { WineEditLink, WineImage } from '../atoms'
import { DetailsPageBottomButtons, WineDetailsTitle } from '../molecules'
import WineDetailLists from './WineDetailLists'

const WineDetails: FC<{
  wine: WineApi
  tastingSheet: TastingSheetApi
}> = memo(({ wine, tastingSheet }) => (
  <>
    <WineDetailsTitle wine={wine} />
    {wine.image && <WineImage filename={wine.image} />}
    <WineDetailLists wine={wine} />
    <DetailsPageBottomButtons rightButton={<WineEditLink wine={wine} color={tastingSheet.color} />} />
  </>
))

export default WineDetails
