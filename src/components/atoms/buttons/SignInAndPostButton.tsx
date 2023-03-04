import { FC, memo } from 'react'
import { usePostTastingSheet } from '../../../hooks'

const SignInAndPostButton: FC = memo(() => {
  const { signInAndPostTastingSheet } = usePostTastingSheet()
  const onClick = () => signInAndPostTastingSheet()

  return (
    <button type="button" onClick={onClick}>
      Googleでログインして記録する
    </button>
  )
})

export default SignInAndPostButton
