import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { useGetButtonClassName } from '../../../hooks'
import { WineEditLinkProps } from '../../../types'

const WineEditLink: FC<WineEditLinkProps> = memo(({ color, wine }) => {
  const { className } = useGetButtonClassName(color)

  return (
    <Link to={`/wines/edit/${wine.id}`} state={wine} className={className}>
      ワインの編集
    </Link>
  )
})

export default WineEditLink
