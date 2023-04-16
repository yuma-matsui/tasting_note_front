import { FC, memo } from 'react'

import { TastingSheet } from '../../../types'
import { useSignInAndPostTastingSheet } from '../../../hooks'

const SignInAndPostButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { signInAndPostTastingSheet } = useSignInAndPostTastingSheet()
  const onClick = () => signInAndPostTastingSheet(tastingSheet)

  return (
    <button type="button" onClick={onClick}>
      Googleでログインして記録する
    </button>
  )
})

export default SignInAndPostButton
