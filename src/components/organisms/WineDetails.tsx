import { FC, memo } from 'react'

import { WineApi } from '../../types'
import { WineEditLink, WineImage } from '../atoms'
import { DetailsPageBottomButtons, WineDetailsTitle } from '../molecules'
import WineDetailLists from './WineDetailLists'

const WineDetails: FC<{ wine: WineApi }> = memo(({ wine }) => (
  <>
    <WineDetailsTitle wine={wine} />
    {wine.image && <WineImage filename={wine.image} />}
    <WineDetailLists wine={wine} />
    <DetailsPageBottomButtons rightButton={<WineEditLink wine={wine} />} />
  </>
))

export default WineDetails
