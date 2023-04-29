import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { WineApi, WineColor } from '../../../types'
import { useGetButtonClassName } from '../../../hooks'

const WineEditLink: FC<{
  wine: WineApi
  color: WineColor
}> = memo(({ wine, color }) => {
  const { className } = useGetButtonClassName(color)

  return (
    <Link to={`/wines/edit/${wine.id}`} state={wine} className={className}>
      ワインの編集
    </Link>
  )
})

export default WineEditLink
