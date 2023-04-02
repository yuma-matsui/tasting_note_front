import { FC, memo } from 'react'

import { TastingSheet } from '../../../types'
import { useSetTastingSheetAndSignIn } from '../../../hooks'

const SignInAndPostButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { setTastingSheetAndSignIn } = useSetTastingSheetAndSignIn()
  const onClick = () => setTastingSheetAndSignIn(tastingSheet)

  return (
    <button type="button" onClick={onClick}>
      Googleでログインして記録する
    </button>
  )
})

export default SignInAndPostButton
