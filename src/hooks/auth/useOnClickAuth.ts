import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import { SIGNED_IN_KEY } from '../../utils'

const useOnClickAuth = () => {
  const { showBoundary } = useErrorBoundary()

  const { deleteAccount, signOut, signIn } = useAuthContext()
  const { showToast } = useToastContext()
  const navigate = useNavigate()

  const onClickSignIn = () => {
    signIn()
    window.localStorage.setItem(SIGNED_IN_KEY, 'signedIn')
  }

  const onClickSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
    showToast({ text: 'ログアウトしました' })
  }

  const onClickDeleteAccount = async () => {
    try {
      await deleteAccount()
      navigate('/')
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
    showToast({ text: 'アカウントを削除しました' })
  }

  return {
    onClickSignIn,
    onClickDeleteAccount,
    onClickSignOut
  }
}

export default useOnClickAuth
