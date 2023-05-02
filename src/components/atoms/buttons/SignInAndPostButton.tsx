import { FC, memo } from 'react'
import { FcGoogle } from 'react-icons/fc'

import { TastingSheet } from '../../../types'
import { useSetSheetToLocalStorageAndSignIn } from '../../../hooks'

const SignInAndPostButton: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const { setTastingSheetAndSignIn } = useSetSheetToLocalStorageAndSignIn()
  const onClick = () => setTastingSheetAndSignIn(tastingSheet)

  return (
    <button type="button" onClick={onClick} className="base-btn bg-theme-green">
      <div className="flex items-center">
        <FcGoogle className="mr-1" />
        <span>ログインして記録</span>
      </div>
    </button>
  )
})

export default SignInAndPostButton
