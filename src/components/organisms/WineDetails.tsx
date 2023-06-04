import { FC, memo } from 'react'

import { WineDetailsProps } from '../../types'
import { WineEditLink, WineImage } from '../atoms'
import { DetailsPageBottomButtons, WineDetailsTitle } from '../molecules'
import WineDetailLists from './WineDetailLists'

const WineDetails: FC<WineDetailsProps> = memo(({ wine, tastingSheet }) => (
  <>
    <WineDetailsTitle wine={wine} />
    {wine.image && <WineImage filename={wine.image} />}
    <WineDetailLists wine={wine} />
    <DetailsPageBottomButtons rightButton={<WineEditLink wine={wine} color={tastingSheet.color} />} />
  </>
))

export default WineDetails
