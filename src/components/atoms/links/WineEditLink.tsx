import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { WineApi } from '../../../types'

const WineEditLink: FC<{ wine: WineApi }> = memo(({ wine }) => (
  <Link to={`/wines/edit/${wine.id}`} state={wine} className="btn">
    ワインの編集
  </Link>
))

export default WineEditLink
