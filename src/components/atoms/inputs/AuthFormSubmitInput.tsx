import { FC, memo } from 'react'

import { useGetButtonClassName } from '../../../hooks'
import { WineColor } from '../../../types'

const AuthFormSubmitInput: FC<{
  value: string
  color: WineColor
}> = memo(({ value, color }) => {
  const { className } = useGetButtonClassName(color)

  return <input type="submit" value={value} className={`${className} w-28 self-center`} />
})

export default AuthFormSubmitInput
