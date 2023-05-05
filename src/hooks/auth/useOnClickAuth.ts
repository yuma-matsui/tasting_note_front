import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import { SIGNED_IN_KEY } from '../../utils'
import useSignOutUser from './useSignOutUser'
import useDeleteAccount from './useDeleteAccount'

const useOnClickAuth = () => {
  const { showBoundary } = useErrorBoundary()

  const { signIn } = useAuthContext()
  const { signOut } = useSignOutUser()
  const { deleteAccount } = useDeleteAccount()
  const { showToast } = useToastContext()
  const navigate = useNavigate()

  const onClickSignIn = async () => {
    try {
      window.localStorage.setItem(SIGNED_IN_KEY, 'signedIn')
      await signIn()
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  const onClickSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
    showToast({
      text: 'ログアウトしました',
      type: 'success'
    })
  }

  const onClickDeleteAccount = async () => {
    try {
      await deleteAccount()
      navigate('/')
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
    showToast({
      text: 'アカウントを削除しました',
      type: 'success'
    })
  }

  return {
    onClickSignIn,
    onClickDeleteAccount,
    onClickSignOut
  }
}

export default useOnClickAuth
