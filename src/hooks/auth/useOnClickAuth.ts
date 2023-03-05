import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'

const useOnClickAuth = () => {
  const { deleteAccount, signOut, signIn } = useAuthContext()
  const { showToast } = useToastContext()

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
  }

  const onClickDeleteAccount = async () => {
    try {
      await deleteAccount()
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
