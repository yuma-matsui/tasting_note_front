import { useErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'

import useToastContext from '../context/useToastContext'
import useDeleteAccount from './useDeleteAccount'
import useSignOutUser from './useSignOutUser'

const useOnClickAuth = () => {
  const { showBoundary } = useErrorBoundary()

  const { signOut } = useSignOutUser()
  const { deleteAccount } = useDeleteAccount()
  const { showToast } = useToastContext()
  const navigate = useNavigate()

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
    onClickDeleteAccount,
    onClickSignOut
  }
}

export default useOnClickAuth
