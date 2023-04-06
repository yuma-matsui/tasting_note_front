import { FC } from 'react'

import { useOnClickAuth } from '../../../hooks'

const SignInButton: FC = () => {
  const { onClickSignIn } = useOnClickAuth()

  return (
    <button type="button" onClick={onClickSignIn}>
      Googleでログイン
    </button>
  )
}

export default SignInButton
