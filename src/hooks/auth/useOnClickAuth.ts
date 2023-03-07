import { useNavigate } from 'react-router-dom'

import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'

const useOnClickAuth = () => {
  const { deleteAccount, signOut, signIn } = useAuthContext()
  const { showToast } = useToastContext()
  const navigate = useNavigate()

  const onClickSignIn = async () => {
    try {
      await signIn()
    } catch (e) {
      if (e instanceof Error) throw e
    }
    showToast('ログインしました')
  }

  const onClickSignOut = async () => {
    try {
      await signOut()
    } catch (e) {
      if (e instanceof Error) throw e
    }
    showToast('ログアウトしました')
    navigate('/')
  }

  const onClickDeleteAccount = async () => {
    try {
      await deleteAccount()
    } catch (e) {
      if (e instanceof Error) throw e
    }
    showToast('アカウントを削除しました')
    navigate('/')
  }

  return {
    onClickSignIn,
    onClickDeleteAccount,
    onClickSignOut
  }
}

export default useOnClickAuth
