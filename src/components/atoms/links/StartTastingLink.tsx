import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

const StartTastingLink: FC<{
  text: string
}> = memo(({ text }) => (
  <Link
    type="button"
    to="/tasting_sheets/new"
    className={`
      rounded-full
      shadow-md
      bg-transparent
      border-8
      border-theme-yellow
      text-theme-yellow
      font-bold bottom-2
      text-lg
      py-2
      mt-4
      w-full
      sm:w-96
      block
      mx-auto
      text-center
      ${text === 'テイスティングをはじめる' ? 'sticky' : ''}
    `}
  >
    {text}
  </Link>
))

export default StartTastingLink
