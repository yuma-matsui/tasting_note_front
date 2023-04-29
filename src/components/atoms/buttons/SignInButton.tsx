import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'

import { useOnClickAuth } from '../../../hooks'

const SignInButton: FC = () => {
  const { onClickSignIn } = useOnClickAuth()

  return (
    <button type="button" onClick={onClickSignIn} className="base-btn bg-theme-green w-40">
      <div className="flex items-center justify-center">
        <FcGoogle className="mr-1" />
        <span>ログイン</span>
      </div>
    </button>
  )
}

export default SignInButton
