import { FC, memo } from 'react'

import { useOnClickAuth } from '../../../hooks'

const SignOutButton: FC = memo(() => {
  const { onClickSignOut } = useOnClickAuth()

  return (
    <button type="button" onClick={onClickSignOut}>
      ログアウト
    </button>
  )
})

export default SignOutButton
