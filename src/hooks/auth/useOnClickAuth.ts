import { useNavigate } from 'react-router-dom'

import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'

const useOnClickAuth = () => {
  const { deleteAccount, signOut, signIn } = useAuthContext()
  const { showToast } = useToastContext()
  const navigate = useNavigate()

  const onClickSignIn = () => signIn()

  const onClickSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (e) {
      if (e instanceof Error) throw e
    }
    showToast('ログアウトしました')
  }

  const onClickDeleteAccount = async () => {
    try {
      await deleteAccount()
      navigate('/')
    } catch (e) {
      if (e instanceof Error) throw e
    }
    showToast('アカウントを削除しました')
  }

  return {
    onClickSignIn,
    onClickDeleteAccount,
    onClickSignOut
  }
}

export default useOnClickAuth
