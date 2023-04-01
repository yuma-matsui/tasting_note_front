import { FC, memo } from 'react'

import { usePostTastingSheet } from '../../../hooks'
import { TastingSheet } from '../../../types'

const SignInAndPostButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { signInAndPostTastingSheet } = usePostTastingSheet(tastingSheet)
  const onClick = () => signInAndPostTastingSheet()

  return (
    <button type="button" onClick={onClick}>
      Googleでログインして記録する
    </button>
  )
})

export default SignInAndPostButton
