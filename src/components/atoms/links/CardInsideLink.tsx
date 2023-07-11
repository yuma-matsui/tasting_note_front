import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { CardInsideLinkProps } from '../../../types'

const CardInsideLink: FC<CardInsideLinkProps> = memo(({ state, text, textColor, to }) => (
  <p className="absolute top-36 w-full text-center px-2">
    {text}
    <span className={`${textColor} text-lg font-bold ml-1`}>
      <Link to={to} state={state}>
        こちら
      </Link>
    </span>
  </p>
))

export default CardInsideLink
