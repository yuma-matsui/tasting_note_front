import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { WineApi, WineColor } from '../../../types'

const CardInsideLink: FC<{
  text: string
  to: string
  textColor: string
  state:
    | WineApi
    | {
        id: number
        name: string
        color: WineColor
      }
}> = memo(({ text, to, textColor, state }) => (
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
