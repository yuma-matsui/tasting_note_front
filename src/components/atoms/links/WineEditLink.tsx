import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { WineEditLinkProps } from '../../../types'
import { useGetButtonClassName } from '../../../hooks'

const WineEditLink: FC<WineEditLinkProps> = memo(({ color, wine }) => {
  const { className } = useGetButtonClassName(color)

  return (
    <Link to={`/wines/edit/${wine.id}`} state={wine} className={className}>
      ワインの編集
    </Link>
  )
})

export default WineEditLink
